import  express  from "express";
import route from "./router";
import {connect} from "./database/index";


const app = express();

app.use(express.json())

connect();

app.use(route)

app.listen(3333, () => 'server running on port 3333')


