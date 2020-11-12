import express, {Application, Router} from "express";
import bodyParser from 'body-parser';

class Server {
    private app: express.Express;

    constructor() {
        this.app = express()
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '1mb' }));
    }

    private dbConnect() {
        //pool.connect
    }

    private routerConfig() {
        this.app.use('/todos', todosRouter);
    }

    public start = () => {

    }
}

export default Server;