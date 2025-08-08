import mongoose from "mongoose";
const { Schema } = mongoose;

const clientSchema = new mongoose.Schema(
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
      type: String,
      enum: ['Pendiente', 'Pagado'],
      default: 'Pendiente'
    },
    historialPagos: [{
      type: Schema.Types.ObjectId,
      ref: 'Pago'
    }],
    facturas: [{
      type: Schema.Types.ObjectId,
      ref: 'Factura'
    }]
  }, { timestamps: true }
);

export default mongoose.model('client', clientSchema);
