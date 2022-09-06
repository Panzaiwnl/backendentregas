import { Request, response, Response} from "express";
import { CreateClienteUseCase } from "./CreateClienteUseCase";



export class CreateClientController{
   async handle(request:Request, Response:Response){
    const{username, password} = request.body;

    const createClientUseCase = new CreateClienteUseCase();
    const result = await createClientUseCase.execute({
        username,
        password
    })

    return response.json(result);
    


    }

}