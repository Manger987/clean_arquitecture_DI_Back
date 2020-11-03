const visitaRepository = require("../../../domain/contracts/visita.repository");
class ObtenerVisitasPorId {
    constructor(){
        // this._VisitaRepository = VisitaRepository;
    }

    getVisitasPorId(id) {
        return visitaRepository.visitaPorId(id);
    }

}
module.exports = ObtenerVisitasPorId;