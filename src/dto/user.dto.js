const User = require('../models/User');

const dtoCreateUser = (req,res,next) => {
    try {
        const user = req.body.user;  //NOM
        const username = req.body.username;  //USERNAME

        console.log(user, username); //AFFICHER NOM + USERNAME

        if (!user || !username) {
            res.status(400).send("Name or Username Missing");
            return;
        }
        
        next();
    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
};


const dtoPatchUser = async (req,res,next) =>{
    try {
        const username = req.params.username;
        const newUsername = req.body.username;

        const userModified = await User.findOne({username: username});

        if (username == newUsername){
            res.status(400).send("Username identique");
            return;
        }

        userModified.username = newUsername;
        console.log(userModified);

        await userModified.save();
        res.status(200).json({newUsername});

    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
}


const dtoDeleteUser = (req,res,next) => {
    try {
        const username = req.params.username;  //USERNAME

        
        next();
    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
};

module.exports = {
    dtoGetUser,
    dtoCreateUser,
    dtoPatchUser,
    dtoDeleteUser
}
