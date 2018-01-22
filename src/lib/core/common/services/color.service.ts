import {Injectable} from '@angular/core';
import * as _ from 'lodash';

const HUEARR: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const AHUEARR: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];


export enum AtColor {
    red = <any>'red',
    red_50 = <any>'red-50',
    red_100 = <any>'red-100',
    red_200 = <any>'red-200',
    red_300 = <any>'red-300',
    red_400 = <any>'red-400',
    red_500 = <any>'red-500',
    red_600 = <any>'red-600',
    red_700 = <any>'red-700',
    red_800 = <any>'red-800',
    red_900 = <any>'red-900',
    red_accent_100 = <any>'red-A100',
    red_accent_200 = <any>'red-A200',
    red_accent_400 = <any>'red-A400',
    red_accent_700 = <any>'red-A700',

    pink = <any>'pink',
    pink_50 = <any>'pink_50',
    pink_100 = <any>'pink_100',
    pink_200 = <any>'pink_200',
    pink_300 = <any>'pink_300',
    pink_400 = <any>'pink_400',
    pink_500 = <any>'pink_500',
    pink_600 = <any>'pink_600',
    pink_700 = <any>'pink_700',
    pink_800 = <any>'pink_800',
    pink_900 = <any>'pink_900',
    pink_accent_100 = <any>'pink_accent_100',
    pink_accent_200 = <any>'pink_accent_200',
    pink_accent_400 = <any>'pink_accent_400',
    pink_accent_700 = <any>'pink_accent_700',

    purple = <any>'purple',
    purple_50 = <any>'purple_50',
    purple_100 = <any>'purple_100',
    purple_200 = <any>'purple_200',
    purple_300 = <any>'purple_300',
    purple_400 = <any>'purple_400',
    purple_500 = <any>'purple_500',
    purple_600 = <any>'purple_600',
    purple_700 = <any>'purple_700',
    purple_800 = <any>'purple_800',
    purple_900 = <any>'purple_900',
    purple_accent_100 = <any>'purple_accent_100',
    purple_accent_200 = <any>'purple_accent_200',
    purple_accent_400 = <any>'purple_accent_400',
    purple_accent_700 = <any>'purple_accent_700',

    deep_purple = <any>'deep_purple',
    deep_purple_50 = <any>'deep_purple_50',
    deep_purple_100 = <any>'deep_purple_100',
    deep_purple_200 = <any>'deep_purple_200',
    deep_purple_300 = <any>'deep_purple_300',
    deep_purple_400 = <any>'deep_purple_400',
    deep_purple_500 = <any>'deep_purple_500',
    deep_purple_600 = <any>'deep_purple_600',
    deep_purple_700 = <any>'deep_purple_700',
    deep_purple_800 = <any>'deep_purple_800',
    deep_purple_900 = <any>'deep_purple_900',
    deep_purple_accent_100 = <any>'deep_purple_accent_100',
    deep_purple_accent_200 = <any>'deep_purple_accent_200',
    deep_purple_accent_400 = <any>'deep_purple_accent_400',
    deep_purple_accent_700 = <any>'deep_purple_accent_700',

    indigo = <any>'',
    indigo_50 = <any>'',
    indigo_100 = <any>'',
    indigo_200 = <any>'',
    indigo_300 = <any>'',
    indigo_400 = <any>'',
    indigo_500 = <any>'',
    indigo_600 = <any>'',
    indigo_700 = <any>'',
    indigo_800 = <any>'',
    indigo_900 = <any>'',
    indigo_accent_100 = <any>'',
    indigo_accent_200 = <any>'',
    indigo_accent_400 = <any>'',
    indigo_accent_700 = <any>'',

    blue = <any>'',
    blue_50 = <any>'',
    blue_100 = <any>'',
    blue_200 = <any>'',
    blue_300 = <any>'',
    blue_400 = <any>'',
    blue_500 = <any>'',
    blue_600 = <any>'',
    blue_700 = <any>'',
    blue_800 = <any>'',
    blue_900 = <any>'',
    blue_accent_100 = <any>'',
    blue_accent_200 = <any>'',
    blue_accent_400 = <any>'',
    blue_accent_700 = <any>'',

    light_blue = <any>'',
    light_blue_50 = <any>'',
    light_blue_100 = <any>'',
    light_blue_200 = <any>'',
    light_blue_300 = <any>'',
    light_blue_400 = <any>'',
    light_blue_500 = <any>'',
    light_blue_600 = <any>'',
    light_blue_700 = <any>'',
    light_blue_800 = <any>'',
    light_blue_900 = <any>'',
    light_blue_accent_100 = <any>'',
    light_blue_accent_200 = <any>'',
    light_blue_accent_400 = <any>'',
    light_blue_accent_700 = <any>'',

    cyan = <any>'',
    cyan_50 = <any>'',
    cyan_100 = <any>'',
    cyan_200 = <any>'',
    cyan_300 = <any>'',
    cyan_400 = <any>'',
    cyan_500 = <any>'',
    cyan_600 = <any>'',
    cyan_700 = <any>'',
    cyan_800 = <any>'',
    cyan_900 = <any>'',
    cyan_accent_100 = <any>'',
    cyan_accent_200 = <any>'',
    cyan_accent_400 = <any>'',
    cyan_accent_700 = <any>'',

