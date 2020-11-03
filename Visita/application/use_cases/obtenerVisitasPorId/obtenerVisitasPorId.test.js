const { ObtenerVisitasPorId } = require("../../use_cases");

this._ObtenerVisitasPorId = new ObtenerVisitasPorId;
const expectative = { id: 3, fecha: '2020-11-24 15:15:17', fecha2: '2020-11-25 14:15:17', fecha3: '2020-11-26 16:30:17', cliente_id: 43 };
test('obtenerVisitarPorId', () => {
    expect(this._ObtenerVisitasPorId.getVisitasPorId(3)).toStrictEqual(expectative);
});