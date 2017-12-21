import {
    AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {AtScrollbarsConfig, AtScrollbarService} from './at-scrollbar.service';
import {AtUtilService} from '../at-common/services/util.service';


@Component({
    selector: 'at-scrollbar',
    templateUrl: './at-scrollbar.component.html',
    styleUrls: ['./at-scrollbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtScrollbarComponent implements AfterViewInit, OnDestroy, OnChanges {

    /**
     * name?: string
     * AtScrollbar name. If left blank the AtScrollbarService will generate a random unique name for teh scrollbar. Defaults to undefined
     */
    @Input() name: string;

    /**
     * render?: boolean
     * If true renders the scrollbar. Defaults to true.
     * @type {boolean}
     */
    @Input() render = true;

    /**
     * config?: AtScrollbarsConfig
     * AtScrollbar configuration. Overrides the default config for the current scrollbar.
     * @type {AtScrollbarsConfig}
     */
    @Input() config: AtScrollbarsConfig;

    constructor(private el: ElementRef,
                private avScrollbarService: AtScrollbarService,
                private atUtil: AtUtilService) {
        if (!this.name) {
            this.name = this.atUtil.uid();
        }
    }

    ngAfterViewInit() {
        if (this.render) {
            this.avScrollbarService.init(this.name, this.el.nativeElement, this.config);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.name) {
            this.avScrollbarService.destroy(this.name, this.el.nativeElement);
            this.name = changes.name.currentValue;
            this.avScrollbarService.init(this.name, this.el.nativeElement, this.config);
        }

        if (changes.render) {
            if (!changes.render.firstChange) {
                if (this.render) {
                    this.avScrollbarService.destroy(this.name, this.el.nativeElement);
                } else {
                    this.avScrollbarService.init(this.name, this.el.nativeElement, this.config);
                }
                this.render = changes.render.currentValue;
            }
        }

        if (changes.config) {
            this.avScrollbarService.destroy(this.name, this.el.nativeElement);
            this.config = changes.config.currentValue;
            this.avScrollbarService.init(this.name, this.el.nativeElement, this.config);
        }
    }

    ngOnDestroy() {
        this.avScrollbarService.destroy(this.name, this.el.nativeElement);
    }
}
