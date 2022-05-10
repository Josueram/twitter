const UserService = require('../services/UserService');

class UserView {
  static createUser(payload) {
    if (payload === null ) {
      console.log("Error is null");
      return { error: "Not Found payload" };
    } else if (typeof payload.id === 'number' && typeof payload.username === 'string' && typeof payload.name === 'string') {
      return UserService.create(payload.id, payload.username, payload.name);
    } else {
      return { error: "Error, one or more of the payload properties need to have a valid value" };
    }
  }
}

module.exports = UserView;