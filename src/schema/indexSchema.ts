import { object, string, number } from "yup";   

interface User {
    logradouro: string;
    numero: number;
    cidade: string;
    estado: string;
}

export default object({
    logradouro: string().required("O logradouro é obrigatório"),
    numero: number().required("O numero é obrigatório"),
    cidade: string().required("A cidade é obrigatória"),
    estado: string().required("O estado é obrigatório")
});
