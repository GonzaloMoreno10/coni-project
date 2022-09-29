//En este ejemplo de controlador, simplemente se devuelve un estado http 200 con un objeto json
export const indexController = (_, res) => {
  return res
    .status(200)
    .json({ status: 200, message: 'El servidor esta arriba' });
};
