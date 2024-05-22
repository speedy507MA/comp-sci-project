!function(){
    this.addEventListener('DOMContentLoaded', function(){
        let a = $('.nav-item');
        let b = a[0];
        let c = a[1];
        let d = a[2];

        // about
        b.addEventListener('click', function(){
            window.location.href = './about.html';
        }, {once:true});

        // dark
        c.addEventListener('click', function(){
            window.location.href = './dark.html';
        }, {once:true});

        // light
        d.addEventListener('click', function(){
            window.location.href = './light.html';
        }, {once:true});
    }, {once:true});
}()
