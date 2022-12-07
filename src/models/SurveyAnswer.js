const { model, Schema} = require('mongoose');

const SurveyAnswer = new Schema({
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
    },
    answers: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('SurveyAnswer', SurveyAnswer, 'surveyanswers');

