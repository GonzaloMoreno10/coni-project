import { Router } from 'express';
import { indexController } from '../controladores/main.controller.js';
export const mainRouter = Router();

//Se declara una nueva ruta http://localhost:3000/api/
mainRouter.get('/', indexController);
