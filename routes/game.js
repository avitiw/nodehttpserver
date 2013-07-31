var board = 
[ ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']];
  
   
  
  exports.board = function(req, res){
	var boardStr = JSON.stringify(board);
	console.log("got board");	
	res.writeHead(200, { 'Content-Type': 'application/json' });  
	 res.write(boardStr);
	res.end();	
};