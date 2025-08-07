import Cliente from '../schemas/cliente.js';

class clienteModel {
  async create(cliente) {
    return await Cliente.create(cliente);
  }

  async getAll() {
    return await Cliente.find()
  }

  async getOne(id) {
    return await Cliente.findById(id);

  }

  async update(id, cliente) {
    return await Cliente.findOneAndUpdate(id, cliente, { new: true });
  }

  async delete(id) {
    return await Cliente.findOneAndDelete(id, cliente, { new: true });
  }
}

export default new clienteModel();
