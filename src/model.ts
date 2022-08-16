import {connect} from "./database/index";

export async function selectCustomer(calback:any ): Promise<void> {
    const conn = await connect();
     conn.query('SELECT * FROM `tb_empregado`',calback);
}