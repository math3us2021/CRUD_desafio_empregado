import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

const validate = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        await schema.validate(req.body);
        return next();

    } catch ({ message }) {
        return res.status(400).send(message);
    }
}

export default validate
