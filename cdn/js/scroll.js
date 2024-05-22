!function(){
  window.addEventListener('DOMContentLoaded', function(){
    let a = document.querySelectorAll('.appear');
    let b = function(entries) {
        entries.forEach(entry=>{
            if (entry.isIntersecting) {
                entry.target.classList.add('inview')
            } else {
                entry.target.classList.remove('inview')
            }
        })
    }
    let c = new IntersectionObserver(b);
    a.forEach(d=>{
        c.observe(d)
    })
  }, {once:true})
}();