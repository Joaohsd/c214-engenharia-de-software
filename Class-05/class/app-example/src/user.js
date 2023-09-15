/**
 * Find a user by ID in a list of users.
 * @param {Array} users - A list of users.
 * @param {number} id - The ID of the user to find.
 * @returns {object|undefined} - The found user or undefined if not found.
 */

function findUserById(users, id) {
    return users.find(user => user.id === id);
}
  
module.exports = {findUserById}; // Module responsible for exporting the function 'findUserById' to be tested
  