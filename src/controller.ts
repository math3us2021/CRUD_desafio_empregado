import { Request, Response } from "express";
import {connect} from "./database/index";
import {selectCustomer} from "./model";

export function getCustomer(req:Request, res:Response){
    selectCustomer((err:any, results:any) => {
        if (err){
            console.log(err);
        }else{
        res.json(results);
        }  
    })
}



export function getIDCustomer(req:Request, res:Response){
    async function selectCustomer(id:number | string){
        const conn = await connect();
        conn.query('SELECT * FROM `tb_empregado` WHERE `id_empregado`= ?',
        [id], function (err , results, fields) {
        if (err){ //// como validar aqui
            return res.status(400).send("Erro ao buscar o cliente" + err);
        }else{
        res.json(results);
        }  
    })
    }
    selectCustomer(req.params.id);
}



export function postCustomer(req: Request, res: Response){
    async function insertCustomer(
        id_departamento: number,
        id_end: number,
        nome_emp: string, 
        cargo: string,
        dt_nascimento: Date,
        salario: number,
        comissao: number, 
        status_empregado: number
        ) {
        const conn = await connect();
        const sql = 'INSERT INTO `tb_empregado` (`id_departamento`, `id_end`, `nome_emp`,`cargo`, `dt_nascimento`,`salario`,`comissao`,`status_empregado`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const value = [id_departamento, id_end, nome_emp, cargo,dt_nascimento, salario, comissao, status_empregado];
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
    insertCustomer(req.body.id_departamento, req.body.id_endereco, req.body.nome_emp, req.body.cargo, req.body.dt_nascimento, req.body.salario, req.body.comissao, req.body.status_empregado);
}

export function putCustomer(req: Request, res: Response){
    async function updateCustomer(
        id:number | string,
        id_departamento: number,
        id_end: number,
        nome_emp: string, 
        cargo: string,
        dt_nascimento: Date,
        salario: number,
        comissao: number,
        status_empregado: number
       
        ) {
        const conn = await connect();
        const sql = 'UPDATE `tb_empregado` SET `id_departamento` = ?, `id_end`  = ? ,`nome_emp` = ?, `cargo` = ?  , `dt_nascimento` = ? ,`salario` = ?, `comissao` = ?, `status_empregado` = ? WHERE `id_empregado` = ?';
        const value = [id_departamento,id_end,nome_emp,cargo,dt_nascimento,salario,comissao, status_empregado, id];
        conn.query(sql,value ,
            function (err,result, fields) {
                if(err){
                   return res.status(400).send("Erro ao atualizar o cliente" + req.params.id_empregado);
                }else{
                    res.json(result);
                }
            })
    }
    updateCustomer(req.params.id, req.body.id_departamento, req.body.id_end, req.body.nome_emp, req.body.cargo, req.body.dt_nascimento, req.body.salario, req.body.comissao, req.body.status_empregado);
}

export function deleteCustomer(req:Request, res: Response){
    async function deleteCustomer(id:number | string){
        const conn = await connect();
        const sql = 'DELETE FROM `tb_empregado` WHERE `id_empregado` = ?';
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