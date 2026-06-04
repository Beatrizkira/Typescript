type MeuTipo = number;


const arrayNumeros: Array<MeuTipo> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
    return 1;
}


function minhaPromise(): Promise<MeuTipo> {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(1);
        }, 1000);
    });
}
promiseAsync().then((resultado) => console.log(resultado +1));