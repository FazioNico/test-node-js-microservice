const express = require('express')
const http = require('http')
var cors = require('cors')

const app = express()

const requestAPI = (req, res)=> {
  http.get('http://www.colr.org/json/color/random', (response) => {
    let data = '';
    // A chunk of data has been recieved.
    response.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log('respons--->', data);
      res.status(200).json(JSON.parse(data))
    });
  }).on("error", (err) => {
    console.log("Error Request to http://www.colr.org: " + err.message);
  });
};


app
  .use(cors())
  .get('/', (req, res)=> {
    console.log({"msg": "Hello Color API"});
    res.status(200).json({"msg": "Hello Color API"})
  })
  .get('/colorapi', (req, res)=> {
    res.status(200).json({msg: 'foo 2'})
  })
  .get('/colorapi/test', (req, res)=> {
    res.status(200).json({msg: 'foo 2 test'})
  })
  .get('/colorapi/random-color', requestAPI)
  .use((err, req, res, next) =>{
    console.log(err);
    res.status(500).json({code:500, data:err, message:'Error Server'});
  })
  .listen(3002, ()=> {
    console.log('Example app listening on port 3002!')
  });
