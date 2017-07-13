var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7960c1b1b4718b05110e495c2f37e1ac&units=imperial';
// key 7960c1b1b4718b05110e495c2f37e1ac

module.exports = {
    getTemp: function(location) {

        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            //debugger;
            if (res.data.cod && res.data.message) {
                console.log('test1');
                throw new Error(res.data.message);
            } else {
                //console.log('jario');
                console.log(res.data);
                return res.data.main.temp;
            }
            // older Axios way         
            // }, function(res) {
            //     throw new Error(res.data.message);
        }, function(err) {
            console.log('test2');
            throw new Error('Unable to fetch weather for that location');
        });

    }
};