type FilterCallback<T> = (array: T[], callbackfn: (
    value: T,
     index?: number,
      array?: T[]
    ) => boolean) => T[];



 export function meuFilter<T>(
    array: T[],
    callbackfn: (value: T, index?: number, array?: T[]) => boolean,
 ): T[] {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value > 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => {
    return (typeof value === 'number') ? value < 5 : false;
});
console.log(arrayFiltrado);