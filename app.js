

//se usa la funcion options cuando no pasaremos ningun command a la aplicacion o sea directamente pasaremos los parametros asignados
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion  de la ciudad',
        demand: true
    }
}).argv

let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let clima = await clima.getClima(coors.lat, coors.lng)
    
        return `El clima en ${coors.direccion} es de ${temp}`;

    }catch(e){
        return `No se pudo determinar el clima para ese lugar`
    }
    
    




}

/**
 * ESTO SE VUELVE INNECESARIO UTILIZANDO LA FUNCION DE ARRIBA CON ASYNC AWAIT
 */
// lugar.getLugarLatLng(argv.direccion)
// .then(resp=>{
//     console.log(resp);  
// })
// .catch(e=>console.log(e))


// clima.getClima(lat,lng).then(temp=> console.log(temp)).catch(e=>console.log(e))

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(e))