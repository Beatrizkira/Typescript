import lodash from 'lodash';

declare global {
    var MINHAGLOBAL: string;
}

globalThis.MINHAGLOBAL = 'VALOR DA GLOBAL';

const customUtils = Object.assign({}, lodash as any, {
    mul(array: number[]): number {
        return array.reduce((total, actual) => total * actual, 1);
    }
}) as typeof lodash & { mul(array: number[]): number };

export default customUtils;