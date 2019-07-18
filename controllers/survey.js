exports.surveyRes = (req, res) => {
    req.context.db.Vacations.findAll({
        attributes: ['country', 'city']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('home', {places: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}
