!function(){
  const a = this.trustedTypes.createPolicy('escape', {
    createHTML: (a) => a
  });
  window.mSanitize = a;
}()?undefined:undefined
