import { Router } from "express";
import { CidadeController } from "./controllers/CidadeController";
import { EspecialidadeController } from "./controllers/EspecialidadeController";
import { EstadoController } from "./controllers/EstadoController";

const router = Router();

const estadoController = new EstadoController();
const cidadeController = new CidadeController();
const especialidadeController = new EspecialidadeController();

//ROTAS PARA ESTADO
router.post("/estado",estadoController.create);
router.get("/estado",estadoController.read);
router.get("/estado/:id",estadoController.readById);
router.put("/estado",estadoController.update);
router.delete("/estado/:id",estadoController.delete);

//ROTAS PARA CIDADE
router.post("/cidade",cidadeController.create);
router.get("/cidade",cidadeController.read);
router.get("/cidade/:id",cidadeController.readById);
router.put("/cidade",cidadeController.update);
router.delete("/cidade/:id",cidadeController.delete);

//ROTAS PARA ESPECIALIDADE

router.post("/especialidade",especialidadeController.create);
router.get("/especialidade",especialidadeController.read);
router.get("/especialidade/:id",especialidadeController.readById);
router.put("/especialidade",especialidadeController.update);
router.delete("/especialidade/:id",especialidadeController.delete);

export {router};