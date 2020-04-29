var express = require('express');
var router = express.Router();

console.log('trace: /api/test/test1.js');
var http = require('http');
var bodyParser= require('body-parser');
var app = express();

app.set('port',process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) { 
    req.rawBody += chunk;
  });

  next();
});
app.use(express.bodyParser());



//첫 번째 미들웨어
app.use(function(req, res, next) {

    console.log('첫 번째 미들웨어 호출');
    var figure1 ={'internal': 0, 'social': 0, 'external': 0, 'sensation': 0};
    var num = 0;
    //activity에서 받아오기
    var a = [];
    a[0] = req.body.a1;    
    a[1] = req.body.a2;
    a[2] = req.body.a3;
    a[3] = req.body.a4;
    a[4] = req.body.a5;
    a[5] = req.body.a6;
    a[6] = req.body.a7;
    a[7] = req.body.a8;
    a[8] = req.body.a9;
    a[9] = req.body.a10;
    a[10] = req.body.a11;
    a[11] = req.body.a12;
    a[12] = req.body.a13;
    a[13] = req.body.a14;
    a[14] = req.body.a15;
    a[15] = req.body.a16;
    a[16] = req.body.a17;
    a[17] = req.body.a18;
    a[18] = req.body.a19;
    a[19] = req.body.a20;
    a[20] = req.body.a21;
    a[21] = req.body.a22;
    a[22] = req.body.a23;
    a[23] = req.body.a24;
    

    for(var i=0; i < len(a); i++){
        var tmp = a[i].split(' '); //internal 1 -> 'internal', '1'
        num = tmp[1]*1;
        
        if(tmp[0].indexOf("internal"))
            figure1[0] += num;
        else if (tmp[0].indexOf("social"))
            figure1[1] += num;
        else if (tmp[0].indexOf("external"))
            figure1[2] += num;
        else
            figure1[3] += num;    
    }
    
    console.log('internal_1 : '+figure1[0]+'  social_1 : '+figure1[1]+'  external_1 : '+figure1[2]+'  sensation_1 : '+figure1[3]);

    res.send(figure1); //복수개 보내기 가능한가?

});

/*
var server = http.createServer(app).listen(app.get('port'),function(){
   console.log("익스프레스로 웹 서버를 실행함 : "+ app.get('port')); 
});
*/
module.exports = router;
