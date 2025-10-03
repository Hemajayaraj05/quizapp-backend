const {Pool} =require('pg');
require('dotenv').config();


const pool=new Pool({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

})
pool.connect()
  .then(client => {
    console.log("Connected to Database");
    client.release();
  })
  .catch(err => console.error("Error connecting to DB", err.stack));
module.exports=pool;
