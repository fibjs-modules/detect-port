const test = require("test");
const http = require("http");
const detectPort = require('../');

test.setup();

describe('detectPort', () => {
  it("available port", () => {
    assert.equal(detectPort(3000), 3000);
  });

  it("random port", () => {
    let svr = new http.Server(3000, () => { });
    svr.asyncRun();
    assert.notEqual(detectPort(3000), 3000);
    svr.stop();
  });
});

test.run(console.DEBUG);
