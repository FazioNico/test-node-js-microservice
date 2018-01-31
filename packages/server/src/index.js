const express = require('express')
const http = require('http')
var cors = require('cors')
const app = express()

const requestAPI = (req, res )=> {
  http.get('http://colorapi:3002/colorapi/random-color', (response) => {
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
    console.log("Error requestAPI: " + err.message);
    res.status(500).json(err)
  });
};

app
  .use(cors())
  .get('/', (req, res)=> {
    console.log({"msg": "Hello World"});
    res.status(200).json({"msg": "Hello World"})
  })
  .get('/server', (req, res)=> {
    res.status(200).json({msg: 'foo 1'})
  })
  .get('/server/test', (req, res)=> {
    res.status(200).json({msg: 'foo 1 test'})
  })
  .get('/server/random-color', requestAPI)
  .use((err, req, res, next) =>{
    console.log(err);
    res.status(500).json({code:500, data:err, message:'Error Server'});
  })
  .listen(3000, ()=> {
    console.log('Example app listening on port 3000!')
  })
