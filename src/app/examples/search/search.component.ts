import {Component} from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    eSearchInputTerm: string = '';
    dSearchInputTerm: string = '';

    cAlwaysVisible = false;
    cSearchBoxTerm: string = '';
}
