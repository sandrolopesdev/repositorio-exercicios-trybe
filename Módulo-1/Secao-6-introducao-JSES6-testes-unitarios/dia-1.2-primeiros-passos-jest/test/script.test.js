// Sintaxe

// const myRemove = require('./função a ser importada')

// describe('', {

// it('descrição', () => {
//    expect(função()).toBe(resultado esperado);
// });

// });

const myRemove = require("../script");

describe("Testa função myRemove", () => {
  test("Verifica se a função myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test("Verifica se a função myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("Verifica se a função myRemove([1, 2, 3, 4], 5) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// describe('Testa a função myFizzBuzz', () => {
//   test('Verifica se o parâmetro da função myFizzBuzz é divisível por 3 e 5', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuz');
//   });
// });