var utmgeoconv = require('../index');

console.log(utmgeoconv.latLonToUtm(59.10776931, 11.40488332, 32));
console.log(utmgeoconv.utmToLatLon(32, 'n', 637715, 6554533));