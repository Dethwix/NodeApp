import { ObjectId } from 'mongodb';
import dbClient from "../config/dbClient.js";

class clienteModel {
  async create(cliente) {
    const colClientes = dbClient.db.collection('clientes');
    return await colClientes.insertOne(cliente)
  }

  async getAll() {
    const colClientes = dbClient.db.collection('clientes');
    return await colClientes.find({}).toArray();
  }

  async getOne(id) {
    const colClientes = dbClient.db.collection('clientes');
    return await colClientes.findOne({ _id: new ObjectId(id) });
  }

  async update(id, cliente) {
    const colClientes = dbClient.db.collection('clientes');
    return await colClientes.updateOne({ _id: new ObjectId(id) }, {$set : cliente});
  }

  async delete(id) {
    const colClientes = dbClient.db.collection('clientes');
    return await colClientes.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new clienteModel;
