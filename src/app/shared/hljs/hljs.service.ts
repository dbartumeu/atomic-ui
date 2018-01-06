import {Injectable} from '@angular/core';
import * as hljs from 'highlight.js/lib';

@Injectable()
export class HljsService {
    init(timeout) {
        hljs.initHighlighting.called = false;
        if (timeout) {
            setTimeout(() => {
                hljs.initHighlighting();
            }, timeout);
        } else {
            hljs.initHighlighting();
        }
    }
}