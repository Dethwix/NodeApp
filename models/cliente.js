import Cliente from '../schemas/cliente.js';
import mongoose from 'mongoose';

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
    return await Cliente.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, cliente, { new: true });
  }

  async delete(id) {
    return await Cliente.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new clienteModel();
