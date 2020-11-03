const { EliminarVisita } = require("../../use_cases");

this._EliminarVisita = new EliminarVisita;
const expectative = [{"cliente_id": 23, "fecha": "2020-10-28 15:15:17", "fecha2": "2020-10-31 14:15:17", "fecha3": "2020-11-02 16:30:17", "id": 1}, {"cliente_id": 33, "fecha": "2020-11-08 15:15:17", "fecha2": "2020-11-01 14:15:17", "fecha3": "2020-11-23 16:30:17", "id": 2}];
test('obtenerVisitarPorId', () => {
    expect(this._EliminarVisita.borrar(3)).toStrictEqual(expectative);
});