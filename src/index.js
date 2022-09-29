import { app } from './app.js';
import log4js from 'log4js';

const logs = log4js.getLogger('fileConsoleLogger');

//Aca se levanta el servidor
app.listen(app.get('port'), () => {
  logs.info(`Server is running on port: ${app.get('port')}`);
});
