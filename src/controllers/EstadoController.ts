import { Request, Response } from "express";
import { getCustomRepository, Like } from "typeorm";
import { Pagination } from "../models/Pagination";
import { EstadoRepository } from "../repositories/EstadoRepository";
class EstadoController {
  async create(request: Request, response: Response) {
    const { descricao, sigla } = request.body;
    const estadoRepository = getCustomRepository(EstadoRepository);

    const estado = estadoRepository.create({
      descricao,
      sigla,
    });

    await estadoRepository.save(estado);

    return response.status(200).json(estado);
  }

  async read(request: Request, response: Response) {
    const estadoRepository = getCustomRepository(EstadoRepository);

    const estados = await estadoRepository.find();

    return response.status(200).json(estados);
  }

  async readById(request: Request, response: Response) {
    const { id } = request.params;
    const estadoRepository = getCustomRepository(EstadoRepository);

    const estado = await estadoRepository.findOne(id);

    return response.status(200).json(estado);
  }

  async update(request: Request, response: Response) {
    const { id, descricao, sigla } = request.body;
    const estadoRepository = getCustomRepository(EstadoRepository);

    await estadoRepository.update({ id }, { descricao, sigla });

    return response.status(200).json({ message: "atualizado com sucesso" });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const estadoRepository = getCustomRepository(EstadoRepository);

    await estadoRepository.delete(id);

    return response.status(200).json({ message: "Excluido com sucesso" });
  }

  async findByDescricaoOrSigla(request: Request, response: Response) {
    const estadoRepository = getCustomRepository(EstadoRepository);

    request.body.filtro.descricao == undefined
      ? (request.body.filtro.descricao = "")
      : request.body.filtro.descricao;
    request.body.filtro.sigla == undefined
      ? (request.body.filtro.sigla = "")
      : request.body.filtro.sigla;

    const estado = await estadoRepository.find({
      where: [
        {
          descricao: Like("%" + request.body.filtro.descricao + "%"),
          sigla: Like("%" + request.body.filtro.sigla + "%"),
        },
      ],
      order: {
        descricao: request.body.pageable.order,
      },
      skip: request.body.pageable.skip,
      take: request.body.pageable.take,
      cache: true,
    });

    const page = new Pagination();
    page.data = estado;
    page.page = request.body.pageable.skip;
    page.totalPages =
      (await estadoRepository.count()) / request.body.pageable.take;
    page.totalPages = Math.ceil(page.totalPages);
    page.order = request.body.pageable.order;

    return response.status(200).json(page);
  }
}

export { EstadoController };
