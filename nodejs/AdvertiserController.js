
const advertisersArr=[
    {
        "code":100,
        "firstName":"Elisheva",
        "lastName":"Alshech",
        "email":"eli762801@gmail.com",
        "password":"762801",
        "phone":"0556762801",
        "secondPhone":null
    },
    {
        "code":101,
        "firstName":"Rivki",
        "lastName":"Hayas",
        "email":"R0534164722@gmail.com",
        "password":"rivki",
        "phone":"0534164722",
        "secondPhone":null
    }
 
]
const Router =require('express') ;

const AdvertiserController = Router();

AdvertiserController.get('/getAll', (req, res) => {
    try {
        res.json(advertisersArr)
    }
    catch {
        res.json(false)
    }
})
AdvertiserController.post('/SignUp', (req, res) => {
    try {
        const newA = req.body
        advertisersArr.push(newA)
        res.json(true)
    }
    catch {
        res.json(false)
    }
})
AdvertiserController.get('/SignIn/:email/:password', (req, res) => {
    try {
        debugger
        const { email,password } = req.params
        const adv = advertisersArr.find(o => (o.email == email&&o.password == password))
        if (adv!=null)
            res.json(adv)
        else
            res.json(null)
    }
    catch (err) {
        res.json(err)
    }
    res.end();
})
module.exports= AdvertiserController