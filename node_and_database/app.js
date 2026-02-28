const express = require("express");
const {main} = require("./database");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.send("this is the home page");
  console.log("request hit on home");
});

main()
  .then(async () => {
    console.log("connected to DB");
    app.listen(4000, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((err) => console.log(err));
