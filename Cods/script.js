const cpf = '705.484.450-52';
const cpfFormatado = cpf.replaceAll(/\D+/g,'');
let cpfMultiplicado = [];

for(let valor in cpfFormatado -2){
    let tamanhoCpf = cpfFormatado.length -2;
    cpfMultiplicado.pop(Number(valor) * tamanhoCpf)
            tamanhoCpf--;
};


// const cpfMultiplicado = cpfFormatado.map( e =>{
//     let tamanhoCpf = cpfFormatado.length;
//     e * tamanhoCpf;
//     tamanhoCpf--;
// });

console.log(cpfFormatado); 
console.log(typeof(cpfFormatado));
console.log(cpfMultiplicado);