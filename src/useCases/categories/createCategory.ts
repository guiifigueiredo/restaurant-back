import {Request, Response} from 'express';
import {Category} from '../../app/Category';

//definindo o tipo da requisicao e da resposta
export async function createCategory(req: Request, res: Response){
  try{
    //pega os dados do corpo da requisicao
    const { name, icon} = req.body;
    const category = await Category.create({ name, icon});

    return res.json(category);
  } catch (error){
    console.log(error);
    return res.sendStatus(500);
  }

}
