!function(){
  this.addEventListener('DOMContentLoaded',function(){
    const a = document.querySelectorAll('.tryit');
    const STORE = {
      code: {
        CSS1: mSanitize.createHTML('<style>body {background-color:black;color:white;}</style><button id="close" onclick="window.close();">Close</button><h1>Lorem ipsum</h1><p>Lorem ipsum</p>'),
        CSS2: mSanitize.createHTML('<button id="close" onclick="window.close();">Close</button><h1>Lorem ipsum</h1><p>Lorem ipsum</p>')
      }
    }
    a.forEach(b=>{
      b.addEventListener('click', function(){
        let asdas = window.open('about:blank', '_blank', 'pop');
        asdas.document.body.innerHTML = STORE.code[this.id];
      })
    })
  },{once:true})
}()?undefined:undefined;
