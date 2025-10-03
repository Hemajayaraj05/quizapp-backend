const pool=require('../DB/Database');


const createUser=async({username,emailid,password,role})=>{
    const result=await pool.query('INSERT INTO users(username,emailid,password,role) VALUES($1,$2,$3,$4)  RETURNING *',  [username, emailid, password, role]);
    return result.rows[0];
}

module.exports=createUser;