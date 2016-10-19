//create new express router
var express = require('express')
var router = express.Router()
var listingsController = require('../controllers/listing')

//export router

router.post('/listings', listingsController.insert)
router.get('/listings', listingsController.displays)
router.get('/listings/:id', listingsController.displayOne)
router.put('/listings/:id', listingsController.update)
router.delete('/listings/:id', listingsController.deleteitem)
router.get('/search/:query', listingsController.gallery)

module.exports = router
