import express from 'express';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 3000;


let authenticated = false;
let lastAuthNanos = 0;

const userScores = {}

const gaitAuthDecisionHandler = decision => {
    pass
}

app.get('/', (req, res) => {
    res.send('Welcome to SuperFido Auth API')
})

app.post('/send-gait-score', ({body}, res)=>{
    console.log(body)
    const {authScore, username} = body

    if (username in userScores) userScores[username].push(authScore)
    else userScores[username] = [authScore]

    console.log(userScores)

    //Receive the authenticator decision and forward that to our website
    res.send({'responseString': 'Ack'});
})

app.post('/get-gait-score', ({body}, res) => {
    console.log(body['username'], body.username, body)
    if (body['username'] in userScores) {
        //Send most recent auth score
        res.send({'authScore': userScores[body.username].slice(-1)})
    } else{
        res.send({'error': 'User with username does not have any auth score in our API'})        
    }

})

app.listen(port, '0.0.0.0', () => console.log(`Listening on port: ${port}`))
