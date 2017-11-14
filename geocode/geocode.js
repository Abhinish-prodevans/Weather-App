const request = require ('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    debugger;
    request ({url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true }
        , (error,response,body) => {

            if(error){
                callback('Program is unable to connect to google servers');
            }else if (body.status ==='ZERO_RESULTS'){
                callback('Invalid Url kindly enter a valid Address');
            }else if (body.status === 'OK'){
                callback(undefined, {
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                })
            }
        });


}

module.exports = {
    geocodeAddress
};