    teal = <any>'',
    teal_50 = <any>'',
    teal_100 = <any>'',
    teal_200 = <any>'',
    teal_300 = <any>'',
    teal_400 = <any>'',
    teal_500 = <any>'',
    teal_600 = <any>'',
    teal_700 = <any>'',
    teal_800 = <any>'',
    teal_900 = <any>'',
    teal_accent_100 = <any>'',
    teal_accent_200 = <any>'',
    teal_accent_400 = <any>'',
    teal_accent_700 = <any>'',

    green = <any>'',
    green_50 = <any>'',
    green_100 = <any>'',
    green_200 = <any>'',
    green_300 = <any>'',
    green_400 = <any>'',
    green_500 = <any>'',
    green_600 = <any>'',
    green_700 = <any>'',
    green_800 = <any>'',
    green_900 = <any>'',
    green_accent_100 = <any>'',
    green_accent_200 = <any>'',
    green_accent_400 = <any>'',
    green_accent_700 = <any>'',

    light_green = <any>'',
    light_green_50 = <any>'',
    light_green_100 = <any>'',
    light_green_200 = <any>'',
    light_green_300 = <any>'',
    light_green_400 = <any>'',
    light_green_500 = <any>'',
    light_green_600 = <any>'',
    light_green_700 = <any>'',
    light_green_800 = <any>'',
    light_green_900 = <any>'',
    light_green_accent_100 = <any>'',
    light_green_accent_200 = <any>'',
    light_green_accent_400 = <any>'',
    light_green_accent_700 = <any>'',

    lime = <any>'',
    lime_50 = <any>'',
    lime_100 = <any>'',
    lime_200 = <any>'',
    lime_300 = <any>'',
    lime_400 = <any>'',
    lime_500 = <any>'',
    lime_600 = <any>'',
    lime_700 = <any>'',
    lime_800 = <any>'',
    lime_900 = <any>'',
    lime_accent_100 = <any>'',
    lime_accent_200 = <any>'',
    lime_accent_400 = <any>'',
    lime_accent_700 = <any>'',

    yellow = <any>'',
    yellow_50 = <any>'',
    yellow_100 = <any>'',
    yellow_200 = <any>'',
    yellow_300 = <any>'',
    yellow_400 = <any>'',
    yellow_500 = <any>'',
    yellow_600 = <any>'',
    yellow_700 = <any>'',
    yellow_800 = <any>'',
    yellow_900 = <any>'',
    yellow_accent_100 = <any>'',
    yellow_accent_200 = <any>'',
    yellow_accent_400 = <any>'',
    yellow_accent_700 = <any>'',

    amber = <any>'',
    amber_50 = <any>'',
    amber_100 = <any>'',
    amber_200 = <any>'',
    amber_300 = <any>'',
    amber_400 = <any>'',
    amber_500 = <any>'',
    amber_600 = <any>'',
    amber_700 = <any>'',
    amber_800 = <any>'',
    amber_900 = <any>'',
    amber_accent_100 = <any>'',
    amber_accent_200 = <any>'',
    amber_accent_400 = <any>'',
    amber_accent_700 = <any>'',

    orange = <any>'',
    orange_50 = <any>'',
    orange_100 = <any>'',
    orange_200 = <any>'',
    orange_300 = <any>'',
    orange_400 = <any>'',
    orange_500 = <any>'',
    orange_600 = <any>'',
    orange_700 = <any>'',
    orange_800 = <any>'',
    orange_900 = <any>'',
    orange_accent_100 = <any>'',
    orange_accent_200 = <any>'',
    orange_accent_400 = <any>'',
    orange_accent_700 = <any>'',

    deep_orange = <any>'',
    deep_orange_50 = <any>'',
    deep_orange_100 = <any>'',
    deep_orange_200 = <any>'',
    deep_orange_300 = <any>'',
    deep_orange_400 = <any>'',
    deep_orange_500 = <any>'',
    deep_orange_600 = <any>'',
    deep_orange_700 = <any>'',
    deep_orange_800 = <any>'',
    deep_orange_900 = <any>'',
    deep_orange_accent_100 = <any>'',
    deep_orange_accent_200 = <any>'',
    deep_orange_accent_400 = <any>'',
    deep_orange_accent_700 = <any>'',

    brown = <any>'',
    brown_50 = <any>'',
    brown_100 = <any>'',
    brown_200 = <any>'',
    brown_300 = <any>'',
    brown_400 = <any>'',
    brown_500 = <any>'',
    brown_600 = <any>'',
    brown_700 = <any>'',
    brown_800 = <any>'',
    brown_900 = <any>'',

    grey = <any>'',
    grey_50 = <any>'',
    grey_100 = <any>'',
    grey_200 = <any>'',
    grey_300 = <any>'',
    grey_400 = <any>'',
    grey_500 = <any>'',
    grey_600 = <any>'',
    grey_700 = <any>'',
    grey_800 = <any>'',
    grey_900 = <any>'',

    black = <any>'',
    white = <any>'',

    blue_grey = <any>'',
    blue_grey_50 = <any>'',
    blue_grey_100 = <any>'',
    blue_grey_200 = <any>'',
    blue_grey_300 = <any>'',
    blue_grey_400 = <any>'',
    blue_grey_500 = <any>'',
    blue_grey_600 = <any>'',
    blue_grey_700 = <any>'',
    blue_grey_800 = <any>'',
    blue_grey_900 = <any>''
}

export interface IatColor {
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
