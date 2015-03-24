var express = require('express');
var router = express.Router();
var util = require('util');
/* GET home page. */
router.get('/', function(req, res, next) {
	var reqData = {
    "startLat": 0,
    "startLng" : 0.1 ,
    "endLat":  0,
     "endLng": 2
    
	};
	console.log('in get');
  res.render('index', { title: 'Express',data : reqData });
});

router.post('/',function(req,res,next){
	console.log(util.inspect(req.body, false, null));
	 
	res.render('index',{title :"Express",data: req.body})
});
module.exports = router;
