const express = require('express');
const app = express();
const isAuthenticated = require('./middlewares/auth.middleware');
const Login = require('./models/User');
const controllers = require('./controllers/user.controllers');
const controllers2 = require('./controllers/tweet.controllers');
const dto = require('./dto/user.dto');
const dto2 = require('./dto/tweet.dto');
require('./database');
app.use(express.json());


// USER
app.post(
    '/login',
    dto.dtoCreateUser,
    isAuthenticated,
    controllers.CreateUser
);


app.patch(
    '/:username',
    dto.dtoPatchUser,
    controllers.PatchUser
);

app.delete(
    '/delete/:username',
    dto.dtoDeleteUser,
    controllers.DeleteUser
);




// TWEET
app.post(
    '/tweet/:username',
    dto2.dtoCreateTweet,
    controllers2.CreateTweet
);


app.get(
    '/tweet',
    dto2.dtoGetTweet

);

// app.patch(
//     '/tweet',
//     dto2.dtoPatchTweet
// )

app.delete(
    '/tweet/:idtweet',
    controllers2.DeleteTweet
);

app.listen(3060, () => {
    console.log('Server running');
});
