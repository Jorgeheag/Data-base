const express = require("express");
const { Sequelize } = require("sequelize");

const { employeesRouter } = require("./usersRoutes/employessRoustes");
//const { postsRouter } = require('./usersRoutes/postRouterEm')
const { Employee } = require('./models/userModelEm');
//utils
const { db } = require("./utils/dataBaseUtils");

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use("/", employeesRouter); //cambiar

db.authenticate()
  .then(() => console.log("Db authenticated"))
  .catch((err) => console.log(err));

Employee.sync({ force: true })
  .then(() => console.log("Db synced"))
  .catch((err) => console.log(err));

//db.sync()
//	.then(() => console.log('Db synced'))
//	.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Express app running");
});
