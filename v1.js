'use strict'
let HttpHelper = require(__dirname + '/lib/HttpHelper');
const ApiResponse = require(__dirname + '/lib/ApiResponse')
const HOST = "onlinesessions.io"
var apiKey;

var test = {
    test:true
}

// HttpHelper.httpRequest(HOST, '/v1/createSession?apiKey=test,accountId=test@test.com,time=30s', "POST", undefined, '{"test":true}').then(response => {
//     console.log(response);
// });

// HttpHelper.httpRequest(HOST, "/v1/createSession?apiKey=test,sessionId=test@test.com", "GET").then(response => {
//     console.log(response);
// });

class OnlineSessions {
    constructor(api) {
        this.api = api;
    }

    createSession(accountId, sessionData, time, callback) {
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/v1/createSession?apiKey=" + apiKey + ",accountId=" + accountId + ",time=" + time, "POST", undefined, sessionData).then(response => {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    hasSession(sessionId, callback) {
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/v1/hasSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    getSession(sessionId, callback) {
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/v1/getSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    renewSession(sessionId, callback) {
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/v1/renewSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    removeSession(sessionId, callback) {
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/v1/removeSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "DELETE").then(response => {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

}



module.exports = OnlineSessions;