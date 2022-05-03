const User = require('../../app/models/User');

describe("Unit Test for User class", () => {
  test("Create an User object", () => {
    const user = new User(1, 'josueram', 'Josué', 'Bio');

    expect(user.id).toBe(1);
    expect(user.username).toBe('josueram');
    expect(user.name).toBe('Josué');
    expect(user.bio).toBe('Bio');
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  }),
  test("Add getters", () => {
    const user = new User(1, 'josueram', 'Josué', 'Bio');

    expect(user.getUsername).toBe('josueram');
    expect(user.getName).toBe('Josué');
    expect(user.getBio).toBe('Bio');
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  }),
  test("Add setters", () => {
    const user = new User(1, 'josueram', 'Josué', 'Bio');

    user.setUsername = 'josueram2';
    expect(user.username).toBe('josueram2');

    user.setBio = 'Bio2';
    expect(user.bio).toBe('Bio2');
  });
});