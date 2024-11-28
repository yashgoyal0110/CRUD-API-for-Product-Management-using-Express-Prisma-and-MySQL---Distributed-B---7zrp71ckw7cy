const express = require('express');
const createProduct = require('../controllers/createController');
const getAllProducts = require('../controllers/getAllController');
const getProduct = require('../controllers/getProductController');
const fullUpdate = require('../controllers/fullUpdateController');
const partialUpdate = require('../controllers/partialUpdateController');
const deleteProduct = require('../controllers/deleteController');
const router = express.Router();
router.post('/create', createProduct)
router.get('/get', getAllProducts)
router.get('/get/:id', getProduct)
router.put('/put/:id', fullUpdate)
router.patch('/patch/:id', partialUpdate)
router.delete('/delete/:id', deleteProduct)


module.exports = router;
