!function(){
    window.addEventListener('DOMContentLoaded', function(){
        const L_LOG = [];
        if ($('.theme').length) {
            let a = $('.theme')[0];
            let b = this.getComputedStyle(a);
            if (b.content) {
                if (b.content=='\"light\"') {
                    this.window.location.replace('light.html')
                } else {
                    this.window.location.replace('dark.html')
                }
            } else {
                reportError({
                    "FRIENDLY": `Element "THEME" has no CSS value for content.`,
                    "UNFRIENDLY": "No content for theme"
                })
                this.window.location.reload()
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