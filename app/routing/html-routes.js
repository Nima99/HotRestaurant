var path = require('path');

module.exports = function (app) {
    app.get('/tables', function(req, res) {
        res.sendFile(path.join(_dirname + '/../public/table.html'));
    });
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(_dirname + '/../public/reserve.html'));
    });
    app.use( function(req, res) {
        res.sendFile(path.join(_dirname + '/../public/home.html'));
    });




}