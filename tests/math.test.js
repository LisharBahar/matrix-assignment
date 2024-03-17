// math.test.js
const { mathPOST } = require('../service/DefaultService');

test('adds 1 + 2 to equal 3', async () => {
  await expect(mathPOST({num1: 1, num2: 2}, 'add')).resolves.toStrictEqual({"result": 3});
});

test('subtracts 4 - 2 to equal 2', async () => {
    await expect(mathPOST({num1: 4, num2: 2}, 'subtract')).resolves.toStrictEqual({"result": 2});
});

test('multiplies 3 * 4 to equal 12', async () => {
    await expect(mathPOST({num1: 3, num2: 4}, 'multilpy')).resolves.toStrictEqual({"result": 12});
});

test('divides 6 / 2 to equal 3', async () => {
    await expect(mathPOST({num1: 6, num2: 2}, 'divide')).resolves.toStrictEqual({"result": 3});
  });