import mysql from 'mysql2';


export async function connect() {
     const connection = mysql.createConnection({
        host: 'devstart.ca8wsggzuflh.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: "S2[W}vG$3P#!b%]Z)Pa}A{2+G",
        database: 'DevStart_Matheus'
    });
    console.log('Connecting to database...');
    return connection;
}
 
   


       


