import userModel from '../models/userModel.js';
import bcryp from 'bcryptjs';

class userController {
    constructor(){

    }

    async register(req,res){
        try {

            const { email, nombre, telefono, clave} =  req.body;

            const userExist = await userModel.getOne({email});
            if(userExist) {
                return res.status(400).json({error: 'El usuario ya existe'})
            }
            const hashPass = await bcryp.hash(clave,10);


            const data = await userModel.create({
                email,
                nombre,
                telefono,
                clave : hashPass

            });
            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}

export default new userController();