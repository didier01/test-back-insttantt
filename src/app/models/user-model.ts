
import { Schema, model, connect } from 'mongoose';

 const userSchema = new Schema({
    email: { type: String, required: true , unique: true},
    documentType: { type: String},
    documentNumber: { type: Number},
    firstname: { type: String, required: [true,'El nombre es obligatorio'] },
    lastname: { type: String},
    birthdate: { type: Date},
    expeditionDate: { type: Date},
    phoneNumber: { type: Number},
    country: { type: String},
    city: { type: String},
    address: { type: String},
    photoProfile: { type: String},
  });

  export default model('UserModel', userSchema)
