const UserView = require('../../app/views/UserView');

describe("Test for UserView", () => {
  test("Return an error object when try to created a new user with an null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload);
    
    expect(result.error).toMatch("Not Found payload");
  }),
  test("Return an error object when try to created a new user with a payload invalid properties", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload);

    expect(result.error).toMatch("Error, one or more of the payload properties need to have a valid value");
  }),
  test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: "Username"}
    const result = UserView.createUser(payload);

    expect(result.error).toMatch("Error, one or more of the payload properties need to have a valid value");
  }),
  test("Create a user by a given valid payload", () => {
    const payload = {username: "username", name: "name", id: 1}
    const result = UserView.createUser(payload);

    expect(result.name).toBe("name");
    expect(result.username).toBe("username");
    expect(result.id).toBe(1);
  })
})