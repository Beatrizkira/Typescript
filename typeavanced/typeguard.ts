export function add(a: unknown, b: unknown) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if('nome' in obj) console.log(obj.nome);
    switch (obj.tipo) {
        case 'pessoa':
            console.log('Isso é uma pessoa', obj.nome);
            break;
        case 'animal':
            console.log('Isso é um animal', obj.cor);
            break;
    }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'preto' });