const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'student',
    database : 'Totel'
});

exports.lowCostVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE cost="Low"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.medCostVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE cost="Medium"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.highCostVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE cost="High"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.westCultureVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE culture="Western"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.eastCultureVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE culture="Eastern"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.tropClimateVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE climate="Tropical"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.moderClimateVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE climate="Moderate"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.contClimateVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE climate="Continental"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.highPopVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE population="High"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};

exports.lowPopVacays = (req, res) => {
    console.log(req.context);
    let sql = 'SELECT * FROM Locations WHERE population="Low"';
    req.context.db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering destination view and passing location data
        console.log(results)
        res.render('vacation', {Locations: results});
    });
};