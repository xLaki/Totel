const passport = require('../config/passport')

// GET user/signup
exports.register = (req, res) => {
    res.render('register');
}

// GET /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}

// GET /profile
exports.userProfile = (req, res) => {

    res.render('profile', {User: req.user});
}

// GET for /logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}

// POST /user/signup
exports.signup = (req, res) => {
    req.context.db.User.create({
        email: req.body.email , 
        password: req.body.password
    }).then(function () {
        res.redirect('/profile')
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    })
}

// POST user/login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
    });


    // ########################USER FAVORITES##########################
    exports.allFavs = (req, res) => {
        req.context.db.Task.findAll({
            attributes: ['id', 'FavItem']
        }).then(function(results){
            // rendering tasks view and passing taskToDo data
            res.render('tasks', {FavToDo: results});
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
    }
    
    exports.addFav = (req, res) => {
        req.context.db.Task.create({
            FavItem: req.body.taskItem
        }).then(function(){
            res.redirect('/');
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
    }
    
    exports.removeFav = (req, res) => {
        req.context.db.Task.destroy({
            where: { id: req.params.id }
        }).then(function(result){
            res.json(result)
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
    }
    