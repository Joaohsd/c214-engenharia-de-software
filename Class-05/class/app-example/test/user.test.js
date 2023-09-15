const { expect } = require('chai');
const { findUserById } = require('../src/user')

describe('Test scenario for finding user', () => {
    // Creating samples for testing
    userSamples = [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Pedro' }
    ]

    // First Test case
    it('Finding an user with an existing ID', () => {
        // Context
        const id = 1;
        // Processing
        const foundUser = findUserById(userSamples, id);
        // Verifying
        expect(foundUser).to.deep.equal({ id: 1, name: 'João' }); // Verify if the structure of the object and values are equal
    });
    // Second Test case
    it('Finding an user with a non-existent ID', () => {
        // Context
        const id = 5;
        // Processing
        const foundUser = findUserById(userSamples, id);
        // Verifying
        expect(foundUser).to.equal(undefined);
    });
})