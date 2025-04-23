
const apartmentArr=
[
    {
        "name":"דירה מהממת",
        "desc":"על חוף הים",
        "image":"pic1.jpg",
        "city":" הרצליה",
        "address":"נהר הירקון",
        "numOfBeds":4,
        "additives":"אין",
        "price":200,
        "advertiserCode":100
    },
    {
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic2.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    },{
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic3.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    },{
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic4.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    },{
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic5.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    },{
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic6.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    },{
        "name":"דירה מספר אחת בשוק",
        "desc":"לא תמצאו כזאת",
        "image":"pic7.jpg",
        "city":"אשדוד",
        "address":"הצבעוני 25",
        "numOfBeds":4,
        "additives":"גינה ומעלית",
        "price":100,
        "advertiserCode":101
    }
]
const Router  =require('express');
const  advertisersArr = require( './AdvertiserController.js');

const ApartmentController = Router();
ApartmentController.get('/getAll', (req, res) => {
    try {
        res.json(apartmentArr)
    }
    catch {
        res.json(false)
    }
})

ApartmentController.get('/getApartmentsByCity/:myCity', (req, res) => {
    const {myCity} =req.params
    const ApartmentsByCity = apartmentArr.filter(o => o.city == myCity)
    res.json(ApartmentsByCity)

})
ApartmentController.get('/getApartmentsByPrice/:from/:to', (req, res) => {
    const {from,to} =req.params
    const ApartmentsByPrice = apartmentArr.filter(o => (o.price>from && o.price<to))
    res.json(ApartmentsByPrice)

})
ApartmentController.get('/getApartmentsByName/:firstName1/:lastName1', (req, res) => {
    const {firstName1,lastName1} =req.params
    console.log(firstName1,lastName1);
    
    const mycode = JSON.parse(advertisersArr)
    console.log(mycode);
    mycode.find(o => o.firstName==firstName1)
    const ApartmentsByCode = apartmentArr.filter(o => o.advertiserCode==mycode )
    res.json(mycode)

})

module.exports=ApartmentController 