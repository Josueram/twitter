class User {
  constructor(id, username, name, bio, dateCreated, lastUpdated) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }

  get getUsername() {
    return this.username;
  }
  set setUsername(username) {
    this.username = username;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getBio() {
    return this.bio;
  }
  set setBio(bio) {
    this.bio = bio;
  }

  get getDateCreated() {
    return this.dateCreated;
  }
  set setDarateCreated(dateCreated) {
    this.dateCreated = dateCreated;
  }

  get getLastUpdated() {
    return this.lastUpdated;
  }
  set setLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}

module.exports = User;
