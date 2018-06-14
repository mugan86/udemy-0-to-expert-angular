import { Pipe, PipeTransform } from '@angular/core';
    /**
     * @param value Value that want transform
     * @param active Password filt apply to show hide characters
     * @param symbol Symbol to use hide characters. Default: '*'
     * Hide password when active with select character
     * Usage:
     *      value | password:<active>:<symbol>
     * Example:
     *      {{ 'password' | password:true }}
     *   formats to: '********'
     *      {{ 'password' | password:false }}
     *   formats to: 'password'
     *      {{ 'password' | password:true:'l' }}
     *   formats to: 'llllllll'
     *       {{ 'password' | password:true:'ll' }}
     *   formats to: '********'
     *      {{ 'password' | password:false:'l' }}
     *   formats to: password
     * @returns {string}
     */
    @Pipe({name: 'password'})
    export class PasswordPipe implements PipeTransform {
        transform(value: string, active: boolean, symbol: string = '*'): string {
            if (!active) {
                return value;
            }
            if(symbol.length != 1) {
                symbol = '*';
            }
            return symbol.repeat(value.length);
        }
    }