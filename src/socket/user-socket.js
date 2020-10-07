class UserSockets {
  static sockets = {};

  constructor(userId, socket) {
    UserSockets.sockets[userId] = socket;
  }

  static setSocket(userId, socket) {
    UserSockets.sockets[userId] = socket;
  }

  static getSocket(userId) {
    return UserSockets.sockets[userId];
  }

  static deleteSocket(userId) {
    UserSockets.sockets[userId] = null;
  }
}

module.exports = UserSockets;
