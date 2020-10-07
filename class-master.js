const app = require('./src/app');
const http = require('http');
const socket = require('./src/socket/socket');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server is running on port ' + port);
});

socket(server);
