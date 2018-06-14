import { Pipe, PipeTransform } from '@angular/core';
    /**
     * @param value Word in string form that want capitalize all word or only first
     * @param all Default true. Define if capitalize all words (true) or only first word
     * Takes all string words defaults to true
     * Usage:
     *      string | capitalize:all
     * @example
     * Example all word capitalize:
     *      {{ 'aNartz MUGIKa LEdO' | capitalize }}
     *   formats to: 'Anartz Mugika Ledo'
     * Example all word capitalize:
     *      {{ 'aNartz MUGIKa LEdO' | capitalize:false }}
     *   formats to: 'Anartz mugika ledo'
     * @return {string}
     */
    @Pipe({name: 'capitalize'})
    export class CapitalizePipe implements PipeTransform {
        transform(value: string, all: boolean = true): string {
            if (!all) {
                return this.capitalizeSelectWord(value);
            }
            return this.getAllWordsCapitalize(value);
            
        }
        private getAllWordsCapitalize(value: string) {
            const words = value.split(' ');
            let result = '';
            words.map(word => { result = `${result} ${this.capitalizeSelectWord(word)}`; });
            return result;
        }

        private capitalizeSelectWord(word: string) {
            return `${word.substring(0,1).toUpperCase()}${word.substring(1).toLowerCase()}`;
        }
    }