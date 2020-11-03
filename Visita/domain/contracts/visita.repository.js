//ORM Working here
const fs = require('fs');
let rawdata = fs.readFileSync(__dirname + '/data_example.json', 'utf8');
const visitasPropuestas = JSON.parse(rawdata);

const todasVisitas = () => {
    return visitasPropuestas;
}

const visitaPorId = (VisitaId) => {
    return visitasPropuestas.find(visita => visita.id === parseInt(VisitaId));
}

const visitaPorCliente = async (VisitaId) => {
    return await visitasPropuestas.find(visita => visita.cliente_id === parseInt(VisitaId));
}

const agregar = (visita) => {
    visita.id = parseInt(visitasPropuestas.length + 1);
    visitasPropuestas.push(visita);
    return visitasPropuestas
}

const modificar = (visita) => {
    return visitasPropuestas.map(visitaMap => {
        if (visitaMap.id === parseInt(visita.id)) {
            visitaMap = visita;
        }
    });
}

const borrar = (VisitaId) => {
    console.log("REPOSI DELETE");
    // return "HOLA FROM REPO";
    return visitasPropuestas.filter(visita => visita.id !== parseInt(VisitaId));
}

module.exports = { todasVisitas, visitaPorId, visitaPorCliente, agregar, modificar, borrar };