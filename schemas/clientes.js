import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        fechaPago: {
            type: Date,
            required: true
        },
        estado: {
            type: String
        }
    }
)