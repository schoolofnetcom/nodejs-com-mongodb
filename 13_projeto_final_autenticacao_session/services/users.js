var User = require('./../models/user');

exports.login = function(req, res) {
    res.render('login');
};

exports.signin = function (req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function (err, user) {
        if(err) {
            return;
        }

        req.session.user = {
            username: user.username
        };

        res.redirect('/');
    })
};

exports.register = function(req, res) {
    res.render('register');
};

exports.create = function(req, res) {
    User.create(req.body, function (err, user) {
        if(err) {
            return;
        }

        res.redirect('/users/login');
    })
};