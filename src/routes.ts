import { Router } from "express";
import { CidadeController } from "./controllers/CidadeController";
import { EstadoController } from "./controllers/EstadoController";

const router = Router();

const estadoController = new EstadoController();
const cidadeController = new CidadeController();

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


export {router};