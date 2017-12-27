import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-header',
    templateUrl: './at-layout-header.component.html',
    styleUrls: ['./at-layout-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutHeaderComponent implements OnInit, AfterViewInit {

    private _color: string;
    private _height: string = 'auto';
    private _pattern: string;

    /**
     * @internal use only
     */
    _computedHeight: number;

    @Input()
    set color(c: string) {
        this._color = c;
    }

    get color(): string {
        if (this._color) {
            return 'mat-bg-' + this._color;
        }

        return '';
    }

    @Input()
    set height(h: string) {
        this._height = h;
    }

    get height(): string {
        return this._height;
    }

    @Input()
    set pattern(p: string) {
        this._pattern = p;
    }

    get pattern(): string {
        if (this._pattern) {
            return 'at-pattern-' + this._pattern;
        }
        return '';
    }

    constructor(public elRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
        // console.log(elRef.parentNode);
    }

    ngOnInit() {

        let parentNode: string;

        try {
            parentNode = this.elRef.nativeElement.parentNode.parentNode.parentNode.nodeName;
        } catch {
            throw new Error('AtLayoutHeader: Please use at-layout-header component inside a layout component');
        }

        if (!(parentNode === 'AT-LAYOUT-BASIC' || parentNode === 'AT-LAYOUT-CARD-OVER')) {
            throw new Error('AtLayoutHeader: Please use at-layout-header component inside a layout component');
        }

        console.log(this.elRef.nativeElement.parentNode, this.elRef.nativeElement.parentNode.getBoundingClientRect().height);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this._computedHeight = this.elRef.nativeElement.parentNode.getBoundingClientRect().height;
            this.changeDetectorRef.detectChanges();
            console.log(this._computedHeight)
        });
    }

}
