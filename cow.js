'use strict';

const cows =  require("cowsay");

(text) => cows.say ({'text':text});

module.exports.speak = (text) => cows.say({'text':text});

const cow = require ('./cow');