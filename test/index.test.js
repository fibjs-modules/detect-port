'use strict';

const test = require("test");
const TcpServer = require('net').TcpServer;
const detectPort = require('../');

test.setup();

describe('detectPort', () => {
  it("available port", () => {
    assert.equal(detectPort(41687), 41687);
  });

  it("random port", () => {
    let svr = new TcpServer(3000, () => { });
    svr.run(() => {});
    assert.notEqual(detectPort(3000), 3000);
    svr.stop();
  });

  it("same address", () => {
    let svr = new TcpServer('127.0.0.1', 3000, () => { });
    svr.run(() => {});
    assert.notEqual(detectPort(3000, '127.0.0.1'), 3000);
    svr.stop();
  });

  it("different address", () => {
    let svr = new TcpServer('127.0.0.1', 3000, () => { });
    svr.run(() => {});
    assert.equal(detectPort(3000), 3000);
    svr.stop();
  });
});

process.exit(test.run(console.DEBUG));
