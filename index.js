require("dotenv").config();
const { db } = require("./db");
const server = require("./app.js");
const PORT = 3010;

db.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
