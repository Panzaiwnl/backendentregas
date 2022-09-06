import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {prisma} from "../../../database/PrismaClient"

interface IAuthenticateDeliveryman{
    username: string;
    password: string;
}


export class AuthenticateDeliverymanUseCase{
    async execute({username, password}: IAuthenticateDeliveryman){
        const deliveryman = await prisma.deliveryman.findFirst({
            where:{
                username
                
            }
        });


        if(!deliveryman){
            throw new Error("username or password invalid!!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch){
            throw new Error("username or password invalid!!");
        }

        const token = sign({username}, "016c1767eb229c41a5670ae626ac934a8", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return token;

    }
}