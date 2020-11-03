const { AgregarVisita } = require("../../use_cases");

this._AgregarVisita = new AgregarVisita;
const visita = { fecha: '2020-11-25 15:15:17', fecha2: '2020-11-26 16:15:17', fecha3: '2020-11-27 17:15:17', cliente_id: 55 };
const expectative =  [{id: 1,fecha: '2020-10-28 15:15:17',fecha2: '2020-10-31 14:15:17',fecha3: '2020-11-02 16:30:17',cliente_id: 23},{id: 2,fecha: '2020-11-08 15:15:17',fecha2: '2020-11-01 14:15:17',fecha3: '2020-11-23 16:30:17',cliente_id: 33},{id: 3,fecha: '2020-11-24 15:15:17',fecha2: '2020-11-25 14:15:17',fecha3: '2020-11-26 16:30:17',cliente_id: 43},{fecha: '2020-11-25 15:15:17',fecha2: '2020-11-26 16:15:17',fecha3: '2020-11-27 17:15:17',cliente_id: 55,id: 4}];
test('agregarVisitar', () => {
    expect(this._AgregarVisita.agregarVisita(visita)).toStrictEqual(expectative);
});