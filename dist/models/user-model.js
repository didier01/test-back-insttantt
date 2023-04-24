"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    documentType: { type: String },
    documentNumber: { type: Number },
    firstname: { type: String, required: [true, 'El nombre es obligatorio'] },
    lastname: { type: String },
    birthdate: { type: Date },
    expeditionDate: { type: Date },
    phoneNumber: { type: Number },
    country: { type: String },
    city: { type: String },
    address: { type: String },
    photoProfile: { type: String },
});
exports.default = mongoose_1.model('UserModel', userSchema);
//# sourceMappingURL=user-model.js.map