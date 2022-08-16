import { Router} from 'express';
import {getCustomer,getIDCustomer, postCustomer, putCustomer,deleteCustomer} from './controller';
import validate from './middleware/validate';
import schema from './schema/indexSchema';

const route = Router()

route.get('/', getCustomer)

route.get('/:id', getIDCustomer)

route.post('/', validate(schema) ,postCustomer)

route.put('/:id', putCustomer)

route.delete('/:id', deleteCustomer)

export default route;