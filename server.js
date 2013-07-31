
var express = require('express')
  , routes = require('./routes') 
  , http = require('http')
  , path = require('path')
  ,game = require('./routes/game');
  

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/game/chess', game.board);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/*
app.get('/game/chess',function(req,res){
	debugger;
	var boardStr = JSON.stringify(game.chessBoard());
	console.log("got board");	
	res.writeHead(200, { 'Content-Type': 'application/json' });  
	 res.write(boardStr);
	res.end();	 
});
app.post('/game/chess/move",function(req,res){
});

app.listen(3000);
*/