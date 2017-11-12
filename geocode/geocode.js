const request = require ('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    debugger;
    request ({url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true }
        , (error,response,body) => {

            if(error){
                console.log('Program is unable to connect to google servers');
            }else if (body.status ==='ZERO_RESULTS'){
                console.log('Invalid Url kindly enter a valid Address');
            }else if (body.status === 'OK'){
                callback(undefined, {
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                })

                /*/!*console.log(JSON.stringify(body,undefined,2));*!/
                console.log(`Address: ${}`);
                console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
                console.log(`Longitude : ${body.results[0].geometry.location.lng}`);*/
            }
        });


}

module.exports = {
    geocodeAddress
};