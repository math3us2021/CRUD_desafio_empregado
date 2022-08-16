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

export function getIDCustomer(req:Request, res:Response){
    async function selectCustomer(id:number | string){
        const conn = await connect();
        conn.query('SELECT * FROM `tb_endereco` WHERE `id_endereco`= ?',
        [id], function (err , results, fields) {
        if (err){
            return res.status(400).send("Erro ao buscar o cliente" + err);
        }else{
        res.json(results);
        }  
    })
    }
    selectCustomer(req.params.id);
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
        console.log("Empregado cadastrado com sucesso");
        }  
    })
    }
    insertCustomer(req.body.logradouro, req.body.numero, req.body.cidade, req.body.estado);
}

export function putCustomer(req: Request, res: Response){
    async function updateCustomer(id:number | string, customer: string) {
        const conn = await connect();
        const sql = 'UPDATE `tb_endereco` SET `logradouro` = ? WHERE `id_endereco` = ?';
        const value = [customer, id];
        conn.query(sql,value ,
            function (err,result, fields) {
                if(err){
                   return res.status(400).send("Erro ao atualizar o cliente");
                }else{
                    res.json(result);
                }
            })
    }
    updateCustomer(req.params.id, req.body.logradouro);
}

export function deleteCustomer(req:Request, res: Response){
    async function deleteCustomer(id:number | string){
        const conn = await connect();
        const sql = 'DELETE FROM `tb_endereco` WHERE `id_endereco` = ?';
        const value = [id];
        conn.query(sql,value,
            function(err,result,fields){
                if(err){
                    console.log(err);
                }else{
                    res.json(result);
                }
            })
    }
    deleteCustomer(req.params.id); 
}