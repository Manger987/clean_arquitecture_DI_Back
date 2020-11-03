const { ObtenerVisitas, ObtenerVisitasPorId, AgregarVisita, EliminarVisita } = require("../../application/use_cases");

class VisitaController {
    constructor() {
        // this._VisitaRepository = VisitaRepository;
        this._ObtenerVisitas = new ObtenerVisitas;
        this._ObtenerVisitasPorId = new ObtenerVisitasPorId;
        this._AgregarVisita = new AgregarVisita;
        this._EliminarVisita = new EliminarVisita;
    }

    async getVisitas(req, res) {
        try {
            return res.send(await this._ObtenerVisitas.getVisitas());
        } catch (err) {
            console.log("Error in getVisitas: ", err);
        }
    }

    async getVisitaPorId(req, res) {
        try {
            let id = req.params.id;
            return res.send(await this._ObtenerVisitasPorId.getVisitasPorId(id));
        } catch (err) {
            console.log("Error in getVisitaPorId: ", err);
        }
    }

    async agregarVisita(req, res) {
        try {
            const visita = req.body;
            return res.send(await this._AgregarVisita.agregarVisita(visita));
        } catch (err) {
            console.log("Error in agregarVisita: ", err);
        }
    }

    async eliminarVisitaPorId(req, res) {
        try {
            console.log("CONTROL DELETE");
            let id = req.params.id;
            return res.send(await this._EliminarVisita.borrar(id));
        } catch (err) {
            console.log("Error in getVisitaPorId: ", err);
        }
    }

    async getToken(req, res, next) {
        console.log("TOKEN!!!");
        next();
    }
}

module.exports = VisitaController;