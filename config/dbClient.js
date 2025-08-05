import mongoose from 'mongoose';
import 'dotenv/config.js'
import { MongoClient } from 'mongodb';

class dbClient {
  constructor() {
    this.connectDB();
  }
  async connectDB() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=NodeApp";`
    await mongoose.connect(queryString);
    this.conectarDB();
  }

  async closeDB() {
    try {
      await mongoose.disconnect();
      console.log("Conexion con la base de datos cerrada");
    } catch (e) {
      console.error("Error al cerrar la conexion con la base de datos", e)
    }

  }
  
}

export default new dbClient();
