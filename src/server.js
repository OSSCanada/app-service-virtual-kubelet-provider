const restify = require('restify');
const server = restify.createServer();
const port = process.env['PROVIDER_SERVER_PORT'] || 3000;

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Routes && Handlers
server.get('/', function(req, res, next){
  console.log('liveness/readiness ok');
  res.send();
});

// VK first boot - required items for "App Service Agent Node" to appear/register with K8s
server.get('/capacity', require('./endpoints/capacity'));
server.get('/nodeConditions', require('./endpoints/nodeConditions'));
server.get('/nodeAddresses', require('./endpoints/nodeAddresses'));

server.post('/createPod', require('./endpoints/createPods.js'));
server.get('/getPods', require('./endpoints/getPods'));
server.get('/getPod', require('./endpoints/getPod'));
server.get('/getPodStatus', require('./endpoints/getPodStatus'));
server.put('/updatePod', require('./endpoints/updatePod'));
server.del('/deletePod', require('./endpoints/deletePod'));
server.get('/getContainerLogs', require('./endpoints/getContainerLogs'));

server.listen(port, function(){
  console.log('%s listening at %s', server.name, server.url);
});