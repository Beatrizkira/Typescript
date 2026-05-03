export class Empresa {
    readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;


 constructor (nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor (
        public readonly nome: string,
        public readonly cargo: string,
    ){}
}


export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11');
    }


    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Instrutor');
const colaborador2 = new Colaborador('Maria', 'Desenvolvedora');

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
const colaboradorRemovido = empresa1.popColaborador();
console.log('Colaborador removido:', colaboradorRemovido);
empresa1.mostrarColaboradores();