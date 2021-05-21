import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ExameRepository } from "../repositories/ExameRepository";

class ExameController{

    async create(request:Request,response:Response){
        const exameController = getCustomRepository(ExameRepository);
        const {nome} = request.body;

        const exame = exameController.create({
            nome,
        })

        await exameController.save(exame);

        return response.status(200).json(exame);
    }

    async read(request: Request, response:Response){
        const exameController = getCustomRepository(ExameRepository);

        const exames = await exameController.find();

        return response.status(200).json(exames);
    }

    async readById(request :Request, response: Response){
        const exameController = getCustomRepository(ExameRepository);
        const {id} = request.params;

        const exame = await exameController.findOne(id);

        return response.status(200).json(exame);
    }

    async update (request:Request,response:Response){
        const exameController = getCustomRepository(ExameRepository);
        const {id,nome} = request.body;
        
        await exameController.update({id},{nome});

        return response.status(200).json({"message":"Atualizado com sucesso"})
    }

    async delete(request:Request, response:Response){
        const exameController = getCustomRepository(ExameRepository);
        const {id} = request.params;

        await exameController.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }

}

export {ExameController}