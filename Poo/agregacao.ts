export class CarrinhoDeCompras {
    private readonly produtos:Produto [] = [];

    inserirProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Calça', 89.9);
const produto3 = new Produto('Tênis', 199.9);
carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2);
carrinhoDeCompras.inserirProduto(produto3);
console.log(produto1.nome);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());