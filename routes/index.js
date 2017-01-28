var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/tables', db.getTables);
router.get('/api/customers', db.getCustomers);
router.get('/api/orderLineItems', db.getOrderLineItems);
router.get('/api/orders', db.getOrders);
router.get('/api/products', db.getProducts);
router.get('/api/customers/columns', db.getCustomerColumns);
router.get('/api/orders/columns', db.getOrderColumns);
router.get('/api/orderlineitems/columns', db.getOrderLineItemColumns);
router.get('/api/products/columns', db.getProductColumns);
router.get('/api/schema', db.getSchema);



module.exports = router;
