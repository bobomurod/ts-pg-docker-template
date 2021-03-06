import express, {Application, Router} from "express";
import bodyParser from 'body-parser';
import pool from './dbconfig/dbconnector';
import todosRouter from './routers/TodosRouter';

class Server {
    private app: Application;

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
        pool.connect(function (err, client, done) {
            if (err) throw new Error("error connecting db");
            console.log('Connected');
        })
    }

    private routerConfig() {
        this.app.use('/todos', todosRouter);
        this.app.use('/post', todosRouter);
    }

    public start = (port: Number):Promise<{} | Number> => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () =>{
                resolve(port)
            }).on('error', (err: Object) => reject(err));
        })

    }
}

export default Server;