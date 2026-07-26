import customUtils from './modulo';
const _ = customUtils as any;

declare global {
    var MINHAGLOBAL: string;
}

const array = [100, 200, 300, 400];

console.log(globalThis.MINHAGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
