const net = require('net');
const http = require("http");

module.exports = function detectPort(port) {
  let svr;
  try {
    svr = new http.Server(port, () => { });
    svr.run(() => {});
  } catch (error) {
    svr = new http.Server(0, () => { });
    svr.run(() => {});
  } finally {
    port = svr.socket.localPort;
    svr.stop();
    return port;
  }
};
