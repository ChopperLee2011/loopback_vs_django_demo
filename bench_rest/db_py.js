var benchrest = require('bench-rest');
var flow = {
  main:[
    {get: 'http://127.0.0.1:8000/users'}
  ]
}
var runOptions = {
  limit:10,
  iterations:1000,
  user:"admin",
  password:"password"
};

benchrest(flow,runOptions)
.on('error',function(err,ctxName){
  console.log(err);
  console.error('failed in %s with err: ',ctxName,err);})
.on('end',function(stats,errorCount){
  console.log('error count: ', errorCount);
  console.log('stats',stats);
})
