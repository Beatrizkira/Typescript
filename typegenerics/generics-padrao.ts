const objeto1: Record<string, string | number> ={
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    idade?: number;
    sobrenome: string;
};

//Required
type PessoaRequired = Required<PessoaProtocol>;

//Partial
type PessoaPartial = Partial<PessoaRequired>;

//Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
};
console.log(objeto2);

// Extract e Exclude 
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: 'aS55AS4S4as45A5DA5DA5',
    nome: 'Luiz',
    idade:30,
}

function mapAccount(accountMongo: AccountMongo) : AccountApi {
    const { _id, ...accountData} = accountMongo;
    return {...accountData, id: _id};
}


//Module mode
export default 1;