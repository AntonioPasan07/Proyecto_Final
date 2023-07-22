const router = require("express").Router();
const eventoControllers = require("../controllers/eventos");
const { authorizer } = require("../middlewares");

module.exports = (db) => {
  router.post("/", authorizer(false), eventoControllers.postEvento(db));
  router.get("/:id", authorizer(), eventoControllers.getEventos(db));
  return router;
};
