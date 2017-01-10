var express = require('express');
var radioService = require("../views/radio.service");
var router = express.Router();

/* GET home page. */
router.get('/miraath1', function(req, res, next) {
  radioService.getChannelInfos("http://178.62.64.171:3000/channels/0", function (err, data) {
    res.render('miraath1', data);
  });  
});

router.get('/miraath2', function(req, res, next) {
  radioService.getChannelInfos("http://178.62.64.171:3000/channels/1", function (err, data) {
    res.render('miraath2', data);
  });  
});

router.get('/miraath3', function(req, res, next) {
  radioService.getChannelInfos("http://178.62.64.171:3000/channels/2", function (err, data) {
    res.render('miraath3', data);
  }); 
});

router.get('/quran', function(req, res, next) {
  radioService.getChannelInfos("http://178.62.64.171:3000/channels/3", function (err, data) {
    res.render('quran', data);
  }); 
});

router.get('/majaliss', function(req, res, next) {
  radioService.getChannelInfos("http://178.62.64.171:3000/channels/4", function (err, data) {
    res.render('majaliss', data);
  }); 
});

module.exports = router;
