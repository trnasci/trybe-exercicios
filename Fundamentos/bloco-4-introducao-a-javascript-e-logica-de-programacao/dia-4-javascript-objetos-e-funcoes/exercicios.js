//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem vinda, ' + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
// em seguida, imprima o objeto no console. Valor esperado no console:
info.recorrente = 'Sim';

console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. 
let valores = [2, 3, 5, 7];
let most = []
for (let index of valores) {
    let resultado = valores[index];
    most.push(resultado);
  
}
console.log(most);

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
