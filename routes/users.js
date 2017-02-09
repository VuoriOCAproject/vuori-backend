var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var _ = require('lodash');

var usersDb = [{
    id: 1,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function(req, res) {
    if (req.body.username && req.body.password) {
        var username = req.body.username;
        var password = req.body.password;
    }
    // usually this would be a database call:
    var user = usersDb[_.findIndex(usersDb, { username: username })];
    if (!user) {
        res.status(401)
            .json({ message: "no such user found" });
    }

    if (user.password === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = { id: user.id };
        var token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({ message: "ok", token: token });
    } else {
        res.status(401)
            .json({ message: "passwords did not match" });
    }

})

module.exports = router;
