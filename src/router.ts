import { Router } from 'express';
import {listCategory} from './useCases/categories/listCategory';
import {createCategory} from './useCases/categories/createCategory';

export const router = Router();

//List categories
router.get('/categories', listCategory);

//Create categories
router.post('/categories', createCategory);

//List Products
router.get('/products', (req,res) => {
  res.send('ok');
});
//Create Products
router.post('/products', (req,res) => {
  res.send('ok');
});
//Get product by category
router.get('/categories/:categoriesId/products', (req,res) => {
  res.send('ok');
});
//List orders
router.get('/orders', (req,res) => {
  res.send('ok');
});
//Create Orders
router.post('/orders', (req,res) => {
  res.send('ok');
});
//Change order status
router.patch('/order/:orderId', (req, res) => {
  res.send('ok');
});

//Delete/cancel order
router.delete('/orders/:orderId', (req,res) => {
  res.send('ok');
});
