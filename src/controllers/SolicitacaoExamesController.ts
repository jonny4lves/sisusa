import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SolicitacaoExamesRepository } from "../repositories/SolitacaoExamesRepository";


class SolicitacaoExamesController {

    async create(request:Request,response:Response){
        const solicitacaoExamesRepository = getCustomRepository(SolicitacaoExamesRepository);
        const solicitacao = solicitacaoExamesRepository.create(request.body);

        const results = await solicitacaoExamesRepository.save(solicitacao);

        return response.status(200).send(results);
    }

}

export {SolicitacaoExamesController}