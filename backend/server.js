const app = require("./app");
const mongoConnect = require("./config/connectDatabase");

mongoConnect();
app.listen(process.env.PORT, () => {
  console.log(`server is runnin on http://localhost:${process.env.PORT}`);
});
