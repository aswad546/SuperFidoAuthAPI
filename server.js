import express from 'express';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port = 3000

let authenticated = false;
let lastAuthNanos = 0;

const gaitAuthDecisionHandler = decision => {
    pass
}

app.get('/gait-authenticator-decision', ({body}, res)=>{
    //Receive the authenticator decision and forward that to our website
    res.send('Ack');
})

app.listen(port, () => console.log(`Listening on port: ${port}`))