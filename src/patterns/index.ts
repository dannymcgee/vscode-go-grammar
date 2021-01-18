import { regex } from '../utility';

export const ident = /[_a-zA-Z][_a-zA-Z0-9]*/;
export const namedTypePattern = regex`/(?:(${ident})(\.))?(${ident})/`;
export const primTypePattern = /\b((?:(?:u?int|float|complex)(?:\d{1,3}|ptr)?)|byte|int|string|rune|bool|error)\b/;
