import {FormControl} from '@angular/forms';
import * as _ from 'lodash';
import {isArray, isDate, isObject} from 'util';

export interface IAtValidatorError {
    type: string;
    valid: boolean;
    value: any;
    msg: string;
}

export interface IAtValidatorDate {
    format: 'mm/dd/yyyy' | 'dd/mm/yyyy' | 'yyyy/mm/dd' | 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd' | 'mm.dd.yyyy' | 'dd.mm.yyyy' | 'yyyy.mm.dd';
    min?: string | Date;
    max?: string | Date;
}

export interface IAtValidatorTime {
    format: '12h' | '24h';
    min?: string;
    max?: string;
}

export interface IAtValidatorErrMsg {
    incorrectFormat?: string;
    invalidData?: string;
    min?: string;
    max?: string;
}

export class AtValidators {

    public static SHIFT_CHARACTERS = '\'";:.,_<>\/?\!@#\$%\^&\*\|\(\){}\[\\\]\+\-\='; // \'";:.,<>/?!@#$%^&*|(_){}[]-=+
    public static PUNCTUATION_CHARACTERS = '’\',.;"\!?\¡¿′_\-\~'; // ’',.;"!?¡¿′_-~°
    public static CURRENCY_CHARACTERS = '¤¢$€£¥₩₪';
    public static MATH_CHARACTERS = '\(\){}\[\\\]\^<>\=\+\-\*\/';

