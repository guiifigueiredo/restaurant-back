import {Request, Response} from 'express';
import {Product} from '../../app/Product';

//definindo o tipo da requicao e da resposta
export async function listProduct(req: Request, res: Response){
  try{
    const products = await Product.find();
    res.json(products).sendStatus(201);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
