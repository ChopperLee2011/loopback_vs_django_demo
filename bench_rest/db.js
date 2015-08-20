var benchrest = require('bench-rest');
var flow = {
  main:[
    {get: 'http://localhost:3000/api/pokemons/1?access_token=xlJDgdvqxoFOa2xbyGES53HI0frPDQdhg94O6PHU04uYpT7roN3dlrukwSdglWED'}

  ]
}
var runOptions = {
  limit:100,
  iterations:10000,
  prealloc: 100
};

benchrest(flow,runOptions)
.on('error',function(err,ctxName){ console.error('failed in %s with err: ',ctxName,err);
}).on('progress',function(stats,percent,concurrent,ips){
  console.log('Progress: %s complete',percent);
}).on('end',function(stats,errorCount){
  console.log('error count: ', errorCount);
  console.log('stats',stats);
})
