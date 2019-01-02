const express  = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.send('<h1>server is working!</h1>')
});

app.get('/api/test', (req, res)=>{
    const data ={
        success: true, 
        message: "Test API working!",
        another: 'property goes here'
    }
    res.send(data);
})  

app.get('/api/user', (req, res)=>{
    const user ={
        email: 'jimbob@email.com',
        name: 'Jim Bob',
        username: 'cousinkisser'
    }
    res.send(user);
})

app.post('/api/send-message', (req, res)=>{
    console.log('Data from client', req.body);

    res.send({
        success: true,
        dataReceived: req.body
    });
})

app.listen(PORT, ()=>{
    console.log('server is running @ localhost:' + PORT);
}).on('error', (err)=>{
    console.log('Server listen error, do you already have a server running on PORT:' + PORT);
})

