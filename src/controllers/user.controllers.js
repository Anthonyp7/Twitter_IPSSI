const User = require('../models/User');

const CreateUser = async (req,res) =>{
    try {
        const username = req.body.username;

        const newUser = new User();
        newUser.username = username; 


        await newUser.save();
        
        res.status(201).send("Utilisateur créé");
        req.username = username;
    }
    catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log('error', error);
    }
}

const PatchUser = async (req,res) => {
    try {
        const username = req.params.username;
        const newUsername = req.body.username;

        const userModified = await User.findOne({username: username});

        
        userModified.username = newUsername;
        console.log(userModified);

        await userModified.save();
        res.status(204).json({newUsername});

    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log('error', error);
    }
}


const DeleteUser = async (req,res) =>{
    try {
        const username = req.params.username;

        await User.deleteOne({ username: username});


        res.status(204).json("Utilisateur Supprimé!");
        
        // req.username = username;
    }
    catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log('error', error);
    }
}


module.exports = {
    CreateUser,
    PatchUser,
    DeleteUser
}

