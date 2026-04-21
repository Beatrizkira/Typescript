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
        console.log(this.nome + ' ' + this.sobrenome);
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
const concatenacao = concatenaString('a', 'b', 'c');

console.log(result);
console.log(concatenacao);

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

let x: any;
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

// Types Literais 
let x2 = 10; // eslit-disable-line
x2 = 0b1010010;
const a = 100;

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

function escolhaCor( cor: 'Vermelho' | 'Amarelo' | 'Azul') {
    return cor;
}
console.log(escolhaCor ('Vermelho'));

export default 1;

//Type alias

type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;

};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Margenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoaTest: Pessoa = {
    idade: 30,
    nome: 'Luiz',
    salario: 1000
};

export function setCorPreferida (pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return {...pessoa, corPreferida: cor};
}

 console.log(setCorPreferida(pessoaTest, 'Azul'));

 // Intersection Type

type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

type UnionPessoa = TemNome | TemSobrenome | TemIdade;

const pessoaUnion: UnionPessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
};

console.log(pessoaUnion);

export {pessoaUnion};
 

type mapStringCallback = (item: string) => string;

function mapString(array: string[], callbackfn: mapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: "joao", password: "123456" };
const sentUser = { username: "joao", password: "123456" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

//Type Unkown

x = 100;
x = "Luiz";
x = 900;
x = 10;
let y = 800;

if (typeof x === "number") console.log(x + y);

// Union Types
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}
 //*Recomendado*//
// Condicional
const body = document.querySelector('body');
 if (body) body.style.background = 'red';

  //Type assertion
 const body3 = document.querySelector('body') as HTMLBodyElement;
 body3.style.background = 'red';

  //HTMLElement
 const input = document.querySelector('input') as HTMLInputElement;
 input.value = 'Qualquer coisa';
 input.focus();

 //* Não recomendado *//

 // Non-null Assertion (!)
 const body2 = document.querySelector('body')!;
 body2.style.background=  'red';


 // Type assertion
 const body4 = (document.querySelector('body') as unknown) as number;
