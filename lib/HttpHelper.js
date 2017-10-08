let http = require('http');
let https = require('https');

class HttpHelper {
    constructor() {
    }

    static httpRequest(host, path, httpType, port, data) {
        return new Promise(function (resolve, reject) {
            var httpResponse = {
                success: false,
                error: false,
                response: {},
                message: "",
                httpCode: 0
            }
    
            if (httpType == undefined) {
                httpType = "GET";
            }
    
            var options = {
                hostname: host,
                port: 8192,
                path: path,
                method: httpType,
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            if(port == undefined){
                options.port = undefined;
            }
            var req = http.request(options, function (res) {
                let body = "";
                res.setEncoding('utf8');
                res.on("data", data => {
                    body += data;
                });
                res.on("end", () => {
                    httpResponse.success = true;
                    httpResponse.response = body;
                    httpResponse.httpCode = res.statusCode;
                    resolve(httpResponse);
                });
            });
            req.on('error', function (e) {
                console.log('problem with request: ' + e.message);
                httpResponse.message = e.message;
                httpResponse.error = true;
                resolve(httpResponse);
            });
            if(data != undefined){
                req.write(JSON.stringify(data));
            }
            req.end();
        });
    }

    static secureRequest(host, path, httpType, port, data){
        return new Promise(function (resolve, reject) {
            var httpResponse = {
                success: false,
                error: false,
                response: {},
                message: ""
            }
    
            if (httpType == undefined) {
                httpType = "GET";
            }
    
            var options = {
                hostname: host,
                port: 8192,
                path: path,
                method: httpType,
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            if(port == undefined){
                options.port = undefined;
            }
            var req = https.request(options, function (res) {
                let body = "";
                res.setEncoding('utf8');
                res.on("data", data => {
                    body += data;
                });
                res.on("end", () => {
                    httpResponse.success = true;
                    httpResponse.response = body;
                    httpResponse.httpCode = res.statusCode;
                    resolve(httpResponse);
                });
            });
            req.on('error', function (e) {
                console.log('problem with request: ' + e.message);
                httpResponse.message = e.message;
                httpResponse.error = true;
                resolve(httpResponse);
            });
            if(data != undefined){
                req.write(JSON.stringify(data));
            }
            req.end();
        });
    }

}

module.exports = HttpHelper;