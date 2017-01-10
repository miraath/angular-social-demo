var request = require("request");

function getChannelInfos(jsonUrl, done) {    
  request(jsonUrl, function (error, response, body) {
    var infos;  
    if (!error && response.statusCode == 200) {
      infos = JSON.parse(body);
      done(null, infos);
    }  else{
      done("Something is wrong");  
    }  
  })     
}

module.exports = {
    getChannelInfos : getChannelInfos
};