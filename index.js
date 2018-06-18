'use strict';

const Socket = require('net').Socket;

module.exports = function detectPort(port, address = '') {
  let svr;
  svr = new Socket();
  try {
    svr.bind(address, port);
  } catch (error) {
    svr.bind(address, 0);
  } finally {
    port = svr.localPort;
    svr.close();
    return port;
  }
};
