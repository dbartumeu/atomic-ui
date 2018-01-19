import {Injectable} from '@angular/core';
import * as _ from 'lodash';

const HUEARR: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const AHUEARR: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];

export interface AtColor {
    key: string;
    name: string;
    hueArr: string[];
    hoverArr: string[]
}

@Injectable()
export class AtColorService {

    private _colors: any = [
        {
            'key': 'red',
            'name': 'Red',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'pink',
            'name': 'Pink',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'purple',
            'name': 'Purple',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'deepPurple',
            'name': 'Deep Purple',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'indigo',
            'name': 'Indigo',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'blue',
            'name': 'Blue',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'lightBlue',
            'name': 'Light Blue',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'white']
        },
        {
            'key': 'cyan',
            'name': 'Cyan',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'white']
        },
        {
            'key': 'teal',
            'name': 'Teal',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'white']
        },
        {
            'key': 'green',
            'name': 'Green',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'white']
        },
        {
            'key': 'lightGreen',
            'name': 'Light Green',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'black']
        },
        {
            'key': 'lime',
            'name': 'Lime',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'black', 'black', 'black', 'black']
        },
        {
            'key': 'yellow',
            'name': 'Yellow',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']
        },
        {
            'key': 'amber',
            'name': 'Amber',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']
        },
        {
            'key': 'orange',
            'name': 'Orange',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'deepOrange',
            'name': 'Deep Orange',
            'hueArr': AHUEARR,
            'hoverArr': ['black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'brown',
            'name': 'Brown',
            'hueArr': HUEARR,
            'hoverArr': ['black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'grey',
            'name': 'Grey',
            'hueArr': HUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
        {
            'key': 'blueGrey',
            'name': 'Blue Grey',
            'hueArr': HUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
    ];

    get colors(): AtColor[] {
        return this._colors;
    }

    // filter(query: string): string[] {
    //     return this.icons.filter((el: string) => {
    //         return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
    //     });
    // }
}
