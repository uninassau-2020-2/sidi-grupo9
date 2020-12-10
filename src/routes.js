import { Router } from 'express';

import UserControlller from './app/controllers/UserController';
import SessionControlller from './app/controllers/SessionController';
import UserProfileContoller from './app/controllers/UserProfileContoller';
import ProductController from './app/controllers/ProductController';
import ProviderController from './app/controllers/ProviderController';
import ContactController from './app/controllers/ContactController';
import FormPaymentController from './app/controllers/FormPaymentController';
import OrderController from './app/controllers/OrderController';
import ProductOrderController from './app/controllers/ProductOrderController';
import CategoryController from './app/controllers/CategoryController';
import authMiddleware from './app/middlewares/middleware-auth';
import corsMiddleware from './app/middlewares/middleware-cors';

const routes = new Router();
//routes.use(corsMiddleware);
routes.post('/users', UserControlller.store);
routes.post('/sessions', SessionControlller.store);

// Tudo que vier depois estará usando o middleware de authMiddleware
//routes.use(authMiddleware);


routes.put('/users', UserControlller.update);

routes.put('/userProfile', UserProfileContoller.update);
routes.post('/userProfile', UserProfileContoller.store);

routes.post('/product', ProductController.store);
routes.put('/product', ProductController.update);
routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.index);

routes.post('/provider', ProviderController.store);
routes.put('/provider/:id', ProviderController.update);
routes.get('/provider/:id', ProviderController.index);
routes.get('/provider', ProviderController.index);
routes.delete('/provider/:id', ProviderController.delete);

routes.post('/contact', ContactController.store);
routes.put('/contact/:id', ContactController.update);
routes.get('/contact/:id', ContactController.index);
routes.get('/contact', ContactController.index);

routes.post('/formPayment', FormPaymentController.store);
routes.put('/formPayment', FormPaymentController.update);
routes.get('/formPayment', FormPaymentController.index);
routes.delete('/formPayment/:id', FormPaymentController.delete);

routes.post('/order', OrderController.store);
routes.put('/order', OrderController.update);
routes.get('/order', OrderController.index);
routes.get('/order/:id', OrderController.index);

routes.post('/productOrder', ProductOrderController.store);
routes.put('/productOrder', ProductOrderController.update);

routes.post('/category', CategoryController.store);
routes.put('/category', CategoryController.update);
routes.get('/category', CategoryController.index);
routes.get('/category/:id', CategoryController.index);

export default routes;
