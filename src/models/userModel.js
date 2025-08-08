import mongoose from 'mongoose';
import User from '../schemas/userSchema.js';

class userModel {
    async create(user){
        return await User.create(user);
    }

    async getAll(){
        return await User.find();
    }

    async getOne(filtro){
        return await User.findOne(filtro);
    }

    async update(id,user){
        return await User.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)}, user, {new: true});
    }

    async delete(id){
        return await User.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)})
    }
}

export default new userModel();