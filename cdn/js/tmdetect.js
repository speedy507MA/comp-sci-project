!function(){
    window.addEventListener('DOMContentLoaded', function(){
        const L_LOG = [];
        if ($('.theme').length) {
            let a = $('.theme')[0];
            let b = a.style;
            if (b.content) {

            } else {
                reportError()
            }
        } else {
            let a = {
                "FRIENDLY": "Unable to find element of class: \"theme\".",
                "UNFRIENDLY": ".theme unavailable"
            }
            L_LOG.push(a);
            reportError(a, 'REFERENCE');
        }
    }, {once:true})
}()?undefined:undefined;