import express, { Router } from "express";
import TodosController from '../controllers/TodosController'
import {runInThisContext} from "vm";

const router = Router()
const todosController = new TodosController();


router.get('/', todosController.get);
router.post('/', todosController.post);

export default router;