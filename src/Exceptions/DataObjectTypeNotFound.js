export class DataObjectTypeNotFound {
    constructor(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}