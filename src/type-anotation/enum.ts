enum StatusEnum {
    Published ,
    Draft
}
console.log(StatusEnum);

function changeStatus(status: StatusEnum){
    console.log(status);
}
changeStatus(StatusEnum.Published);

enum OptionsEnum {
    op1 = 'OP1',
    OP2 = 'OP2',
    op3 = 12,
}
const  changeOptions = (options: OptionsEnum) => console.log(options);
changeOptions(OptionsEnum.op1)