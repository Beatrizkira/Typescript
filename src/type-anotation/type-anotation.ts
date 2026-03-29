let nome: string = 'Luiz'; // Qualwuer tipo de strings;
let idade: number = 30;
let adulto: boolean = true; // true ou falso
let simbolo: symbol = Symbol ('qualquer-symbol'); // symbol
// let big: bignit = 10n; // bignit

//Arrays//
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: 'Luiz'
}

//Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;