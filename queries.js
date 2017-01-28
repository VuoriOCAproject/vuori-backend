var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres@localhost:5432/testdb';
var db = pgp(connectionString);
var _ = require('lodash');

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
                    data: data.map(c => c.column_name)

                });
        });
}

function getOrderColumns(req, res, next) {
    db.any(`select * from information_schema.columns where table_schema='tests' and table_name='order'`)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL orders',
                    data: data.map(c => c.column_name)

                });
        });
}

function getOrderLineItemColumns(req, res, next) {
    db.any(`select * from information_schema.columns where table_schema='tests' and table_name='orderlineitem'`)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL OrderLineItems',
                    data: data.map(c => c.column_name)

                });
        });
}

function getProductColumns(req, res, next) {
    db.any(`select * from information_schema.columns where table_schema='tests' and table_name='product'`)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL product columns',
                    data: data.map(c => c.column_name)

                });
        });
}

function getTables(req, res, next) {
    db.any(`select table_name from information_schema.tables where table_schema='tests'`)
        .then(function(data) {
            res.status(200)
            .json({
                status:'Yaahooo!',
                message: 'Retrieved ALL table names',
                data: data
            });
        });
}

function getSchema(req, res, next) {
    db.any(`select * from information_schema.columns where table_schema='tests'`)
      .then((data) => {

        let uniqueNames = _.uniq(data.map(r => r.table_name));

        res.json(uniqueNames.map(name => {
            return {
                tableName: name,
                columns: data
                    .filter(d => d.table_name === name)
                    .map(d => d.column_name)
            };
        }));



      })

}

module.exports = {
    getCustomers: getCustomers,
    getOrderLineItems: getOrderLineItems,
    getOrders: getOrders,
    getProducts: getProducts,
    getCustomerColumns: getCustomerColumns,
    getOrderColumns: getOrderColumns,
    getOrderLineItemColumns: getOrderLineItemColumns,
    getProductColumns: getProductColumns,
    getTables: getTables,
    getSchema: getSchema
};
