var express = require('express');
var router = express.Router();

//router.use('path', ...);

var http = require('http');
var bodyParser= require('body-parser');
var app = express();

app.set('port',process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//첫 번째 미들웨어
app.use(function(req, res, next) {

    console.log('첫 번째 미들웨어 호출');
    var figure2 ={'internal': 0, 'social': 0, 'external': 0, 'sensation': 0};
    
    //activity에서 받아오기
    var b = [];
    b[0] = req.body.b1;    
    b[1] = req.body.b2;
    b[2] = req.body.b3;
    b[3] = req.body.b4;
    b[4] = req.body.b5;
    b[5] = req.body.b6;
    b[6] = req.body.b7;
    b[7] = req.body.b8;
    b[8] = req.body.b9;
    b[9] = req.body.b10;
    b[10] = req.body.b11;
    b[11] = req.body.b12;
    b[12] = req.body.b13;
    b[13] = req.body.b14;
    b[14] = req.body.b15;
    b[15] = req.body.b16;
    b[16] = req.body.b17;
    b[17] = req.body.b18;
    b[18] = req.body.b19;
    b[19] = req.body.b20;
    b[20] = req.body.b21;
    b[21] = req.body.b22;
    b[22] = req.body.b23;
    b[23] = req.body.b24;
    

    for(var i=0; i < len(b); i++){
        var tmp = b[i].split(' '); //internal 1 -> 'internal', '1'
        tmp[1] *= 1;
        
        if(tmp[0].indexOf("internal"))
            figure2[0] += tmp[1];
        else if (tmp[0].indexOf("social"))
            figure2[1] += tmp[1];
        else if (tmp[0].indexOf("external"))
            figure2[2] += tmp[1];
        else
            figure2[3] += tmp[1];    
    }
    //var paramPassword = req.body.password;
    console.log('internal_2 : '+figure2[0]+'  social_2 : '+figure2[1]+'  external_2 : '+figure2[2]+'  sensation_2 : '+figure2[3]);

    res.send(figure2);

});

var server = http.createServer(app).listen(app.get('port'),function(){
   console.log("익스프레스로 웹 서버를 실행함 : "+ app.get('port')); 
});

module.exports = router;