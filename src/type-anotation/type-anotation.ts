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

//Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

// Tipo Any
function showMessage(mgs: any) {
    return mgs;
}

//Utilize Any em apenas em último caso
console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));


//Tipo Void

function semRetorno(...args: string[]): void{
    console.log(args.join( ''));
}
const pessoa = { 
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void{
        console.log(this.nome + '' + this.sobrenome);
    },
};

semRetorno ('Luiz', 'Otávio');

export {pessoa};

// Tipo objects  

const objetoA: {
     readonly chaveA: string,
    chaveB: string
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);

//  Array <T> -T[]
 export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor, '');
}

const result = toUpperCase('a', 'b', 'c');
const conctenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase ('a', 'b' , 'c')

console.log(result);
console.log(conctenacao);

// Tipo Tuple
const dadosCliente1: [number , string] = [1, 'Luiz'];
const dadosCliente2: [number , string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number , string, string?] = [1, 'Luiz', 'Miranda'];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'Carlos';


console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//readonly
const array1: readonly string[] = ['Luiz', 'Otavio'];
const array2: ReadonlyArray<string> = ['Luiz' , 'Otavio'];

console.log(array1);
console.log(array2);

// Type null e undefined
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): {
    firstName: string,
    lastName?: string,
} {
    return {
        firstName,
        lastName,
    };
}

export function squareOf( x: any) {
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfString = squareOf ('2');

if (squareOfTwoNumber === null) {
    console.log('Conta inválida');
} else {
    console.log(squareOfTwoNumber);
}

// Type never
function criaErro (): void {
    throw new Error ('Erro qualquer');
}

criaErro();