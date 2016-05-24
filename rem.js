/*
* 1rem = 100px js解决方案
* */
(function(win, doc, w){
    var ev = 'onorientationchange' in window ? 'orientationchange': 'resize';
    function setFs(){
        var clientWidth = win.innerWidth;
        if(clientWidth>w) clientWidth = w;
        if(clientWidth<320) clientWidth = 320;

        doc.querySelector('html').style.fontSize = clientWidth/w*100+'px';
    }

    win.addEventListener(ev, setFs, false);
    doc.addEventListener('DOMContentLoaded', setFs, false);
})(window, document, 750);