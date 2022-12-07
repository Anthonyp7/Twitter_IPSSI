const { model, Schema} = require('mongoose');

const Tweet = new Schema({
    username:{
        type: Schema.Types.ObjectId, ref: 'User',
    },
    text:String,
    isSurvey: Boolean,
    answers: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Tweet', Tweet, 'tweets');

