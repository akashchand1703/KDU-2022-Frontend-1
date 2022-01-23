const express = require('express');
// const casual = require('casual');
const followers = require('./followers')
const following = require('./following')

const app = express();
app.get('/api/:user_handle/followers', (req, res) => {
    const user_handle = req.params.userid;
    res.send(followers)
})

app.get('/api/:userid/following', (req, res) => {
    res.send(following)
})

app.listen(3000, () => {
    console.log('server is running on port : '+3000)
})

