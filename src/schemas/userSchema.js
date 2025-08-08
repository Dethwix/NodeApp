import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema (
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        telefono: {
            type: String,
            required: true,
        },
        clave: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model('user', userSchema);