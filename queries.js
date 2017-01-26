var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres@localhost:5432/testdb';
var db = pgp(connectionString);

// add query functions

function getCustomers(req, res, next) {
    db
        .any('select * from tests.customer')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL customers',
                    data: data

                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getOrderLineItems(req, res, next) {
    db.any('select * from tests.orderlineitem')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL orderLineItems',
                    data: data

                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getOrders(req, res, next) {
    db.any('select * from tests.order')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL orders',
                    data: data

                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getProducts(req, res, next) {
    db.any('select * from tests.product')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL products',
                    data: data

                });
        });
}

function getCustomerColumns(req, res, next) {
    db.any(`select * from information_schema.columns where table_schema='tests' and table_name='customer'`)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL products',
                    data: data

                });
        });
}
module.exports = {
    getCustomers: getCustomers,
    getOrderLineItems: getOrderLineItems,
    getOrders: getOrders,
    getProducts: getProducts,
    getCustomerColumns: getCustomerColumns
};
