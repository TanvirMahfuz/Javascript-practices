class ApiResponse {
    constructor(statusCode, data, messege = "Sucess") {
        this.statusCode = statusCode;
        this.data = data;
        this.messege = messege;
        this.success = statusCode < 400;
    }
}
