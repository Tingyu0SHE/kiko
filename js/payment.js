window.addEventListener('load', function () {

    var h = 0;
    var t = 29;
    var s = 60;
    var time = setInterval(function () {
        s--;
        if (s < 0) { s = 59; t-- }
        if (t < 0) { t = 0; s = 0 }
        $(".t").html(fullZero(h) + ":" + fullZero(t) + ":" + fullZero(s))
    }, 1000)
    function fullZero(num) {
        return num < 10 ? "0" + num : num
    }
})
    