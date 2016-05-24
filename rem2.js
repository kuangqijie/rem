(function(doc, win){
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'orientationchange': 'resize',
        recalc = function(){
            var clientWidth = docEl.clientWidth;
            if(clientWidth>750) clientWidth = 750;
            if(clientWidth<320) clientWidth = 320;

            docEl.style.fontSize = clientWidth/750*100+'px';
        };

    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*function s() {
 var clientWidth = w.innerWidth;

 if(clientWidth>750) clientWidth = 750;
 if(clientWidth<320) clientWidth = 320;

 var s = clientWidth/750*100;

 console.log(s);
 document.querySelector('html').style.fontSize = s+'px';
 }
 var b = ("onorientationchange" in w) ? "orientationchange": "resize";
 w.addEventListener(b, function() {
 setTimeout(function() {
 s()
 }, 1000 / 30)
 }, false)*/