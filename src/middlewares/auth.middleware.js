const User = require('../models/User');

const isAuthenticated = async (req,res,next) => {
    try {
        const username = req.headers.username;

        if (!username){
            res.status(401).send("Username Inconnu");
            return;
        }
        const user = await User.findOne({ username: username});


        if (!user) {
            res.status(401).send("Erreur Connection");
            return;
        }
        req.username = username;

        next();
    } catch (error) {
        res.status(500).send("Error auth");
    }
};

module.exports = isAuthenticated;