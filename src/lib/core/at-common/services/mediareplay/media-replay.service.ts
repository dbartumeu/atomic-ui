import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Injectable} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Injectable()
export class AtMediaReplayService {

    private atMedia: ReplaySubject<MediaChange> = new ReplaySubject(1);

    constructor(media: ObservableMedia) {
        media.asObservable()
            .subscribe(res => this.atMedia.next(res), err => this.atMedia.error(err), () => this.atMedia.complete());
    }

    get atMediaChange(): Observable<MediaChange> {
        return this.atMedia.asObservable();
    }

}
