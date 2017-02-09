var express = require('express');
var router = express.Router();
var passport = require('passport');

var db = require('../queries');

router.get('/api/tables', passport.authenticate('jwt', { session: false }), db.getTables);
router.get('/api/customers', passport.authenticate('jwt', { session: false }), db.getCustomers);
router.get('/api/orderLineItems', passport.authenticate('jwt', { session: false }), db.getOrderLineItems);
router.get('/api/orders', passport.authenticate('jwt', { session: false }), db.getOrders);
router.get('/api/products', passport.authenticate('jwt', { session: false }), db.getProducts);
router.get('/api/customers/columns', passport.authenticate('jwt', { session: false }), db.getCustomerColumns);
router.get('/api/orders/columns', passport.authenticate('jwt', { session: false }), db.getOrderColumns);
router.get('/api/orderlineitems/columns', passport.authenticate('jwt', { session: false }), db.getOrderLineItemColumns);
router.get('/api/products/columns', passport.authenticate('jwt', { session: false }), db.getProductColumns);
router.get('/api/schema', passport.authenticate('jwt', { session: false }), db.getSchema);
router.post('/api/query', passport.authenticate('jwt', { session: false }), db.sendQuery);

module.exports = router;
