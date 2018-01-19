import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

import { LoadingType, LoadingMode, LoadingStrategy, AtLoadingComponent } from '../loading.component';
import { AtLoadingService } from '../services/loading.service';
import { ILoadingRef } from '../services/loading.factory';

/**
 * Context class for variable reference
 */
export class AtLoadingContext {
  public $implicit: any = undefined;
  public atLoading: any = undefined;
}

// Constant for generation of the id for the next component
let TD_LOADING_NEXT_ID: number = 0;

@Directive({
  selector: '[atLoading]',
})
export class AtLoadingDirective implements OnInit, OnDestroy {

  private _context: AtLoadingContext = new AtLoadingContext();
  private _type: LoadingType;
  private _mode: LoadingMode;
  private _strategy: LoadingStrategy;
  private _name: string;
  private _loadingRef: ILoadingRef;

  /**
   * atLoading: string
   * Name reference of the loading mask, used to register/resolve requests to the mask.
   */
  @Input('atLoading')
  set name(name: string) {
    if (!this._name) {
      if (name) {
        this._name = name;
      }
    }
  }

  /**
   * atLoadingUntil?: any
   * If its null, undefined or false it will be used to register requests to the mask.
   * Else if its any value that can be resolved as true, it will resolve the mask.
   * [name] is optional when using [until], but can still be used to register/resolve it manually.
   */
  @Input('atLoadingUntil')
  set until(until: any) {
    if (!this._name) {
      this._name = 'at-loading-until-' + TD_LOADING_NEXT_ID++;
    }
    this._context.$implicit = this._context.atLoading = until;
    if (!until) {
      this._loadingService.register(this._name);
    } else {
      this._loadingService.resolveAll(this._name);
    }
  }

  /**
   * atLoadingType?: LoadingType or ['linear' | 'circular']
   * Sets the type of loading mask depending on value.
   * Defaults to [LoadingType.Circular | 'circular'].
   */
  @Input('atLoadingType')
  set type(type: LoadingType) {
    switch (type) {
      case LoadingType.Linear:
        this._type = LoadingType.Linear;
        break;
      default:
        this._type = LoadingType.Circular;
        break;
    }
  }

  /**
   * atLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
   * Sets the mode of loading mask depending on value.
   * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
   */
  @Input('atLoadingMode')
  set mode(mode: LoadingMode) {
    switch (mode) {
      case LoadingMode.Determinate:
        this._mode = LoadingMode.Determinate;
        break;
      default:
        this._mode = LoadingMode.Indeterminate;
        break;
    }
  }

  /**
   * atLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
   * Sets the strategy of loading mask depending on value.
   * Defaults to [LoadingMode.Replace | 'replace'].
   */
  @Input('atLoadingStrategy')
  set strategy(stategy: LoadingStrategy) {
    switch (stategy) {
      case LoadingStrategy.Overlay:
        this._strategy = LoadingStrategy.Overlay;
        break;
      default:
        this._strategy = LoadingStrategy.Replace;
        break;
    }
  }

  /**
   * atLoadingColor?: "primary" | "accent" | "warn"
   * Sets the theme color of the loading component. Defaults to "primary"
   */
  @Input('atLoadingColor') color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor(private _viewContainerRef: ViewContainerRef,
              private _templateRef: TemplateRef<AtLoadingContext>,
              private _loadingService: AtLoadingService) {}

  /**
   * Registers component in the DOM, so it will be available when calling resolve/register.
   */
  ngOnInit(): void {
    this._registerComponent();
  }

  /**
   * Remove component when directive is destroyed.
   */
  ngOnDestroy(): void {
    this._loadingService.removeComponent(this._name);
    this._loadingRef = undefined;
  }

  /**
   * Creates [AtLoadingComponent] and attaches it to this directive's [ViewContainerRef].
   * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
   */
  private _registerComponent(): void {
    if (!this._name) {
      throw new Error('Name is needed to register loading directive');
    }
    // Check if `AtLoadingComponent` has been created before trying to add one again.
    // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
    if (!this._loadingRef) {
      this._loadingRef = this._loadingService.createComponent({
        name: this._name,
        type: this._type,
        mode: this._mode,
        color: this.color,
        strategy: this._strategy,
      }, this._viewContainerRef, this._templateRef, this._context);
    }
  }
}
