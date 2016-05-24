(function(w){
    s();
    function s() {
        var width = w.innerWidth;
        var a = width / 640;
        if(a>1) a = 1;
        if(a<0.5) a = 0.5;
        document.querySelector('html').style.fontSize = a*100+'px';
    }
    var b = ("onorientationchange" in w) ? "orientationchange": "resize";
    w.addEventListener(b, function() {
        setTimeout(function() {
            s()
        }, 1000 / 30)
    }, false)
})(window);