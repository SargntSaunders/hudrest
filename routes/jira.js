var express = require('express');
var router = express.Router();
var request = require('request');

var jiraBoardUrl = 'https://headsupdisplay.atlassian.net/rest/agile/1.0/board';

/* GET users listing. */
router.get('/board', function (req, res, next) {
    request.get(jiraBoardUrl, function (err, jiraRes, body) {
       res.send(body);
    }).auth('admin', 'HeadsUpDisplay1!', true);
});

module.exports = router;
