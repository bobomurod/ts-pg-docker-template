import express, { Router } from "express";
import TodosController from '../controllers/TodosController'
import {runInThisContext} from "vm";

const router = Router()
const todosController = new TodosController();


router.get('/get', todosController.get);
router.post('/post', todosController.post);

export default router;