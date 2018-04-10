module.exports = function(req, res, next){

    console.log('middleware');
    
    //do the user check
    //grab user from database
    //var user = User.findOne({ username: req.params.username });
    var user = req.params.username;
    
    //was no user. 404
    if ( ! user ) {
        res.status(404);
        return res.send('404 not found');
    }

    //attaching the information to the request
    req.user = {
        username: 'artur'
    };

    next();
};