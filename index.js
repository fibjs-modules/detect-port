'use strict';

const TcpServer = require('net').TcpServer;

module.exports = function detectPort(port) {
  let svr;
  try {
    svr = new TcpServer(port, () => { });
    svr.run(() => {});
  } catch (error) {
    svr = new TcpServer(0, () => { });
    svr.run(() => {});
  } finally {
    port = svr.socket.localPort;
    svr.stop();
    return port;
  }
};
