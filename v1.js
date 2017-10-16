'use strict'
let HttpHelper = require(__dirname + '/lib/HttpHelper');
const ApiResponse = require(__dirname + '/lib/ApiResponse')
const HOST = "onlinesessions.io"

class OnlineSessions {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    createSession(accountId, sessionData, time, callback) {
        const apiKey = this.apiKey;
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
        const apiKey = this.apiKey;
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
        const apiKey = this.apiKey;
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
        const apiKey = this.apiKey;
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
        const apiKey = this.apiKey;
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


var initializer = function(apiKey){
    return new OnlineSessions(apiKey);
}

module.exports = initializer;