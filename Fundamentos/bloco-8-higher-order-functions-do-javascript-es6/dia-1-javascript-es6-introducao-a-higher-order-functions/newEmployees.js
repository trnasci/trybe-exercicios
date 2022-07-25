const createEmail = (nomeCompleto) => {
  const email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`;
  return {nomeCompleto, email};
}

const newEmployees = () => {
      const employees = {
      id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees());

  