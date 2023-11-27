import express from 'express';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 3000;


let authenticated = false;
let lastAuthNanos = 0;

const gaitAuthDecisionHandler = decision => {
    pass
}

app.get('/', (req, res) => {
    res.send('Welcome to SuperFido Auth API')
})

app.post('/send-gait-score', ({body}, res)=>{
    console.log(body)
    //Receive the authenticator decision and forward that to our website
    res.send({'responseString': 'Ack'});
})

app.listen(port, '0.0.0.0', () => console.log(`Listening on port: ${port}`))
