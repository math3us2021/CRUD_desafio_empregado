import { Router, Request, Response } from 'express';
import {getCustomer, postCustomer} from './controller';


const route = Router()

route.get('/', getCustomer)

route.post('/',postCustomer)

export default route;