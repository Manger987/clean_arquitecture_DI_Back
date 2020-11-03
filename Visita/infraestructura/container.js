/**
 * IoC (PATRON DE DISEÑO)
 */

const { asClass, createContainer, asFunction, asValue } = require("awilix");
const StartUp = require("../../config/system/startup");
const Server = require("../../config/system/server");

const Routes = require("./web/routes");
const config = require("../../config/environments");

const { VisitaController } = require('./controllers');
const VisitaRoutes = require('./web/routes/visita.routes');
// const VisitaRepository = require('../domain/contracts/visita.repository').borrar;
const { VisitaEntity } = require("../domain/entities");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    VisitaEntity: asClass(VisitaEntity),
  })
  .register({
    VisitaRoutes: asFunction(VisitaRoutes).singleton()
  })
  .register({
    VisitaController: asClass(VisitaController).singleton(), //singleton(Unica Instancia).
  })
  
module.exports = container;