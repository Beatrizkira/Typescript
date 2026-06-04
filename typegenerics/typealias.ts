interface PessoaProtocolo<T, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;

}

const aluno1: PessoaProtocolo <string, number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,

};

const aluno2: PessoaProtocolo<number, number> ={
    nome: 123,
    sobrenome: 456,
    idade: 30
}