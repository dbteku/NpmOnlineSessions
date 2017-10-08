'use strict'
let HttpHelper = require(__dirname + '/lib/HttpHelper');
const ApiResponse = require(__dirname + '/lib/ApiResponse')
const HOST = "onlinesessions.io"
var apiKey;
class OnlineSessions {
    constructor(api) {
        this.api = api;
    }

    createSession(accountId, sessionData, time, callback) {
        HttpHelper.httpRequest(HOST, "/createSession?apiKey=" + apiKey + ",accountId=" + accountId + ",time=" + time, "POST", undefined, sessionData).then(response => {
            return new Promise(function (resolve, reject) {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    hasSession(sessionId, callback) {
        HttpHelper.httpRequest(HOST, "/hasSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
            return new Promise(function (resolve, reject) {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    getSession(sessionId, callback) {
        HttpHelper.httpRequest(HOST, "/getSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
            return new Promise(function (resolve, reject) {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    renewSession(sessionId, callback) {
        HttpHelper.httpRequest(HOST, "/renewSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
            return new Promise(function (resolve, reject) {
                if (callback == undefined) {
                    resolve(response);
                } else {
                    callback(response);
                }
            });
        });
    }

    removeSession(sessionId, callback) {
        HttpHelper.httpRequest(HOST, "/removeSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
            return new Promise(function (resolve, reject) {
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