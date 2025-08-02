import 'dotenv/config';
import express from 'express';
import routesCliente from './routes/clientes.js';
const app = express();

app.use('/cliente.js', routesCliente)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('Servidor activo en el puerto ' + PORT))
} catch(e) {
    console.log(e);

}