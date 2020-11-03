const { Router } = require('express');

module.exports = function({ VisitaController }) {
    const router = Router();

    router.get('/',VisitaController.getToken.bind(VisitaController), VisitaController.getVisitas.bind(VisitaController))
    router.get('/:id', VisitaController.getVisitaPorId.bind(VisitaController))
    router.get('/delete/:id', VisitaController.eliminarVisitaPorId.bind(VisitaController))
    router.post('/', VisitaController.agregarVisita.bind(VisitaController))

    return router;
}