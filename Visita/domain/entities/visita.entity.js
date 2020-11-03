module.exports = class Visita {
    constructor(fecha, fecha2, fecha3, cliente_id) {
        this.id = null;
        this.fecha = fecha;
        this.fecha2 = fecha2;
        this.fecha3 = fecha3;
        this.cliente_id = parseInt(cliente_id);
    }
};
