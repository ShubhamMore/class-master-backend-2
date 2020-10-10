const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const UserSocket = require('./user-socket');

const socket = async (server) => {
  const io = require('socket.io')(server);

  io.of('/classMasterSocketConnection')
    .use(async (socket, next) => {
      if (socket.handshake.query && socket.handshake.query.token) {
        const token = socket.handshake.query.token.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
          if (err) return next(new Error('Authentication error'));
          const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token,
          });
          if (!user) {
            return next(new Error('Authentication error'));
          }
          socket.user = user;
          socket.token = token;
          next();
        });
      } else {
        next(new Error('Authentication error'));
      }
    })
    .on('connection', (socket) => {
      new UserSocket(socket.user.imsMasterId, socket);
      socket.on('disconnect', () => {
        UserSocket.deleteSocket(socket.user.imsMasterId);
      });
    });
};

module.exports = socket;
