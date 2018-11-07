var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

 

  var options = {
    url: 'https://d.la3-c1-dfw.salesforceliveagent.com/chat/rest/Visitor/Availability?Availability.ids=[57346000000c7hs]&deployment_id=57246000000c6am&org_id=00D460000010shv&version=36',
    headers: {
      'X-LIVEAGENT-API-VERSION': '44'
    }
  };
  
request(options, (err, response, body) => {
  if (err) { return console.log(err); }
  
  var rets = JSON.parse(body);
  console.log('stats', rets.messages[0].message.results[0].isAvailable);
  var retstatus = 'UNAVAILABLE';
  if(rets.messages[0].message.results[0].isAvailable){retstatus = 'AVAILABLE'};
  
  res.send(retstatus);
});
 
});

module.exports = router;
