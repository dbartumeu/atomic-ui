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
    pink_50 = <any>'pink-50',
    pink_100 = <any>'pink-100',
    pink_200 = <any>'pink-200',
    pink_300 = <any>'pink-300',
    pink_400 = <any>'pink-400',
    pink_500 = <any>'pink-500',
    pink_600 = <any>'pink-600',
    pink_700 = <any>'pink-700',
    pink_800 = <any>'pink-800',
    pink_900 = <any>'pink-900',
    pink_accent_100 = <any>'pink-A100',
    pink_accent_200 = <any>'pink-A200',
    pink_accent_400 = <any>'pink-A400',
    pink_accent_700 = <any>'pink-A700',
    purple = <any>'purple',
    purple_50 = <any>'purple-50',
    purple_100 = <any>'purple-100',
    purple_200 = <any>'purple-200',
    purple_300 = <any>'purple-300',
    purple_400 = <any>'purple-400',
    purple_500 = <any>'purple-500',
    purple_600 = <any>'purple-600',
    purple_700 = <any>'purple-700',
    purple_800 = <any>'purple-800',
    purple_900 = <any>'purple-900',
    purple_accent_100 = <any>'purple-A100',
    purple_accent_200 = <any>'purple-A200',
    purple_accent_400 = <any>'purple-A400',
    purple_accent_700 = <any>'purple-A700',
    deep_purple = <any>'deep-purple',
    deep_purple_50 = <any>'deep-purple-50',
    deep_purple_100 = <any>'deep-purple-100',
    deep_purple_200 = <any>'deep-purple-200',
    deep_purple_300 = <any>'deep-purple-300',
    deep_purple_400 = <any>'deep-purple-400',
    deep_purple_500 = <any>'deep-purple-500',
    deep_purple_600 = <any>'deep-purple-600',
    deep_purple_700 = <any>'deep-purple-700',
    deep_purple_800 = <any>'deep-purple-800',
    deep_purple_900 = <any>'deep-purple-900',
    deep_purple_accent_100 = <any>'deep-purple-A100',
    deep_purple_accent_200 = <any>'deep-purple-A200',
    deep_purple_accent_400 = <any>'deep-purple-A400',
    deep_purple_accent_700 = <any>'deep-purple-A700',
    indigo = <any>'indigo',
    indigo_50 = <any>'indigo-50',
    indigo_100 = <any>'indigo-100',
    indigo_200 = <any>'indigo-200',
    indigo_300 = <any>'indigo-300',
    indigo_400 = <any>'indigo-400',
    indigo_500 = <any>'indigo-500',
    indigo_600 = <any>'indigo-600',
    indigo_700 = <any>'indigo-700',
    indigo_800 = <any>'indigo-800',
    indigo_900 = <any>'indigo-900',
    indigo_accent_100 = <any>'indigo-A100',
    indigo_accent_200 = <any>'indigo-A200',
    indigo_accent_400 = <any>'indigo-A400',
    indigo_accent_700 = <any>'indigo-A700',
    blue = <any>'blue',
    blue_50 = <any>'blue-50',
    blue_100 = <any>'blue-100',
    blue_200 = <any>'blue-200',
    blue_300 = <any>'blue-300',
    blue_400 = <any>'blue-400',
    blue_500 = <any>'blue-500',
    blue_600 = <any>'blue-600',
    blue_700 = <any>'blue-700',
    blue_800 = <any>'blue-800',
    blue_900 = <any>'blue-900',
    blue_accent_100 = <any>'blue-A100',
    blue_accent_200 = <any>'blue-A200',
    blue_accent_400 = <any>'blue-A400',
    blue_accent_700 = <any>'blue-A700',
    light_blue = <any>'light-blue',
    light_blue_50 = <any>'light-blue-50',
    light_blue_100 = <any>'light-blue-100',
    light_blue_200 = <any>'light-blue-200',
    light_blue_300 = <any>'light-blue-300',
    light_blue_400 = <any>'light-blue-400',
    light_blue_500 = <any>'light-blue-500',
    light_blue_600 = <any>'light-blue-600',
    light_blue_700 = <any>'light-blue-700',
    light_blue_800 = <any>'light-blue-800',
    light_blue_900 = <any>'light-blue-900',
    light_blue_accent_100 = <any>'light-blue-A100',
    light_blue_accent_200 = <any>'light-blue-A200',
    light_blue_accent_400 = <any>'light-blue-A400',
    light_blue_accent_700 = <any>'light-blue-A700',
    cyan = <any>'cyan',
    cyan_50 = <any>'cyan-50',
    cyan_100 = <any>'cyan-100',
    cyan_200 = <any>'cyan-200',
    cyan_300 = <any>'cyan-300',
    cyan_400 = <any>'cyan-400',
    cyan_500 = <any>'cyan-500',
    cyan_600 = <any>'cyan-600',
    cyan_700 = <any>'cyan-700',
    cyan_800 = <any>'cyan-800',
    cyan_900 = <any>'cyan-900',
    cyan_accent_100 = <any>'cyan-A100',
    cyan_accent_200 = <any>'cyan-A200',
    cyan_accent_400 = <any>'cyan-A400',
    cyan_accent_700 = <any>'cyan-A700',
    teal = <any>'teal',
    teal_50 = <any>'teal-50',
    teal_100 = <any>'teal-100',
    teal_200 = <any>'teal-200',
    teal_300 = <any>'teal-300',
    teal_400 = <any>'teal-400',
    teal_500 = <any>'teal-500',
    teal_600 = <any>'teal-600',
    teal_700 = <any>'teal-700',
    teal_800 = <any>'teal-800',
    teal_900 = <any>'teal-900',
    teal_accent_100 = <any>'teal-A100',
    teal_accent_200 = <any>'teal-A200',
    teal_accent_400 = <any>'teal-A400',
    teal_accent_700 = <any>'teal-A700',
    green = <any>'green',
    green_50 = <any>'green-50',
    green_100 = <any>'green-100',
    green_200 = <any>'green-200',
    green_300 = <any>'green-300',
    green_400 = <any>'green-400',
    green_500 = <any>'green-500',
    green_600 = <any>'green-600',
    green_700 = <any>'green-700',
    green_800 = <any>'green-800',
    green_900 = <any>'green-900',
    green_accent_100 = <any>'green-A100',
    green_accent_200 = <any>'green-A200',
    green_accent_400 = <any>'green-A400',
    green_accent_700 = <any>'green-A700',
    light_green = <any>'light-green',
    light_green_50 = <any>'light-green-50',
    light_green_100 = <any>'light-green-100',
    light_green_200 = <any>'light-green-200',
    light_green_300 = <any>'light-green-300',
    light_green_400 = <any>'light-green-400',
    light_green_500 = <any>'light-green-500',
    light_green_600 = <any>'light-green-600',
    light_green_700 = <any>'light-green-700',
    light_green_800 = <any>'light-green-800',
    light_green_900 = <any>'light-green-900',
    light_green_accent_100 = <any>'light-green-A100',
    light_green_accent_200 = <any>'light-green-A200',
    light_green_accent_400 = <any>'light-green-A400',
    light_green_accent_700 = <any>'light-green-A700',
    lime = <any>'lime',
    lime_50 = <any>'lime-50',
    lime_100 = <any>'lime-100',
    lime_200 = <any>'lime-200',
    lime_300 = <any>'lime-300',
    lime_400 = <any>'lime-400',
    lime_500 = <any>'lime-500',
    lime_600 = <any>'lime-600',
    lime_700 = <any>'lime-700',
    lime_800 = <any>'lime-800',
    lime_900 = <any>'lime-900',
    lime_accent_100 = <any>'lime-A100',
    lime_accent_200 = <any>'lime-A200',
    lime_accent_400 = <any>'lime-A400',
    lime_accent_700 = <any>'lime-A700',
    yellow = <any>'yellow',
    yellow_50 = <any>'yellow-50',
    yellow_100 = <any>'yellow-100',
    yellow_200 = <any>'yellow-200',
    yellow_300 = <any>'yellow-300',
    yellow_400 = <any>'yellow-400',
    yellow_500 = <any>'yellow-500',
    yellow_600 = <any>'yellow-600',
    yellow_700 = <any>'yellow-700',
    yellow_800 = <any>'yellow-800',
    yellow_900 = <any>'yellow-900',
    yellow_accent_100 = <any>'yellow-A100',
    yellow_accent_200 = <any>'yellow-A200',
    yellow_accent_400 = <any>'yellow-A400',
    yellow_accent_700 = <any>'yellow-A700',
    amber = <any>'amber',
    amber_50 = <any>'amber-50',
    amber_100 = <any>'amber-100',
    amber_200 = <any>'amber-200',
    amber_300 = <any>'amber-300',
    amber_400 = <any>'amber-400',
    amber_500 = <any>'amber-500',
    amber_600 = <any>'amber-600',
    amber_700 = <any>'amber-700',
    amber_800 = <any>'amber-800',
    amber_900 = <any>'amber-900',
    amber_accent_100 = <any>'amber-A100',
    amber_accent_200 = <any>'amber-A200',
    amber_accent_400 = <any>'amber-A400',
    amber_accent_700 = <any>'amber-A700',
    orange = <any>'orange',
    orange_50 = <any>'orange-50',
    orange_100 = <any>'orange-100',
    orange_200 = <any>'orange-200',
    orange_300 = <any>'orange-300',
    orange_400 = <any>'orange-400',
    orange_500 = <any>'orange-500',
    orange_600 = <any>'orange-600',
    orange_700 = <any>'orange-700',
    orange_800 = <any>'orange-800',
    orange_900 = <any>'orange-900',
    orange_accent_100 = <any>'orange-A100',
    orange_accent_200 = <any>'orange-A200',
    orange_accent_400 = <any>'orange-A400',
    orange_accent_700 = <any>'orange-A700',
    deep_orange = <any>'deep-orange',
    deep_orange_50 = <any>'deep-orange-50',
    deep_orange_100 = <any>'deep-orange-100',
    deep_orange_200 = <any>'deep-orange-200',
    deep_orange_300 = <any>'deep-orange-300',
    deep_orange_400 = <any>'deep-orange-400',
    deep_orange_500 = <any>'deep-orange-500',
    deep_orange_600 = <any>'deep-orange-600',
    deep_orange_700 = <any>'deep-orange-700',
    deep_orange_800 = <any>'deep-orange-800',
    deep_orange_900 = <any>'deep-orange-900',
    deep_orange_accent_100 = <any>'deep-orange-A100',
    deep_orange_accent_200 = <any>'deep-orange-A200',
    deep_orange_accent_400 = <any>'deep-orange-A400',
    deep_orange_accent_700 = <any>'deep-orange-A700',
    brown = <any>'brown',
    brown_50 = <any>'brown-50',
    brown_100 = <any>'brown-100',
    brown_200 = <any>'brown-200',
    brown_300 = <any>'brown-300',
    brown_400 = <any>'brown-400',
    brown_500 = <any>'brown-500',
    brown_600 = <any>'brown-600',
    brown_700 = <any>'brown-700',
    brown_800 = <any>'brown-800',
    brown_900 = <any>'brown-900',
    grey = <any>'grey',
    grey_50 = <any>'grey-50',
    grey_100 = <any>'grey-100',
    grey_200 = <any>'grey-200',
    grey_300 = <any>'grey-300',
    grey_400 = <any>'grey-400',
    grey_500 = <any>'grey-500',
    grey_600 = <any>'grey-600',
    grey_700 = <any>'grey-700',
    grey_800 = <any>'grey-800',
    grey_900 = <any>'grey-900',
    black = <any>'black',
    white = <any>'white',
    blue_grey = <any>'blue-grey',
    blue_grey_50 = <any>'blue-grey-50',
    blue_grey_100 = <any>'blue-grey-100',
    blue_grey_200 = <any>'blue-grey-200',
    blue_grey_300 = <any>'blue-grey-300',
    blue_grey_400 = <any>'blue-grey-400',
    blue_grey_500 = <any>'blue-grey-500',
    blue_grey_600 = <any>'blue-grey-600',
    blue_grey_700 = <any>'blue-grey-700',
    blue_grey_800 = <any>'blue-grey-800',
    blue_grey_900 = <any>'blue-grey-900',
    primary = <any>'primary',
    accent = <any>'accent',
    warn = <any>'warn',
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
            'key': 'deep-purple',
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
            'key': 'light-blue',
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
            'key': 'light-green',
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
            'key': 'deep-orange',
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
            'key': 'blue-grey',
            'name': 'Blue Grey',
            'hueArr': HUEARR,
            'hoverArr': ['black', 'black', 'black', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white', 'white', 'white']
        },
    ];

    private hash(str) {
        var hash = 5381,
            i = str.length;

        while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
        }

        /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
         * integers. Since we want the results to be always positive, convert the
         * signed int to an unsigned by doing an unsigned bitshift. */
        return hash >>> 0;
    }

    get colors(): AtColor[] {
        return this._colors;
    }

    getUniqueColor(text) {
        const hashedText = this.hash(text);
        const colorIndex = hashedText % this._colors.length;

        return this._colors[colorIndex].key;
    }

    // filter(query: string): string[] {
    //     return this.icons.filter((el: string) => {
    //         return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
    //     });
    // }
}
