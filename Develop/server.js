const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
require('dotenv').config();

// const connections = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   database: 'ecommerce_db'
// })

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
});
