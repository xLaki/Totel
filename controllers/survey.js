exports.surveyRes = (req, res) => {
    req.context.db.Locations.findAll({
        attributes: ['country', 'city']
    }).then(function(results){
        // passing survey data to front end
        res.render('vacations', {Locations: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

exports.final = (req, res) => {
    req.context.db.Locations.findAll({
        attributes: ['country', 'city', 'climate', 'population', 'culture', 'image','cost','language','continent','activity1','activity2','activity3','resturants','currency','trivagoLink','hotelLink']
    }).then(function(results){
        res.render('destination', {Locations: results})
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.surveyDisplay = (req, res) => {
    res.render('survey');
}

// exports.desDisplay = (req, res) => {
//     res.render('destination')
// }

exports.vacation = (req, res) => {
    req.context.db.Locations.findAll({
        attributes: ['country', 'city', 'climate', 'population', 'culture', 'image','cost','language','continent','activity1','activity2','activity3','resturants','currency','trivagoLink','hotelLink']
    }).then(function(results){
        res.render('vacation', {Locations: results})
    })
}

