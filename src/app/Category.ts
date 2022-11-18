import {model, Schema} from 'mongoose';

//criando o modelo do banco dentro do construtor Schema
export const Category = model('Category', new Schema({
  name:{
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}));

