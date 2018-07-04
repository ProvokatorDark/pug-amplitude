/**
 * Created by ProvokatorDark on 03.07.2018.
 */
require("./scss/foundation.min.scss");
require("./scss/main.scss");
const playlist = require('./playlist');

var Amplitude = require('amplitudejs');


document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById("amplitude-right").innerHTML = templateHtml;
    Amplitude.init({
        "songs": playlist
    });
});

exports.Amplitude = Amplitude;
