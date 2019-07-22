exports.surveyRes = (req, res) => {
    req.context.db.Locations.findAll({
        attributes: ['country', 'city']
    }).then(function(results){
        // passing survey data to front end
        res.render('survey', {places: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

exports.surveyDisplay = (req, res) => {
    res.redirect('/survey');
}
