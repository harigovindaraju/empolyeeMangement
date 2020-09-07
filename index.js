//custom imports
const api = require("./config/api-config");

if (
  !process.env.LOCALHOST &&
  !process.env.DB_USER &&
  !process.env.PASSWORD &&
  !process.env.DATABASE
) {
  throw new Error("FATAL ERROR: environment variables  is not defined.");
}

//connecting to port
const port = process.env.PORT || 4001;
api.app.listen(port, () => console.log(`sever started on localhost:${port}`));
