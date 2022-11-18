import {model, Schema} from 'mongoose';

//criando o modelo do banco dentro do construtor Schema
export const Order = model('Order', new Schema({
  table:{
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAINTING', 'IN_PRODUCTION', 'DONE'],
    //define o valor padrao
    default: 'WAINTING'
  },
  createdAT: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
}));

