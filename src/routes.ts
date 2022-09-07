import {Router} from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvaliableController } from './modules/deliveries/useCases/findAllAvaliable/FindAllAvaliableController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';

import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvaliableController = new FindAllAvaliableController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.get('/', (resquest, response) => {
    return response.json({message: "r"});
})

routes.post("/client/", createClientController.handle);

routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);

routes.get("/delivery/avaliable",ensureAuthenticateDeliveryman, findAllAvaliableController.handle);

routes.put("/delivery/updateDeliveryman/:id",ensureAuthenticateDeliveryman, updateDeliverymanController.handle)



export{routes}
