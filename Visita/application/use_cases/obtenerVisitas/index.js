const visitaRepository = require("../../../domain/contracts/visita.repository");
class ObtenerVisitas {
    constructor(){
        // this._VisitaRepository = VisitaRepository;
    }

    getVisitas() {
        return visitaRepository.todasVisitas();
    }

}
module.exports = ObtenerVisitas;
// module.exports = function(VisitaRepository) {
//     console.log("CU");
//     // this._VisitaRepository = VisitaRepository.bind(VisitaRepository)//.getAll.bind(VisitaRepository);
//     return VisitaRepository.getAll();//.bind(VisitaRepository);//_VisitaRepository.getAll());
// }