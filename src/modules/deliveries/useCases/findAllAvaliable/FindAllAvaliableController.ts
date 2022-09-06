import { Request, Response } from "express";
import { FindAllAvaliableUseCase } from "./FindAllAvaliableUseCase";



export class FindAllAvaliableController{
    async handle(request: Request, response: Response): Promise<Response>{
        
         const findAllAvaliableUseCase = new FindAllAvaliableUseCase();

         const deliveries = await findAllAvaliableUseCase.execute();

         return response.json(deliveries);


    }
}