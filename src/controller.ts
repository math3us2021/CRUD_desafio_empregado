import { Request, Response } from "express";
import {connect} from "./database/index";

export function getCustomer(req:Request, res:Response){
    async function selectCustomer() {
        const conn = await connect();
         conn.query('SELECT * FROM `tb_endereco`', function (err , results, fields) {
        if (err){
            console.log(err);
        }else{
        res.json(results);
        }  
    })
}
selectCustomer();
}

export function postCustomer(req: Request, res: Response){
    async function insertCustomer(logradouro: string, numero: number, cidade: string, estado: string) {
        const conn = await connect();
        const sql = 'INSERT INTO `tb_endereco` (`logradouro`, `numero`, `cidade`,`estado`) VALUES (?, ?, ?,?);';
        const value = [logradouro, numero, cidade, estado];
        conn.query(sql, value,
        function (err , results, fields) {
        if (err){
            console.log(err);
        }else{
        res.json(results);
        }  
    })
    }
    insertCustomer(req.body.logradouro, req.body.numero, req.body.cidade, req.body.estado);
}