const request = require('request');

var getweather = (lat,lng,callback) => {

    request ({
        url:`https://api.darksky.net/forecast/3084fb1d94753a8ddef8ec0b268d537f/${lat},${lng}`,
        json:true
    },(error,response,body) => {
        if(error){
            callback('unable to connect to forcast.');
        }else if(response.statusCode===400){
            callback('Unable to fetch Weather.');
        }else if(response.statusCode ===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
    });
};

module.exports ={
    getweather
};