import { Pipe, PipeTransform  } from '@angular/core';
import {isObject} from 'util';


@Pipe({ name: 'keys' })
export class AtKeysPipe implements PipeTransform {

    transform (input: any): any {

        if (!isObject(input)) {
            return input;
        }

        return Object.keys(input);
    }
}
