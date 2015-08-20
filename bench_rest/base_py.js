var benchrest = require('bench-rest');
var flow = 'http://localhost:8000';

var runOptions = {
  limit:10,
  iterations:1000
};

benchrest(flow,runOptions)
.on('error',function(err,ctxName){
  // console.error('failed in %s with err: ',ctxName,err);
})
.on('end',function(stats,errorCount){
  console.log('error count: ', errorCount);
  console.log('stats',stats);
})
