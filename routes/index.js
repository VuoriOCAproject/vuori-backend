var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/customers', db.getCustomers);
router.get('/api/orderLineItems', db.getOrderLineItems);
router.get('/api/orders', db.getOrders);
router.get('/api/products', db.getProducts);
router.get('/api/customers/columns', db.getCustomerColumns);


module.exports = router;
