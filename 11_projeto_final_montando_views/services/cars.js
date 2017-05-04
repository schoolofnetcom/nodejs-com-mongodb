exports.find = function (req, res) {
    res.render('cars_list');
};

exports.new = function (req, res) {
    res.render('cars_new');
};

exports.edit = function (req, res) {
    res.render('cars_edit');
};

