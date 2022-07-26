
const numbers = [1, 32, 44, 2, 3];
const iteracoesDoReduce = numbers.reduce((a, c) => {
  
  
  return a +  c // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
  
});

console.log(iteracoesDoReduce);
  // por fim, esse console.log imprime o retorno final da nossa função, 