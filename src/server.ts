import  express  from "express";
import route from "./router";
import {connect, selectCustomer, insertCustomer} from "./database/index";

const app = express();

app.use(express.json())

connect();
selectCustomer();
// insertCustomer("Rua teste", 123, "teste");

app.use(route)

app.listen(3333, () => 'server running on port 3333')


