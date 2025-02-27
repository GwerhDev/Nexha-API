require("dotenv").config();
const server = require('./app');
const { port, environment } = require("./config");
const db = require("./integrations/mongodb");

async function main() {
  console.log(environment)
  try {
    await db.connect();
    console.log("Succesfully connected");
    server.listen(port, ()=> console.log(`server listening on port ${port}`));
  } catch (error) {
    console.error("Unable to connect to database");
    server.listen(port, ()=> console.log(`server listening on port ${port}`));
  }
};

main();