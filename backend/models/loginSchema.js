const pool=require('../DB/Database')

const validUser = async({emailid,password})=>{
    const result =await pool.query(
        'SELECT * FROM users WHERE emailid=$1 AND password=$2',  [emailid, password]);
    return result.rows[0];
}

module.exports=validUser;