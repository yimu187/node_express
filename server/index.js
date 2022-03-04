import express from 'express';
import cors from 'cors';
import process from 'process';

const app = express();

app.use(cors({
origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    // if(allowedOrigins.indexOf(origin) === -1){
    // var msg = 'The CORS policy for this site does not ' +
    //             'allow access from the specified Origin.';
    // return callback(new Error(msg), false);
    // }
    return callback(null, true);
}
}));

app.get('/health',(req,res) => {
    console.log('receiving get request');

    const resp = {
        state: 'Up and Running',
        processId : process.pid
    }
    res.send(resp);
    return;
});

app.get('/health/processID',(req,res) => {
    console.log('receiving get request');

    const resp = process.pid + " I love DDX";
    res.send(resp);
    return;
});

const PORT = 5000;

app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
});
