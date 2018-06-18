'use strict';

const TcpServer = require('net').TcpServer;

module.exports = function detectPort(port, address = '') {
  let svr;
  try {
    svr = new TcpServer(address, port, () => { });
    svr.run(() => {});
  } catch (error) {
    svr = new TcpServer(address, 0, () => { });
    svr.run(() => {});
  } finally {
    port = svr.socket.localPort;
    svr.stop();
    return port;
  }
};
