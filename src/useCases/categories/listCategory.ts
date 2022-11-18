import {Request, Response} from 'express';
import {Category} from '../../app/Category';
//definindo o tipo da requicao e da resposta
export async function listCategory(req: Request, res: Response){
  const categories = await Category.find();

  res.json(categories);
}
