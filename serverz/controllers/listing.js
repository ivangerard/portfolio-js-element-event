var Listings = require('../models/listings')

module.exports = {
    insert: insert,
    displays: displays,
    displayOne: displayOne,
    update: update,
    deleteitem: deleteitem,
    gallery:gallery
}

function insert(req, res, next) {

    var listings = new Listings({
        title: req.body.title,
        owner: req.body.owner,
        gallery: req.body.gallery
    })
    listings.save((err) => {
        if (err)
            throw err
        res.json(listings)
        console.log(listings);
    })

}

function displays(req, res) {
    Listings.find({}, (err, listings) => {
        res.json(listings)
    })
}

function displayOne(req, res) {
    Listings.findOne({
        _id: req.params.id
    }, (err, listings) => {
        //update the book
        res.json(listings)
    })
}

function update(req, res) {

    //finding a current book
    Listings.findOne({
        _id: req.params.id
    }, (err, listings) => {
        //update the book
        listings.title = req.body.title,
            listings.owner = req.body.owner,
            listings.gallery = req.body.gallery,
        listings.save((err) => {
            if (err)
                throw err;
            res.json(listings)

        })
    })
}

function deleteitem(req, res) {
    Listings.remove({
        _id: req.params.id
    }, (err, listings) => {
        res.json({
            "messages": "File deleted"
        })
    })
}


function displayOne(req, res) {
    Listings.findOne({
        _id: req.params.id
    }, (err, listings) => {
        //update the book
        res.json(listings)
    })
}

function gallery(req, res) {
//  console.log(req.params.query);
    Listings.find({
        $or: [{
            title: {
                $regex: req.params.query+'*',
                $options: 'i'
            }
        }]
    }, (err, listings) => {

      if (err)
          throw err;
        res.json(listings)
    })
}
