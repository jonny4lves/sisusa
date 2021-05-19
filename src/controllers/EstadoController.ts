import { Request, Response,  } from 'express';
import { getCustomRepository } from 'typeorm';
import { EstadoRepository } from '../repositories/EstadoRepository';
class EstadoController{

    async create(request: Request, response: Response){
        const{descricao, sigla} = request.body;
        const estadoRepository = getCustomRepository(EstadoRepository);

        const estado = estadoRepository.create({
            descricao, sigla,
        })

        await estadoRepository.save(estado);

        return response.status(200).json(estado)
    }

    async read (request: Request, response: Response){
        const estadoRepository = getCustomRepository(EstadoRepository);

        const estados = await estadoRepository.find();

        return response.status(200).json(estados);

    }

    async readById (request: Request, response: Response){
        const {id} = request.params;
        const estadoRepository = getCustomRepository(EstadoRepository);

        const estado = await estadoRepository.findOne(id);

        return response.status(200).json(estado);

    }

    async update(request: Request, response: Response){
        const {id,descricao,sigla} = request.body;
        const estadoRepository = getCustomRepository(EstadoRepository);

        await estadoRepository.update({id},{descricao,sigla});

        return response.status(200).json({"message":"atualizado com sucesso"});
    }

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const estadoRepository = getCustomRepository(EstadoRepository);

        await estadoRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }
}

export {EstadoController};