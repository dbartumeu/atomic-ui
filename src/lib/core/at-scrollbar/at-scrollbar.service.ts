import {Inject, Injectable} from '@angular/core';
import * as _ from 'lodash';
import Scrollbar from 'smooth-scrollbar';

export interface IAtScrollbarsConfig {
    /**
     * Scrolling speed scale.
     */
    speed?: number;

    /**
     * Delta reduction damping, a float value between (0, 1), the lower the value is, the more smooth the scrolling will be.
     */
    damping?: number;

    /**
     * Minimal size for scrollbar thumb.
     */
    thumbMinSize?: number;

    /**
     * Execute listeners in synchronous or asynchronous.
     */
    syncCallbacks?: boolean;

    /**
     * Render scrolling by integer pixels, set to true to improve performance.
     */
    renderByPixels?: boolean;

    /**
     * Keep scrollbar tracks visible whether it's scrolling or not.
     */
    alwaysShowTracks?: boolean;

    /**
     * Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge.
     * When set to 'auto', it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
     */
    continuousScrolling?: any;

    /**
     * Experimental overscroll effect, 'bounce' for iOS style effect and 'glow' for Android style effect.
     * Be careful when you enable this feature!
     */
    overscrollEffect?: any;

    /**
     * Canvas paint color with 'glow' effect.
     */
    overscrollEffectColor?: string;

    /**
     * The same as damping, but for overscrolling.
     */
    overscrollDamping?: number;
}

export class AtScrollbarsConfig implements IAtScrollbarsConfig {
    /**
     * Scrolling speed scale.
     */
    speed?: number;

    /**
     * Delta reduction damping, a float value between (0, 1), the lower the value is, the more smooth the scrolling will be.
     */
    damping?: number;

    /**
     * Minimal size for scrollbar thumb.
     */
    thumbMinSize?: number;

    /**
     * Execute listeners in synchronous or asynchronous.
     */
    syncCallbacks?: boolean;

    /**
     * Render scrolling by integer pixels, set to true to improve performance.
     */
    renderByPixels?: boolean;

    /**
     * Keep scrollbar tracks visible whether it's scrolling or not.
     */
    alwaysShowTracks?: boolean;

    /**
     * Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge.
     * When set to 'auto', it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
     */
    continuousScrolling?: any;

    /**
     * Experimental overscroll effect, 'bounce' for iOS style effect and 'glow' for Android style effect.
     * Be careful when you enable this feature!
     */
    overscrollEffect?: any;

    /**
     * Canvas paint color with 'glow' effect.
     */
    overscrollEffectColor?: string;

    /**
     * The same as damping, but for overscrolling.
     */
    overscrollDamping?: number;

    constructor(config?: AtScrollbarsConfig) {
        this.speed = config && config.speed ? config.speed : 1;
        if (this.speed < 1) {
            throw Error('Incorrect Value: "speed" must be greater than 0.');
        }

        this.damping = config && config.damping ? config.damping : 0.1;

        this.thumbMinSize = config && config.thumbMinSize ? config.thumbMinSize : 20;

        this.syncCallbacks = config && config.syncCallbacks ? config.syncCallbacks : false;

        this.renderByPixels = config && config.renderByPixels ? config.renderByPixels : true;

        this.alwaysShowTracks = config && config.alwaysShowTracks ? config.alwaysShowTracks : false;

        this.continuousScrolling = config && config.continuousScrolling ? config.continuousScrolling : 'auto';

        this.overscrollEffect = config && config.overscrollEffect ? config.overscrollEffect : false;

        this.overscrollEffectColor = config && config.overscrollEffectColor ? config.overscrollEffectColor : '#87ceeb';

        this.overscrollDamping = config && config.overscrollDamping ? config.overscrollDamping : 0.2;


    }
}

@Injectable()
export class AtScrollbarService {
    private _config: AtScrollbarsConfig = new AtScrollbarsConfig();
    private _scrollbars: any[] = [];

    constructor(@Inject('config') private cfg: AtScrollbarsConfig) {
        this._config = new AtScrollbarsConfig(cfg)
    }

    /**
     * Create a new Scrollbar instance
     * @param name: string
     * @param element: HTMLElement
     * @param config: AtScrollbarsConfig
     * @returns {Scrollbar}
     */
    init(name: string, element: HTMLElement, config?: AtScrollbarsConfig) {
        const currentScrollbar = {
            name: name,
            instance: Scrollbar.init(element, config ? new AtScrollbarsConfig(config) : this._config)
        };
        this._scrollbars.push(currentScrollbar);

        return currentScrollbar.instance;
    }

    /**
     * Return a Scrollbar instance
     * @param name: string
     */
    getInstance(name: string) {
        const scrollbar = _.find(this._scrollbars, {name: name});
        return scrollbar.instance;
    }

    /**
     * Destroy a Scrollbar instance
     * @param name: string
     * @param element: HTMLElement
     */
    destroy(name: string, element: HTMLElement) {
        Scrollbar.destroy(element);
        _.remove(this._scrollbars, {name: name} as any);
    }
}
