let geoip = require('geoip-lite');

var ip = "101.231.114.44";
var geo = geoip.lookup(ip);

console.log(geo);
