class ApiResponse{

    constructor(succeeded, error, message){
        this.succeeded = succeeded;
        this.error = error;
        this.message = message;
    }

}

module.exports = ApiResponse;