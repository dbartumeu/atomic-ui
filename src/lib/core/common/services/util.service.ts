import {Injectable} from '@angular/core';


@Injectable()
export class AtUtilService {

    constructor() {

    }

    /**
     * Return a unique id
     * @returns string
     */
    uid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Return true if device is a Mobile device
     * @returns boolean
     * @deprecated
     */
    isMobile(): boolean {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        }
        return false
    }

}
