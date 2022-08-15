import mysql from 'mysql2';


export async function connect() {
    // if(global.connection && global.connection.state !== 'disconnected' ) return global.connection;

     const connection = mysql.createConnection({
        host: 'devstart.ca8wsggzuflh.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: "S2[W}vG$3P#!b%]Z)Pa}A{2+G",
        database: 'DevStart_Matheus'
    });
    console.log('Connecting to database...');
    return connection;
}
 
    export async function selectCustomer() {
        const conn = await connect();
         conn.query('SELECT * FROM `tb_endereco`', function (err , results, fields) {
        if (err){
            console.log(err);
        }else{
        console.log(results);
        }  
    })
}


//     ///post 
export async function insertCustomer(logradouro: string, numero: number, cidade: string){
    const conn = await connect();
    const sql = 'INSERT INTO `tb_endereco` (`logradouro`, `numero`, `cidade`) VALUES (?, ?, ?);';
    const value = [logradouro, numero, cidade];
    conn.query(sql, value,
    function (err , results, fields) {
    if (err){
        console.log(err);
    }else{
    console.log(results);
    }  
})
}

export async function updateCustomer(id:number, customer: string) {
        
    }
       


