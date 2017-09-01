const express = require ('express');
const app = express();
const port = process.env.PORT || 8000;
const data = require ('./data.json');
const cors = require ('cors');

//server static file
// app.use('/',express.static('public'));

app.use(cors());


// Route: go to home route '/'
app.get('/', (request, response)=>{
    response.send("<h2> With all thy getting, get understanding!.hello all humans</h2>");
});

// Route: go to data.json file
app.get('/data', (request, response)=>{
    response.send(data);
});

// EXERCISE: MATH GET PI
// Route: get PI
app.get('/math/pi', (request, response)=>{
    const pi = String(Math.PI);
    response.send(pi);
});



// Route: that does NOT exist
app.get('*', (request, response)=>{
    response.send("Error: this endpoint does NOT exist");
});


//http server listening on port
app.listen(port);
console.log("listening on port:" + port);
