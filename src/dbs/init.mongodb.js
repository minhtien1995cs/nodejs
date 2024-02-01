const mongoose = require("mongoose");

const {
  db: { host, port, name },
} = require("../configs/config.mongodb");

const connectionString = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    // If dev environment
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectionString, { maxPoolSize: 50 })
      .then(() => {
        console.log(`${name} connection successful`, countConnect());
      })
      .catch((err) => {
        console.log("Database connection error" + err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
