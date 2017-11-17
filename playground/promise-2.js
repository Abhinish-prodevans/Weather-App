var request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        debugger;
        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            }
            , (error, response, body) => {

                if (error) {
                    reject('Program is unable to connect to google servers');
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Invalid Url kindly enter a valid Address');
                } else if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                }
            });

    });
};

geocodeAddress('495452').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage) => {
 console.log(errorMessage);
})

