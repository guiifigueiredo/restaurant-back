import {Request, Response} from 'express';
import {Product} from '../../app/Product';


//definindo o tipo da requisicao e da resposta
export async function createProduct(req: Request, res: Response){
  try{
    //pega os dados do corpo da requisicao
    const { name, icon} = req.body;
    const product = await Product.create({ name, icon});

    return res.json(product);
  } catch (error){
    console.log(error);
    return res.sendStatus(500);
  }

}
