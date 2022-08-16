import { object, string, number } from "yup";   

interface User {
    id_departamento: number,
    id_end: number,
    nome_emp: string, 
    cargo: string,
    salario: number,
    comissao: number,
}

export default object({
    id_departamento: number().required("O id_departamento é obrigatório"),
    id_end: number().required("O id_endereco é obrigatório"),
    nome_emp: string().required("O nome_emp é obrigatório"),
    cargo: string().required("O cargo é obrigatório"),
    salario: number().required("O salario é obrigatório"),
    comissao: number().required("A comissao é obrigatória"),
});


// logradouro: string().required("O logradouro é obrigatório"),
// numero: number().required("O numero é obrigatório"),
// cidade: string().required("A cidade é obrigatória"),
// estado: string().required("O estado é obrigatório")