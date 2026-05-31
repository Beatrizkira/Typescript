type Veiculo = {
    marca: string;
    ano: string;
};

type Car = {
    brand: Veiculo['marca'];
    year: string;
    name: string;
};

const carro: Car = {
    brand: 'Ford',
    year: '2020',
    name: 'Nome',
};

console.log(carro);