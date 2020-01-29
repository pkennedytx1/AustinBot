require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/password', (req, res) => {
var data = {form: {
      token: process.env.SLACK_AUTH_TOKEN,
      channel: "#slackbottest101",
      text: "Hello :wave:, the WiFi Password for 'WeWork' is:\n P@ssw0rd"
    }};
request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
      // Sends welcome message
      res.json();
    });
});

app.post('https://slack.com/api/chat.postMessage', (req, res) => {
    var data = {form: {
        token: process.env.SLACK_AUTH_TOKEN,
        channel: "#slackbottest101",
        text: 'hello'
    }};
})

app.listen(process.env.PORT || PORT, function() {
    console.log('Bot is listening on port ' + PORT);
});
