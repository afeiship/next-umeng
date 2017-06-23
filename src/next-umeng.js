(function () {

  var global = global || window || this;
  var nx = global.nx || require('next-js-core2');
  var Q  = require('q');


  var NxUmeng = nx.declare('nx.Umeng', {
    methods:{
      init: function(){
        if(!global.dplus){
          nx.error('Dplus must be import.');
        }
      },
      track: function(inName, inProps, inCallback, inTimeout){
        global.dplus.track(inName, inProps, inCallback, inTimeout);
      },
      trackLinks: function (inSelector , inName , inProps, inTimeout){
        global.dplus.track_links(inSelector , inName , inProps, inTimeout);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUmeng;
  }

}());
