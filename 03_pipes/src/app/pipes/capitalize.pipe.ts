import { Pipe, PipeTransform } from '@angular/core';
    /**
     * Raise the value exponentially
     * Takes an exponent argument that defaults to 1.
     * Usage:
     *      value | exponentialStrength:exponent
     * Example:
     *      {{ 2 | exponentialStrength:10 }}
     *   formats to: 1024
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