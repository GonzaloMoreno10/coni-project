import express from 'express';
import dotenv from 'dotenv';
import { mainRouter } from './rutas/api.route.js';
import { indexController } from './controladores/main.controller.js';
import morgan from 'morgan';
import log4js from 'log4js';
import { log4jsConfig } from './configuraciones/log4js.config.js';

dotenv.config();

log4js.configure(log4jsConfig);

export const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('common'));

//Seteando que el puerto en el que va a correr es el 3000
app.set('port', process.env.PORT || 3000);

//Se declara ruta principal http://localhost:3000/api
//Se le dice al server que use /api para anteceder a las rutas del mainRouter
app.use('/api', mainRouter);

//http://localhost:3000/ -> metodo get
app.get('/', indexController);

/*

    Aca se ingresan las configuraciones del servidor
    *Dotenv: modulo que se usa para configurar las variables de entorno: Permite leer las variables de entorno del archivo .env
    *Log4Js: modulo que se utiliza para hacer logs en la terminal y en archivos de forma mas practica y linda
    *Express: Modulo que se utiliza para rutear nuestra aplicacion
    *Morgan: Modulo utilizado para rastrear en la consola las peticiones que se realizan a nuestra aplicacion

*/
