const {sql} = require('slonik')

const insertUser = (username,email,password) => sql.unsafe`
INSERT INTO usuarios(
   username,email,password, fecha
    )VALUES(
    ${username}, ${email},${password}, NOW())`
   

const selectByUername = (email)=> sql.unsafe`SELECT username, email, password
 FROM usuarios WHERE email LIKE ${email}; `
    module.exports ={
        insertUser,
        selectByUername,

    }