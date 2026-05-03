export class Pessoa {
    constructor(
        public nome:string,
        public sobrenome:string,
        private idade: number,
        protected cpf: string,
    ) {}


getIdade(): number {
    return this.idade;
}

getCpf(): string {
    return this.cpf;
}

getNomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
}
}

export class Aluno extends Pessoa{
    constructor(
         nome:string,
         sobrenome:string,
          idade: number,
         cpf: string,
    ) {
        super(nome, sobrenome, idade, cpf);
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do cliente:' + this.nome + '' + this.sobrenome;
    }
}

const aluno = new Aluno('Luiz', 'Otávio', 30, '000.000.000-00');
const cliente = new Cliente('Maria', 'Silva', 25, '111.111.111-11');
const pessoa = new Pessoa('João', 'Miranda', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
