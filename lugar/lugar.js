const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)


    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

        //.then(resp => {

            let location = resp.data.results[0];

            let coors = location.geometry.location;

            // console.log(resp.status);
            //console.log(JSON.stringify(resp.data,undefined,2 ));
        //})
    //     .catch(e => console.log('Error', e))

    // console.log(argv.direccion);

    return {
        direccion: location.geometry.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}
module.exports={
    getLugarLatLng
}


