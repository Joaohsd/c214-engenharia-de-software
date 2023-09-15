const { expect } = require('chai');
const { calculateIMC } = require('../src/imc')

describe('Test scenario for IMC Calculator', () => {
    // First Test case
    it('Correct calculator', () => {
        const weight = 80;  // 80kg
        const height = 180; // 180 cm

        const expectedIMC = (weight / Math.pow(height/100, 2)).toFixed(2);
        const calculatedIMC = calculateIMC(weight, height);

        expect(calculatedIMC).to.equal(expectedIMC);
    });
    // Second Test case
    it('Height = 0. Invalid input', () => {
        const weight = 70;  // 80kg
        const height = 0; // 180 cm

        const expectedIMC = 'NaN';
        const calculatedIMC = calculateIMC(weight, height);

        expect(calculatedIMC).to.equal(expectedIMC);
    });
})