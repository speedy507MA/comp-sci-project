!function(){
    window.reportError = function (i, e) {
        const c = {
            "TYPE": TypeError,
            "REFERENCE": ReferenceError,
            "GENERIC": Error,
            "SYNTAX": SyntaxError
        };
        if (c[e]) {
            if (typeof(i)=='object') {
                if (i['FRIENDLY']) {
                    throw new c[e](i['FRIENDLY']);
                } else if (i['UNFRIENDLY']) {
                    console.warn('Refrain from throwing unfriendly errors.');
                    throw new c[e](i['UNFRIENDLY'])
                } else {
                    throw new c['SYNTAX']('FATAL: REPORTED ERROR DOES NOT EXIST.');
                }
            } else {
                throw new c['SYNTAX']('FATAL: NOT PROVIDED WITH ERROR.')
            }
        } else if (typeof(i)=='object') {
            if (i['FRIENDLY']) {
                throw new c['GENERIC'](i['FRIENDLY']);
            } else if (i['UNFRIENDLY']) {
                console.warn('Refrain from throwing unfriendly errors.');
                throw new c['GENERIC'](i['UNFRIENDLY']);
            } else {
                throw new c['SYNTAX']('FATAL: REPORTED ERROR DOES NOT EXIST.');
            }
        } else {
            throw new c['SYNTAX']('FATAL: NOT PROVIDED WITH ERROR.')
        }
    }
}()?undefined:undefined