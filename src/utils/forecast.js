const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/4767b64616d2a97df70db5dde8b93c3e/${lat},${lng}`;

    
    request({ url, json: true}, (err, { body }) => {
        const { temperature, precipProbability } = body.currently;

        if (err) {
            callback('Unable to connect to weather services...', undefined);
        } else if (body.error) {
            callback('Unable to find location, please try new search...', undefined);
        } else {
            callback(undefined, `Todays Summary: ${body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast;