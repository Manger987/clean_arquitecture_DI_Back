const visitaRepository = require("../../../domain/contracts/visita.repository");
class EliminarVisitas {

    borrar(id) {
        return visitaRepository.borrar(id);
    }

}
module.exports = EliminarVisitas;