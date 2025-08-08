import express from 'express';
const route = express.Router();
import clientController from '../controllers/clientController.js';

route.post('/', clientController.create);
route.get('/', clientController.getAll);
route.get('/:id', clientController.getOne);
route.put('/:id', clientController.update);
route.delete('/:id', clientController.delete);

export default route;
