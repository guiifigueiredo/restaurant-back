import {Request, Response} from 'express';
import {Category} from '../../app/Category';

//definindo o tipo da requicao e da resposta
export async function createCategory(req: Request, res: Response){
  const { name, icon} = req.body;
  const category = await Category.create({ name, icon});

  return res.json(category);
}
