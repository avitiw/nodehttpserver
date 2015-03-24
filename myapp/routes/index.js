var express = require('express');
var router = express.Router();
var util = require('util');
var kafka = require('kafka-node');
    

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
	//console.log(util.inspect(req.body, false, null));
	payloads = [
        { topic: 'travelRequest', 
        	messages : {
        		start : { Lat : req.body.startLat, Lng : req.body.startLng},
        		end : { Lat : req.body.endLat, Lng : req.body.endLng}
        	} 
        }         
    ];
    
    var HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client);
	 producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
	        console.log(util.inspect(data, false, null));
	    });
	});
	res.render('index',{title :"Express",data: req.body})
});
module.exports = router;
