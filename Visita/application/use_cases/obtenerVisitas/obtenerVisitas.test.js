const { ObtenerVisitas } = require("../../use_cases");

this._ObtenerVisitas = new ObtenerVisitas;
const expectative = [{"cliente_id": 23, "fecha": "2020-10-28 15:15:17", "fecha2": "2020-10-31 14:15:17", "fecha3": "2020-11-02 16:30:17", "id": 1}, {"cliente_id": 33, "fecha": "2020-11-08 15:15:17", "fecha2": "2020-11-01 14:15:17", "fecha3": "2020-11-23 16:30:17", "id": 2}, {"cliente_id": 43, "fecha": "2020-11-24 15:15:17", "fecha2": "2020-11-25 14:15:17", "fecha3": "2020-11-26 16:30:17", "id": 3}];
test('obtenerVisitar', () => {
    expect(this._ObtenerVisitas.getVisitas()).toStrictEqual(expectative);
});