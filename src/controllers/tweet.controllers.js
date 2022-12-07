const Tweet = require('../models/Tweet');
const User = require('../models/User');

const CreateTweet = async (req,res) => {
    try {
        const tweet = req.body.text;
        const username = req.params.username;
        const isSurvey = req.body.isSurvey;
        const answer = req.body.answers;

        const user = await User.findOne({username: username});

        const newTweet = new Tweet();
        newTweet.text = tweet;
        newTweet.username = user;
        newTweet.isSurvey = isSurvey;
        // newTweet.answers = answer;

        console.log("tweet: ", newTweet);
        await newTweet.save();


    } catch (error) {
        res.status(500).send('Une erreur est survenue');
        console.log("error", error);
    }
}


const GetTweet = async (req,res,next) => {
    try {
        // const username = req.headers.username;
        const user = req.user
        const usertweet = await Tweet.findOne({username: user._id}, {_id: 0, tweet: 1});

        res.status(200).json({ tweet: usertweet.tweet});

    } catch (error) {
        res.status(500).send("Une erreur est survenue");
        console.log("error", error);
    }
}


const PatchTweet = (req,res,next) => {

}

const DeleteTweet = async (req,res,next) => {
    try {
        const tweetId = req.params.idtweet;

        const tweet = await Tweet.findOne({idtweet: tweetId});
        await tweet.deleteOne();
        res.status(200).send("Tweet Supprimé");

    } catch (error) {
        res.status(500).send('Une erreur est survenue');
        console.log("error", error);
    }
}

module.exports = {
    CreateTweet,
    GetTweet,
    DeleteTweet
}
