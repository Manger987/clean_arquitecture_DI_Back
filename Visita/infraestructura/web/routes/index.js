const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ VisitaRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(compression());

    apiRoute.use("/visita", VisitaRoutes);
    router.use("/api", apiRoute);

    return router;
};
