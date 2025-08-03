import clienteModel from '../models/clientes.js';
class clienteController {
  constructor() {

  }

  async create(req, res) {
    try {
      const data = await clienteModel.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }

  }

  async getAll(req, res) {
    try {
      const data = await clienteModel.getAll();
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }

  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await clienteModel.getOne(id);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }

  }


  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await clienteModel.update(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }

  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await clienteModel.delete(id);
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }

  }
}


export default new clienteController();
