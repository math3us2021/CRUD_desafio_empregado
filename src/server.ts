import  express  from "express";
import route from "./router";
import {connect, selectCustomer, insertCustomer, updateCustomer, deleteCustomer} from "./database/index";


const app = express();

app.use(express.json())

connect();
// selectCustomer();
// insertCustomer("Rua teste", 123, "teste");
// updateCustomer(2, "Rua teste");
// deleteCustomer(8);
// connect();


app.use(route)

app.listen(3333, () => 'server running on port 3333')


