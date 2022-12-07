const Tweet = require("../models/Tweet");

const dtoCreateTweet = (req,res,next) => {
    try {
        const tweet = req.body.text;
        const username = req.params.username;
        const isSurvey = req.body.isSurvey;
        const answer = req.body.answers;

        if (!tweet){
            res.status(400).send("Veuillez écrire votre Tweet");
            return;
        }
        

        // if (isSurvey == true){
        //     res.status(400).json({username: username, tweet: tweet, answer: answer});
        // }

        res.status(201).json({username: username, tweet: tweet});
         
        next();
    } 

    catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
};



const dtoGetTweet = async (req,res,next) => {
    try {
        const username = req.headers.username;
        const usertweet = await Tweet.findOne({username: username}, {_id: 0, tweet: 1});

        res.status(200).json({ tweet: usertweet.tweet});

    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
}



const dtoPatchTweet = async (req,res,next) => {
    try {
        const tweet = req.tweet;
        const tweetExist = await Tweet.findOne({tweet: tweet});
        console.log(tweetExist);
        if (tweetExist){
            res.status(400).json({tweet: tweet});
        }

        // if (!tweetExist){
        //     console.log("ok");
        //     res.status(400).send("Vous n'avez aucun tweet");
        // }
        
        res.status(204).send("Tweet Modifié");

    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
}

const dtoDeleteTweet = async (req,res,next) => {
    try {
        
    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log('error', error);
    }
}

module.exports = {
    dtoCreateTweet,
    dtoGetTweet,
    dtoPatchTweet,
    dtoDeleteTweet
}


