import {model, Schema} from 'mongoose';

//criando o modelo do banco dentro do construtor Schema
export const Product = model('Product', new Schema({
  name:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  imagePath:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  ingredients: {
    required: true,
    type: [{
      name:{
        type: String,
        required: true,
      },
      icon:{
        type: String,
        required: true,
      }
    }],
    //conecta com o id de outra collection
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    }
  }
}));

