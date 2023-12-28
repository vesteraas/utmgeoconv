# Geographic/UTM Coordinate Converter

With this library, you can convert between geographic coordinates and Universal Transverse Mercator (UTM) coordinates, and the other way around.

Usage:

```javascript
var utmgeoconv = require('utmgeoconv');

console.log(utmgeoconv.latLonToUtm(59.10776931, 11.40488332, 32)); // { x: 637715, y: 6554533 }
console.log(utmgeoconv.utmToLatLon(32, 'n', 637715, 6554533)); // { lat: 59.107769, lon: 11.404883 }
```
The library is using the unmodified source code* found in the [Chuck Taylor Toolbox]([http://home.hiwaay.net/~taylorc/toolbox/geography/geoutm.html](https://web.archive.org/web/20151229223546/https://home.hiwaay.net/~taylorc/toolbox/geography/geoutm.html)) which clearly states :

***Programmers: The JavaScript source code in this document may be copied and reused without restriction.***

*Except for some formatting and additional JavaScript-code to make it a Node module. 
