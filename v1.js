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
        return new Promise(function (resolve, reject) {
            HttpHelper.httpRequest(HOST, "/createSession?apiKey=" + apiKey + ",accountId=" + accountId + ",time=" + time, "POST", undefined, sessionData).then(response => {
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
            HttpHelper.httpRequest(HOST, "/hasSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
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
            HttpHelper.httpRequest(HOST, "/getSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
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
            HttpHelper.httpRequest(HOST, "/renewSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "GET").then(response => {
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
            HttpHelper.httpRequest(HOST, "/removeSession?apiKey=" + apiKey + ",sessionId=" + sessionId, "DELETE").then(response => {
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