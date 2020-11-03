const visitaRepository = require("../../../domain/contracts/visita.repository");
const Visita = require("../../../domain/entities/visita.entity");
class AgregarVisita {
    constructor(){
        // this._VisitaRepository = VisitaRepository;
    }

    agregarVisita(visita) {
        const {fecha, fecha2, fecha3, cliente_id} = visita;
        // const VistaFormat = new Visita(fecha, fecha2, fecha3, cliente_id);
        return visitaRepository.agregar({fecha, fecha2, fecha3, cliente_id});
    }

}
module.exports = AgregarVisita;