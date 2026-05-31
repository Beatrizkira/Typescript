interface Pessoa {
    nome: string;
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    enderecos: ['Av. Brasil'],
    idade: 30
};