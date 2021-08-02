import { getCustomRepository, Like } from "typeorm";
import { Request, Response } from "express";
import { CidadeRepository } from "../repositories/CidadeRepository";
import { Pagination } from "../models/Pagination";

class CidadeController {
  async create(request: Request, response: Response) {
    const { descricao, estado } = request.body;
    const cidadeRepository = getCustomRepository(CidadeRepository);

    const cidade = cidadeRepository.create({
      descricao,
      estado,
    });

    await cidadeRepository.save(cidade);

    return response.status(200).json(cidade.id);
  }

  async read(request: Request, response: Response) {
    const cidadeRepository = getCustomRepository(CidadeRepository);

    const cidades = await cidadeRepository.find({ relations: ["estado"] });

    return response.status(200).json(cidades);
  }

  async readById(request: Request, response: Response) {
    const cidadeRepository = getCustomRepository(CidadeRepository);
    const { id } = request.params;

    const cidade = await cidadeRepository.findOne(id, {
      relations: ["estado"],
    });

    return response.status(200).json(cidade);
  }

  async update(request: Request, response: Response) {
    const cidadeRepository = getCustomRepository(CidadeRepository);
    const { id, descricao, estado } = request.body;

    await cidadeRepository.update({ id }, { descricao, estado });

    return response.status(200).json({ message: "Atualizado com sucesso" });
  }

  async delete(request: Request, response: Response) {
    const cidadeRepository = getCustomRepository(CidadeRepository);

    const { id } = request.params;

    await cidadeRepository.delete(id);

    return response.status(200).json({ message: "Excluído com sucesso" });
  }

  async filter(request: Request, response: Response) {
    request.body.filtro.descricao == undefined
      ? (request.body.filtro.descricao = "")
      : request.body.filtro.descricao;
    request.body.filtro.sigla == undefined
      ? (request.body.filtro.sigla = "")
      : request.body.filtro.sigla;

    const cidades = await getCustomRepository(CidadeRepository)
      .createQueryBuilder("cidade")
      .leftJoinAndSelect("cidade.estado", "cidade_estado")
      .where("cidade.descricao like :descricao", {
        descricao: `%${request.body.filtro.descricao}%`,
      })
      .andWhere("cidade_estado.sigla like :sigla", {
        sigla: `%${request.body.filtro.sigla}%`,
      })
      .orderBy(request.body.pageable.campo, request.body.pageable.order)
      .take(request.body.pageable.take)
      .skip(request.body.pageable.take * request.body.pageable.skip)
      .getMany();

    const page = new Pagination();
    page.data = cidades;
    page.page = request.body.pageable.skip;
    page.campo = request.body.campo;
    page.totalPages = await getCustomRepository(CidadeRepository)
      .createQueryBuilder("cidade")
      .leftJoinAndSelect("cidade.estado", "cidade_estado")
      .where("cidade.descricao like :descricao", {
        descricao: `%${request.body.filtro.descricao}%`,
      })
      .andWhere("cidade_estado.sigla like :sigla", {
        sigla: `%${request.body.filtro.sigla}%`,
      })
      .getCount();
    page.totalPages = Math.ceil(page.totalPages / request.body.pageable.take);
    page.order = request.body.pageable.order;

    return response.status(200).json(page);
  }
}

export { CidadeController };