    /**
     * Validator that requires controls to have a non-empty value
     * @param msg Error message. Use %fieldLabel%, %fieldValue% as replacement pattern in error message.
     * @returns  null|{atValidatorsRequired: IAtValidatorError}
     */
    static required(msg: string = '%fieldLabel% is required') {
        const res = (control: FormControl) => {
            const err = {
                atValidatorsRequired: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                } as IAtValidatorError
            };
            if (control.value || control.value === 0) {
                if (isObject(control.value) || isArray(control.value)) {
                    if (!_.isEmpty(control.value)) {
                        return null;
                    } else {
                        return err;
                    }
                } else {
                    return null;
                }
            } else {
                return err;
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param length Minimum length of field value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static minLength(length: number, msg = '%fieldLabel% field must be greater than %length% characters length') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (control.value && control.value.toString().length >= length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    }as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param length Minimum length of field value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static maxLength(length: number, msg = '%fieldLabel% field must be less than %length% characters length') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (control.value && control.value.toString().length <= length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    } as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a value of an exact length.
     * @param length Length of field.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static exactLength(length: number, msg = '%fieldLabel% field must be %length% characters length') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (control.value && control.value.toString().length === length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    }as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a value between a minimum and maximun length.
     * @param min Minimum value.
     * @param max Maximum value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static rangeLength(min: number, max: number, msg = '%fieldLabel% field must be between %min% and %max% characters length') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (control.value && control.value.toString().length <= max && control.value.toString().length >= min) {
                return null;
            } else {
                return {
                    atValidatorsRangeLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%min%', min.toString()).replace('%max%', max.toString())
                    }as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a numerical value.
     * @param type The number type. Allows 'int' | 'unsignedInt' | 'float'. Defaults to 'float'
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static number(type: 'int' | 'unsignedInt' | 'float' = 'float', msg: string | null = null) {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            let REGEXP: RegExp;

            switch (type) {
                case 'int':
                    REGEXP = /^([-]?[1-9]\d*|0)$/;
                    msg = msg ? msg : '%fieldLabel% field only allows integers with sign';
                    break;
                case 'unsignedInt':
                    REGEXP = /^([1-9]\d*|0)$/;
                    msg = msg ? msg : '%fieldLabel% field only allows integers without sign';
                    break;
                default:
                    REGEXP = /[-]?([0-9]*\.[0-9]+|[0-9]+)/;
                    msg = msg ? msg : '%fieldLabel% field only allows floating numbers';
                    break;
            }

            return REGEXP.test(control.value) ? null : {
                atValidatorsNumber: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%type%', type)
                }as IAtValidatorError
            };
        };

        return res;
    }

    /**
     * Validator that requires controls to have a minimun value.
     * @param value The value to compare
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static min(value: number, msg = '%fieldLabel% field must be greater than or equal to %value%') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (parseFloat(control.value) >= value) {
                return null;
            } else {
                return {
                    atValidatorsMin: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%value%', value.toString())
                    }as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a maximun value.
     * @param value The value to compare
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static max(value: number, msg = '%fieldLabel% field must be less than or equal to %value%') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (parseFloat(control.value) <= value) {
                return null;
            } else {
                return {
                    atValidatorsMax: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%value%', value.toString())
                    }as IAtValidatorError
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a value in a range.
     * @param min The minimum value
     * @param max The maximum value
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %min% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static range(min: number, max: number, msg = '%fieldLabel%  field must be between %min% and %max%') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            if (parseFloat(control.value) <= max && parseFloat(control.value) >= min) {
                return null;
            } else {
                return {
                    atValidatorsRange: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%min%', min.toString()).replace('%max%', max.toString())
                    }
                };
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have an alphanumeric value.
     * @param allow By default this validator only allows numbers and letters. Use this parameter to allow more characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %allow% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static alphanumeric(allow: string | null = null, msg = '%fieldLabel% field only allows alphanumeric characters') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            const REGEXP = new RegExp('^[A-Za-z0-9' + allow + ']*$');

            return REGEXP.test(control.value) ? null : {
                atValidatorsAlphanumeric: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%allow%', allow)
                }
            };
        };

        return res;
    }

    /**
     * Validator that requires controls to have a correct date value.
     * @param restrict Restrict field value to a specific format min and max date
     * @param msg Use %fieldLabel%, %fieldValue% %min% and %max% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static date(restrict: IAtValidatorDate, msg?: IAtValidatorErrMsg) {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }

            const dateEndReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
            const dateStartReg = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

            const _msg: IAtValidatorErrMsg = {
                incorrectFormat: msg && msg.incorrectFormat ? msg.incorrectFormat : '%fieldLabel% field has an incorrect format',
                invalidData: msg && msg.invalidData ? msg.invalidData : '%fieldLabel% field has invalid content',
                min: msg && msg.min ? msg.min : '%fieldLabel% field value must be greater than or equal to %min%',
                max: msg && msg.max ? msg.max : '%fieldLabel% field value must be less than or equal to %max%'
            };

            if (dateEndReg.test(control.value) || dateStartReg.test(control.value)) {
                if (_isDate(restrict.format, control.value)) {

                    if (restrict.min) {
                        if (_isMinValid(restrict.format, restrict.min, control.value)) {
                            if (!restrict.max) {
                                return null;
                            }
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.min.replace('%min%', _getDateStr(restrict.format, _getDate(restrict.format, restrict.min)))
                                }
                            };
                        }
                    }

                    if (restrict.max) {
                        if (_isMaxValid(restrict.format, restrict.max, control.value)) {
                            return null;
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.max.replace('%max%', _getDateStr(restrict.format, _getDate(restrict.format, restrict.max)))
                                }
                            };
                        }
                    }

                    return null;
                } else {
                    return {
                        atValidatorsDate: {
                            type: 'AtValidatorsErr',
                            valid: false,
                            value: control.value,
                            msg: _msg.invalidData
                        }
                    };
                }
            } else {
                return {
                    atValidatorsDate: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: _msg.incorrectFormat
                    }
                };
            }

            function _getDateStr(format, value: Date): string {
                let separator = '';

                if (format.includes('.')) {
                    separator = '.';
                }

                if (format.includes('/')) {
                    separator = '/';
                }

                if (format.includes('-')) {
                    separator = '-';
                }

                const parms = format.split(/[.\-\/]/);
                const paramsObj = {
                    yyyy: 0,
                    mm: 0,
                    dd: 0
                };

                let dateStr = '';

                parms.forEach((param, i) => {
                    if (param == 'yyyy') {
                        paramsObj[param] = value.getFullYear();
                    }

                    if (param == 'mm') {
                        paramsObj[param] = value.getMonth() + 1;
                    }

                    if (param == 'dd') {
                        paramsObj[param] = value.getDate();
                    }

                    if (i > 0) {
                        dateStr += separator + paramsObj[param];
                    } else {
                        dateStr += paramsObj[param];
                    }

                });

                return dateStr;
            }

            function _getDate(format, value) {
                if (isDate(value)) {
                    return value;
                }

                const parms = format.split(/[.\-\/]/);
                const valueParams = value.split(/[.\-\/]/);

                const paramsObj = {
                    yyyy: 0,
                    mm: 0,
                    dd: 0
                };

                parms.forEach((param, i) => {
                    paramsObj[param] = parseInt(valueParams[i], 10);
                });

                return new Date(paramsObj.yyyy, paramsObj.mm - 1, paramsObj.dd, 0, 0, 0, 0);
            }

            function _isDate(format, value) {

                if (isDate(value)) {
                    return true;
                }

                const parms = format.split(/[.\-\/]/);
                const valueParams = value.split(/[.\-\/]/);

                const paramsObj = {
                    yyyy: 0,
                    mm: 0,
                    dd: 0
                };

                parms.forEach((param, i) => {
                    paramsObj[param] = parseInt(valueParams[i], 10);
                });

                const date = new Date(paramsObj.yyyy, paramsObj.mm - 1, paramsObj.dd, 0, 0, 0, 0);
                return paramsObj.mm === (date.getMonth() + 1) && paramsObj.dd === date.getDate() && paramsObj.yyyy === date.getFullYear();
            }

            function _isMinValid(format, minDate, controlDate) {
                if (_isDate(format, minDate)) {
                    const _minDate = _getDate(format, minDate);
                    const _controlDate = _getDate(format, controlDate);
                    return _controlDate.getTime() >= _minDate.getTime();
                } else {
                    throw new Error('AtValidators.date(): Please insert a valid min date format');
                }
            }

            function _isMaxValid(format, maxDate, controlDate) {
                if (_isDate(format, maxDate)) {
                    const _maxDate = _getDate(format, maxDate);
                    const _controlDate = _getDate(format, controlDate);
                    return _controlDate.getTime() <= _maxDate.getTime();
                } else {
                    throw new Error('AtValidators.date(): Please insert a valid max date format');
                }
            }
        };

        return res;
    }

    /**
     * Validator that requires controls to have a correct time value.
     * @param restrict Restrict field value to a specific format min and max time
     * @param msg Use %fieldLabel%, %fieldValue% %min% and %max% as replacement pattern in error message.
     * @returns null if is valid, IAtValidatorError otherwise
     */
    static time(restrict: IAtValidatorTime, msg?: IAtValidatorErrMsg) {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }

            const _value = control.value.replace(/ /g, '');
            const regexp24h = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            const regexp12h = /^(0?[1-9]|1[012]):[0-5][0-9](am|pm|AM|PM)$/;
            const _msg: IAtValidatorErrMsg = {
                incorrectFormat: msg && msg.incorrectFormat ? msg.incorrectFormat : '%fieldLabel% field has an incorrect format',
                invalidData: msg && msg.invalidData ? msg.invalidData : '%fieldLabel% field has invalid content',
                min: msg && msg.min ? msg.min : '%fieldLabel% field value must be greater than or equal to %min%',
                max: msg && msg.max ? msg.max : '%fieldLabel% field value must be less than or equal to %max%'
            };

            if (restrict.format === '12h') {
                if (regexp12h.test(_value)) {
                    if (restrict.min) {
                        if (_isMinValid(restrict.format, restrict.min, control.value)) {
                            if (!restrict.max) {
                                return null;
                            }
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.min.replace('%min%', restrict.min)
                                }
                            };
                        }
                    }

                    if (restrict.max) {
                        if (_isMaxValid(restrict.format, restrict.max, control.value)) {
                            return null;
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.max.replace('%max%', restrict.max)
                                }
                            };
                        }
                    }
                } else {
                    return {
                        atValidatorsDate: {
                            type: 'AtValidatorsErr',
                            valid: false,
                            value: control.value,
                            msg: _msg.incorrectFormat + '. Use hh[1-12]:mm[1-59] [am/pm]'
                        }
                    };
                }
            }

            if (restrict.format === '24h') {
                if (regexp24h.test(_value)) {
                    if (restrict.min) {
                        if (_isMinValid(restrict.format, restrict.min, control.value)) {
                            if (!restrict.max) {
                                return null;
                            }
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.min.replace('%min%', restrict.min)
                                }
                            };
                        }
                    }

                    if (restrict.max) {
                        if (_isMaxValid(restrict.format, restrict.max, control.value)) {
                            return null;
                        } else {
                            return {
                                atValidatorsDate: {
                                    type: 'AtValidatorsErr',
                                    valid: false,
                                    value: control.value,
                                    msg: _msg.max.replace('%max%', restrict.max)
                                }
                            };
                        }
                    }
                } else {
                    return {
                        atValidatorsTime: {
                            type: 'AtValidatorsErr',
                            valid: false,
                            value: control.value,
                            msg: _msg.incorrectFormat + '. Use HH[0-23]:MM[0-59]'
                        }
                    };
                }
            }

            function _isMinValid(format, min, value) {

                if (format === '12h') {
                    if (regexp12h.test(min)) {
                        const minM: 'am' | 'pm' = min.includes('am') || min.includes('AM') ? 'am' : 'pm';
                        const valueM: 'am' | 'pm' = value.includes('am') || value.includes('AM') ? 'am' : 'pm';

                        const _minStr = min.replace(/(am|pm|AM|PM)/, '');
                        const _valueStr = value.replace(/(am|pm|AM|PM)/, '');

                        const _minParams = _minStr.split(':');
                        const _valueParams = _valueStr.split(':');

                        const _minHours = _minParams[0] === '12' ?
                            (minM === 'am' ? 0 : 12) :
                            (minM === 'pm' ? parseInt(_minParams[0], 10) + 12 : parseInt(_minParams[0], 10));
                        const _valueHours = _valueParams[0] === '12' ?
                            (valueM === 'am' ? 0 : 12) :
                            (valueM === 'pm' ? parseInt(_valueParams[0], 10) + 12 : parseInt(_valueParams[0], 10));

                        const _minNum = _minHours * 60 + parseInt(_minParams[1], 10);
                        const _valueNum = _valueHours * 60 + parseInt(_valueParams[1], 10);

                        return (_valueNum >= _minNum);

                    } else {
                        throw new Error('AtValidators.time(): Please insert a min value in a hh:mm[am/pm] time format');
                    }
                }

                if (format === '24h') {
                    if (regexp24h.test(value)) {
                        const _minParams = min.split(':');
                        const _valueParams = value.split(':');

                        const _minNum = (parseInt(_minParams[0], 10) * 60) + parseInt(_minParams[1], 10);
                        const _valueNum = (parseInt(_valueParams[0], 10) * 60) + parseInt(_valueParams[1], 10);
                        // console.log(_minNum, _valueNum);
                        return (_valueNum >= _minNum);
                    } else {
                        throw new Error('AtValidators.time(): Please insert a min value in a HH:MM time format');
                    }
                }
            }

            function _isMaxValid(format, max, value) {
                if (format === '12h') {
                    if (regexp12h.test(max)) {
                        const maxM: 'am' | 'pm' = max.includes('am') || max.includes('AM') ? 'am' : 'pm';
                        const valueM: 'am' | 'pm' = value.includes('am') || value.includes('AM') ? 'am' : 'pm';

                        const _maxStr = max.replace(/(am|pm|AM|PM)/, '');
                        const _valueStr = value.replace(/(am|pm|AM|PM)/, '');

                        const _maxParams = _maxStr.split(':');
                        const _valueParams = _valueStr.split(':');

                        const _maxHours = _maxParams[0] === '12' ?
                            (maxM === 'am' ? 0 : 12) :
                            (maxM === 'pm' ? parseInt(_maxParams[0], 10) + 12 : parseInt(_maxParams[0], 10));
                        const _valueHours = _valueParams[0] === '12' ?
                            (valueM === 'am' ? 0 : 12) :
                            (valueM === 'pm' ? parseInt(_valueParams[0], 10) + 12 : parseInt(_valueParams[0], 10));

                        const _maxNum = _maxHours * 60 + parseInt(_maxParams[1], 10);
                        const _valueNum = _valueHours * 60 + parseInt(_valueParams[1], 10);

                        return (_valueNum <= _maxNum);

                    } else {
                        throw new Error('AtValidators.time(): Please insert a max value in a hh:mm[am/pm] time format');
                    }
                }

                if (format === '24h') {
                    if (regexp24h.test(value)) {
                        const _maxParams = max.split(':');
                        const _valueParams = value.split(':');

                        const _maxNum = (parseInt(_maxParams[0], 10) * 60) + parseInt(_maxParams[1], 10);
                        const _valueNum = (parseInt(_valueParams[0], 10) * 60) + parseInt(_valueParams[1], 10);
                        // console.log(_maxNum, _valueNum);
                        return (_valueNum <= _maxNum);
                    } else {
                        throw new Error('AtValidators.time(): Please insert a max value in a HH:MM time format');
                    }
                }
            }

        };

        return res;
    }

    /**
     * Validator that performs URL validation.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static url(msg = '%fieldLabel% field is invalid') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            const REGEXP = new RegExp(
                "^" +
                // protocol identifier
                "(?:(?:https?|ftp)://)" +
                // user:pass authentication
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                // IP address exclusion
                // private & local networks
                "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broacast addresses
                // (first & last IP address of each class)
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                // host name
                "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                // domain name
                "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                // TLD identifier
                "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                // TLD may end with dot
                "\\.?" +
                ")" +
                // port number
                "(?::\\d{2,5})?" +
                // resource path
                "(?:[/?#]\\S*)?" +
                "$", "i"
            );

            return REGEXP.test(control.value) ? null : {
                atValidatorsUrl: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        };

        return res;

    }

    /**
     * Validator that performs Email validation.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static email(msg = '%fieldLabel% field is invalid') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return EMAIL_REGEXP.test(control.value) ? null : {
                atValidatorsEmail: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        };

        return res;
    }

    /**
     * Validator that check if current form field matches other field.
     * @param otherFieldName the name of the other field inside the form group.
     * @param msg Error message. Use %fieldLabel%, %fieldValue%, %otherFieldName% and %otherFieldLabel% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static matchOtherField(otherFieldName: string, otherFieldLabel: string, msg = '%fieldLabel% field doesn\'t match with %otherFieldLabel% field') {

        let thisControl: FormControl;
        let otherControl: FormControl;

        const res = (control: FormControl) => {

            if (!control.parent) {
                return null;
            }

            // Initializing the validator.
            if (!thisControl) {
                thisControl = control;
                otherControl = control.parent.get(otherFieldName) as FormControl;
                if (!otherControl) {
                    throw new Error('matchOtherField(): The other field was not found in parent group');
                }
                otherControl.valueChanges.subscribe(() => {
                    thisControl.updateValueAndValidity();
                });
            }

            if (!otherControl) {
                return null;
            }

            if (otherControl.value !== thisControl.value) {
                return {
                    atValidatorsMatchOtherField: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%otherFieldName%', otherFieldName)
                            .replace('%otherFieldLabel%', otherFieldLabel)
                    }
                };
            }

            return null;

        };

        return res;

    }

    /**
     * Validator that requires controls to exclude certain characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %characters% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static exclude(characters: string | null = null, msg = '%fieldLabel% field doesn\'t allow any of this character(s): "%characters%" ') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }
            const REGEXP = new RegExp('[' + characters + ']');

            return REGEXP.test(control.value) ? {
                atValidatorsAlphanumeric: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%characters%', characters)
                }
            } : null;
        };

        return res;
    }

    /**
     * Validator that requires controls to include at least one characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %characters% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static include(characters: string | null = null, msg = '%fieldLabel% field must include "%characters%" character(s)') {
        const res = (control: FormControl) => {
            const REGEXP = new RegExp('.*[' + characters + '].*');
            if (!control.value) {
                return null;
            }
            return REGEXP.test(control.value) ? null : {
                atValidatorsRejectOnly: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%characters%', characters)
                }
            };
        };

        return res;
    }

    /**
     * Validator that requires a control to match a regex to its value.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static regExp(regexp: RegExp, msg = '%fieldLabel% is invalid') {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }

            return regexp.test(control.value) ? null : {
                atValidatorsRegExp: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        };

        return res;
    }

    /**
     * Validator that uses a custom function to check if FormControl is valid.
     * @param (formCtrl: FormControl) => string fn Function that returns an string if formCtrl is invalid and null otherwise.
     * The returned string will be used as an error message, you can use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     * @dynamic
     */
    static custom(fn: (formCtrl: FormControl) => (string | null)) {
        const res = (control: FormControl) => {
            if (!control.value) {
                return null;
            }

            const res = fn(control);
            return !res ? null : {
                atValidatorsCustom: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: res
                }
            };
        };

        return res;
    }
}
