exports.surveyRes = (req, res) => {
    req.context.db.Locations.findAll({
        attributes: ['country', 'city']
    }).then(function(results){
        // passing survey data to front end
        res.render('vacation', {Locations: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

exports.final = (req, res) => {
    console.log(req.body.culture, req.body.climate, req.body.population, req.body.cost)

    req.context.db.Locations.findAll({
        where: {
            culture: req.body.culture,
            climate: req.body.climate, 
            population: req.body.population,
            cost: req.body.cost
            }
    }).then(function(results){
        console.log(req.body.culture, req.body.climate, req.body.population, req.body.cost)
        res.render('vacation', {Locations: results})
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.destination = (req, res) => {
    console.log(req.body.culture, req.body.climate, req.body.population, req.body.cost)

    req.context.db.Locations.findOne({
        where: {id: req.params.id}
    }).then(function(result){
        console.log(req.body.culture, req.body.climate, req.body.population, req.body.cost)
        res.render('destination', {destination: result})
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

// exports.vacation = (req, res) => {
//     req.context.db.Locations.findAll({
//         attributes: ['id','country', 'city', 'climate', 'population', 'culture', 'image','cost','language','continent','activity1','activity2','activity3','restaurants','currency','trivagoLink','hotelLink']
//     }).then(function(results){
//         res.render('vacation', {Locations: results})
//     })
// }

