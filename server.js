const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

let myJason = [];  

 app.post('/greatWebService/loadData', function (req, res) {
    try {
        let myData;
        myData = JSON.stringify(req.body)

        if ( /(.*)(\"[^0-9]+\"):(.*)/g.test(myData) ) {
            res.sendStatus(404);
            return res.end();
        }
        
        const myPaso = JSON.parse( myData ); 
        for( elem in myPaso ) {
            myJason.push(myPaso[elem]);
        }
    } catch (error) {
        res.sendStatus(404);
        return res.end();
    }

    res.sendStatus(200);
 });

 app.get('/greatWebService/getEverything', function (req, res) {
        let myJSalida = {};
        if ( Object.keys(myJason).length !== 0  ) {
            let myArrayKeys = [];
            let myArrayNames = [];

            for ( key in myJason) {
                for ( koy in myJason[key]) {
                    if ( myArrayKeys.indexOf(koy) === -1 ) {
                        myArrayKeys.push(koy);
                        myArrayNames.push([]);
                        myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                    } else {
                        myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                    }
                }
            }

            myArrayKeys.forEach((item, index) => {
                myJSalida[item] =  myArrayNames[index];
            });
            res.json(myJSalida);
        } else {
            res.sendStatus(404);
            return res.end();
        }
 });

 app.get('/greatWebService/getByKey', function (req, res) {
    llave = Object.values(req.query)[0];
    let myJSalida = {};
        if ( Object.keys(myJason).length !== 0  ) {
            let myArrayKeys = [];
            let myArrayNames = [];

            for ( key in myJason) {
                for ( koy in myJason[key]) {
                    if ( koy == llave ) {
                        if ( myArrayKeys.indexOf(koy) === -1 ) {
                            myArrayKeys.push(koy);
                            myArrayNames.push([]);
                            myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                        } else {
                            myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                        }
                    }
                }
            }

            myArrayKeys.forEach((item, index) => {
                myJSalida[item] =  myArrayNames[index];
            });
            res.json(myJSalida);
        } else {
            res.sendStatus(404);
            return res.end();
        }
 });

 app.get('/greatWebService/getByKey/:keyId', function (req, res) {
    let llave=req.params.keyId;
    let myJSalida = {};
    if ( Object.keys(myJason).length !== 0  ) {
        let myArrayKeys = [];
        let myArrayNames = [];

        for ( key in myJason) {
            for ( koy in myJason[key]) {
                if ( koy == llave ) {
                    if ( myArrayKeys.indexOf(koy) === -1 ) {
                        myArrayKeys.push(koy);
                        myArrayNames.push([]);
                        myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                    } else {
                        myArrayNames[myArrayKeys.indexOf(koy)].push(myJason[key][koy]);
                    }
                }
            }
        }

        myArrayKeys.forEach((item, index) => {
            myJSalida[item] =  myArrayNames[index];
        });
        res.json(myJSalida);
    } else {
        res.sendStatus(404);
        return res.end();
    }
 });

 app.get('/greatWebService/getByValue', function (req, res) {
    valor = Object.values(req.query)[0];
    let myJSalida = {};
    if ( Object.keys(myJason).length !== 0  ) {
        let myArrayKeys = [];
        let myArrayNames = [];

        for ( key in myJason) {
            for ( koy in myJason[key]) {
                if ( myJason[key][koy] == valor ) {
                    if ( myArrayKeys.indexOf(myJason[key][koy]) === -1 ) {
                        myArrayKeys.push(myJason[key][koy]);
                        myArrayNames.push([]);
                        myArrayNames[myArrayKeys.indexOf(myJason[key][koy])].push(koy);
                    } else {
                        myArrayNames[myArrayKeys.indexOf(myJason[key][koy])].push(koy);
                    }
                }
            }
        }

        myArrayKeys.forEach((item, index) => {
            myJSalida[item] =  myArrayNames[index];
        });
        res.json(myJSalida);
    } else {
        res.sendStatus(404);
        return res.end();
    }

 });

 app.get('/greatWebService/getByValue/:myValue', function (req, res) {
    let valor=req.params.myValue;
    let myJSalida = {};
    if ( Object.keys(myJason).length !== 0  ) {
        let myArrayKeys = [];
        let myArrayNames = [];

        for ( key in myJason) {
            for ( koy in myJason[key]) {
                if ( myJason[key][koy] == valor ) {
                    if ( myArrayKeys.indexOf(myJason[key][koy]) === -1 ) {
                        myArrayKeys.push(myJason[key][koy]);
                        myArrayNames.push([]);
                        myArrayNames[myArrayKeys.indexOf(myJason[key][koy])].push(koy);
                    } else {
                        myArrayNames[myArrayKeys.indexOf(myJason[key][koy])].push(koy);
                    }
                }
            }
        }

        myArrayKeys.forEach((item, index) => {
            myJSalida[item] =  myArrayNames[index];
        });
        res.json(myJSalida);
    } else {
        res.sendStatus(404);
        return res.end();
    }
 });


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})