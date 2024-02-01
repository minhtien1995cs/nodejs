const mongoose = require("mongoose");
const os = require("os");

const _SECONDS = 5000;
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return numConnection;
};

// check over load
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections based on number osf cores
    const maxConnections = numCores * 5;

    // console.log("Active connections: ", numConnection);
    // console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      // console.log("Over load detected!");
      // notification.send('Over load, please help me');
    }
  }, _SECONDS); // Monitor every 5s
};

module.exports = {
  countConnect,
  checkOverLoad,
};
