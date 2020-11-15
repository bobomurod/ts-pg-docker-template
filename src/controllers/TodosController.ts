import pool from '../dbconfig/dbconnector';
import {Request, Response} from "express";

class TodosController {
    public async get(req: Request, res: Response) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM test_table";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async post(req: Request, res: Response) {
        try {
            const client = await pool.connect();

            const sql = `INSERT INTO test_schema."test_table" ("name", "isActive") VALUES ('new task', FALSE)`;
            const result  = await client.query(sql);

            client.release();

            res.send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;