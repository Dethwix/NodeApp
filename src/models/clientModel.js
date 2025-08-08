import Client from '../schemas/clientSchema.js';
import mongoose from 'mongoose';

class clientModel {
  async create(client) {
    return await Client.create(client);
  }

  async getAll() {
    return await Client.find()
  }

  async getOne(id) {
    return await Client.findById(id);

  }

  async update(id, client) {
    return await Client.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, client, { new: true });
  }

  async delete(id) {
    return await Client.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new clientModel();
