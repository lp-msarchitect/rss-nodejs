class User {
  constructor({ name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.id = '';
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
