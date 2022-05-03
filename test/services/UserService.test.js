const UserService = require('../../app/services/UserService');

describe("Test for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, 'josueram', 'Josué');

    expect(user.id).toBe(1);
    expect(user.username).toBe('josueram');
    expect(user.name).toBe('Josué');
    expect(user.bio).not.toBeUndefined();
  }),
  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "josueram", "Josué");
    const userInfoList = UserService.getInfo(user);

    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("josueram");
    expect(userInfoList[2]).toBe("Josué");
    expect(userInfoList[3]).toBe("No bio");
  }),
  test("3. Update username", () => {
    const user = UserService.create(1, "josueram", "Josué");
    UserService.updateUserUsername(user, "josueram2");

    expect(user.username).toBe("josueram2");
  }),
  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "josueram1", "Josué");
    const user2 = UserService.create(1, "josueram2", "Josué");
    const user3 = UserService.create(1, "josueram3", "Josué");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);

    expect(usernames).toContain("josueram1");
    expect(usernames).toContain("josueram2");
    expect(usernames).toContain("josueram3");
  });
});