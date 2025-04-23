const cors  = require('cors')
const express = require('express') 
const bodyParser  = require('body-parser')
const ApartmentController = require('./ApartmentController.js')
const AdvertiserController = require('./AdvertiserController.js')
const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use("/Apartment", ApartmentController);
app.use("/Advertiser", AdvertiserController);


app.listen(8080, () => {
    console.log("run!");
})

app.get('getApartmentsByCity/:c', (req, res) => {
    const {myCity} =req.params
    const ApartmentsByCity = apartmentArr.filter(o => o.city == myCity)
    res.json(ApartmentsByCity)

})