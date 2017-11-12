const request = require ('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);


    request ({url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true }
        ,(error,response,body) => {

            if(error){
                console.log('Program is unable to connect to google servers');
            }else if (body.status ==='ZERO_RESULTS'){
                console.log('Invalid Url kindly enter a valid Address');
            }else if (body.status === 'OK'){
                callback(undefined, {
                    address : body.results[0].formatted_address,
                    Latitude : body.results[0].geometry.location.lat,
                    Longitude : body.results[0].geometry.location.lng
                })

                /*/!*console.log(JSON.stringify(body,undefined,2));*!/
                console.log(`Address: ${}`);
                console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
                console.log(`Longitude : ${body.results[0].geometry.location.lng}`);*/
            }
            geocodeWeather(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng)
        });


}

var geocodeWeather =(latitude,longitude) =>{

    request({
        url : `https://api.darksky.net/forecast/3084fb1d94753a8ddef8ec0b268d537f/${latitude},${longitude}`,
        json: true
    },(error,response,body) =>{
        if(error){
            console.log('Location not found');
        }else{
         console.log( `Temperature : ${body.currently.temperature}`)
        }

    })

}

module.exports = {
    geocodeAddress,
    geocodeWeather
}