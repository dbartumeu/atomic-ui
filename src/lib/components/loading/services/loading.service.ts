import { Injectable, Provider, SkipSelf, Optional } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AtLoadingContext } from '../directives/loading.directive';
import { AtLoadingComponent, LoadingMode, LoadingStrategy, LoadingType } from '../loading.component';
import { AtLoadingFactory, ILoadingRef } from './loading.factory';

export interface IAtLoadingConfig {
  name: string;
  type?: LoadingType;
  mode?: LoadingMode;
  color?: 'primary' | 'accent' | 'warn';
}

export class AtLoadingConfig implements IAtLoadingConfig {
  name: string;
  type?: LoadingType;
  mode?: LoadingMode;
  color?: 'primary' | 'accent' | 'warn';

  constructor(config: IAtLoadingConfig) {
    this.name = config.name;
    if (!this.name) {
      throw Error('Name is required for [AtLoading] configuration.');
    }
    this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
    this.type = config.type ? config.type : LoadingType.Circular;
    this.color = config.color ? config.color : 'primary';
  }
}

export interface IAtLoadingDirectiveConfig extends IAtLoadingConfig {
  strategy?: LoadingStrategy;
}

export class AtLoadingDirectiveConfig extends AtLoadingConfig implements IAtLoadingDirectiveConfig {
  name: string;
  type: LoadingType;
  mode: LoadingMode;
  strategy: LoadingStrategy;

  constructor(config: IAtLoadingDirectiveConfig) {
    super(config);
    this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
  }
}

@Injectable()
export class AtLoadingService {

  private _context: {[key: string]: ILoadingRef} = {};
  private _timeouts: {[key: string]: any} = {};

  constructor(private _loadingFactory: AtLoadingFactory) {
    this.create({
      name: 'at-loading-main',
    });
  }

  /**
   * params:
   * - config: ILoadingDirectiveConfig
   * - viewContainerRef: ViewContainerRef
   * - templateRef: TemplateRef<Object>
   *
   * Creates an replace loading mask and attaches it to the viewContainerRef.
   * Replaces the templateRef with the mask when a request is registered on it.
   *
   * NOTE: @internal usage only.
   */
  createComponent(config: IAtLoadingDirectiveConfig, viewContainerRef: ViewContainerRef,
                  templateRef: TemplateRef<Object>, context: AtLoadingContext): ILoadingRef {
    let directiveConfig: AtLoadingDirectiveConfig = new AtLoadingDirectiveConfig(config);
    if (this._context[directiveConfig.name]) {
      throw Error(`Name duplication: [AtLoading] directive has a name conflict with ${directiveConfig.name}.`);
    }
    if (directiveConfig.strategy === LoadingStrategy.Overlay) {
      this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
    } else {
      this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
    }
    return this._context[directiveConfig.name];
  }

  /**
   * params:
   * - config: IAtLoadingConfig
   *
   * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
   * Only displayed when the mask has a request registered on it.
   */
  public create(config: IAtLoadingConfig): void {
    let fullscreenConfig: AtLoadingConfig = new AtLoadingConfig(config);
    this.removeComponent(fullscreenConfig.name);
    this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
  }

  /**
   * params:
   * - name: string
   *
   * Removes `loading` component from service context.
   */
  public removeComponent(name: string): void {
    if (this._context[name]) {
      this._context[name].subject.unsubscribe();
      if (this._context[name].componentRef) {
        this._context[name].componentRef.destroy();
      }
      this._context[name] = undefined;
      delete this._context[name];
    }
  }

  /**
   * params:
   * - name: string
   * - registers?: number
   * returns: true if successful
   *
   * Resolves a request for the loading mask referenced by the name parameter.
   * Can optionally pass registers argument to set a number of register calls.
   *
   * If no paramemeters are used, then default main mask will be used.
   *
   * e.g. loadingService.register()
   */
  public register(name: string = 'at-loading-main', registers: number = 1): boolean {
    // try registering into the service if the loading component has been instanciated or if it exists.
    if (this._context[name]) {
      registers = registers < 1 ? 1 : registers;
      this._context[name].times += registers;
      this._context[name].subject.next(this._context[name].times);
      return true;
    } else {
      // if it doesnt exist, set a timeout so its registered after change detection happens
      // this in case "register" occured on the `ngOnInit` lifehook cycle.
      if (!this._timeouts[name]) {
        this._timeouts[name] = setTimeout(() => {
          this.register(name, registers);
        });
      } else {
        // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
        this._clearTimeout(name);
      }
    }
    return false;
  }

  /**
   * params:
   * - name: string
   * - resolves?: number
   * returns: true if successful
   *
   * Resolves a request for the loading mask referenced by the name parameter.
   * Can optionally pass resolves argument to set a number of resolve calls.
   *
   * If no paramemeters are used, then default main mask will be used.
   *
   * e.g. loadingService.resolve()
   */
  public resolve(name: string = 'at-loading-main', resolves: number = 1): boolean {
    // clear timeout if the loading component is "resolved" before its "registered"
    this._clearTimeout(name);
    if (this._context[name]) {
      resolves = resolves < 1 ? 1 : resolves;
      if (this._context[name].times > 0) {
        let times: number = this._context[name].times;
        times -= resolves;
        this._context[name].times = times < 0 ? 0 : times;
      }
      this._context[name].subject.next(this._context[name].times);
      return true;
    }
    return false;
  }

  /**
   * params:
   * - name: string
   * returns: true if successful
   *
   * Resolves all request for the loading mask referenced by the name parameter.
   *
   * If no paramemeters are used, then default main mask will be used.
   *
   * e.g. loadingService.resolveAll()
   */
  public resolveAll(name: string = 'at-loading-main'): boolean {
    // clear timeout if the loading component is "resolved" before its "registered"
    this._clearTimeout(name);
    if (this._context[name]) {
      this._context[name].times = 0;
      this._context[name].subject.next(this._context[name].times);
      return true;
    }
    return false;
  }

  /**
   * params:
   * - name: string
   * - value: number
   * returns: true if successful
   *
   * Set value on a loading mask referenced by the name parameter.
   * Usage only available if its mode is 'determinate' and if loading is showing.
   */
  public setValue(name: string, value: number): boolean {
    if (this._context[name]) {
      let instance: AtLoadingComponent = this._context[name].componentRef.instance;
      if (instance.mode === LoadingMode.Determinate && instance.animation) {
        instance.value = value;
        return true;
      }
    }
    return false;
  }

  /**
   * Clears timeout linked to the name.
   * @param name Name of the loading component to be cleared
   */
  private _clearTimeout(name: string): void {
    clearTimeout(this._timeouts[name]);
    delete this._timeouts[name];
  }
}

export function LOADING_PROVIDER_FACTORY(
    parent: AtLoadingService, loadingFactory: AtLoadingFactory): AtLoadingService {
  return parent || new AtLoadingService(loadingFactory);
}

export const LOADING_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: AtLoadingService,
  deps: [[new Optional(), new SkipSelf(), AtLoadingService], AtLoadingFactory],
  useFactory: LOADING_PROVIDER_FACTORY,
};
