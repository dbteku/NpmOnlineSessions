'use strict'
let HttpHelper = require(__dirname + '/lib/HttpHelper');
var apiKey;

function v1(apiKey){
    this.apiKey = apikey;
}

function createSession(accountId, callback){
    HttpHelper.httpRequest("localhost", "/", "GET", 8192).then(response =>{
        
    });
}

function hasSession(sessionId, callback){

}

function getSession(sessionId, callback){
    
}

function renewSession(sessionId, callback){
    
}

function removeSession(sessionId, callback){
    
}

module.exports = v1;