!function() {
    window.addEventListener('DOMContentLoaded', function() {
        const a = [];
        [].slice.call($('link')).forEach(b => {
            if (b.attributes.rel.value == 'stylesheet') {
                a.push(b);
            }
        });
        if (a.length < 4) {
            // css is nonexistent for some reason; add message to top of screen
            const c = mSanitize.createHTML(`
            <div class="nocss">
                <span style="color:red;font-size:1rem;">Warning! Some CSS was detected to be missing! This page requires CSS to be put together and will not look good without it!</span>
            </div>
            `);
            const d = document.createElement('div');
            document.body.insertBefore(d, document.body.firstElementChild);
            d.innerHTML = c;
        }
    }, {once:true})
}() ? undefined : undefined;