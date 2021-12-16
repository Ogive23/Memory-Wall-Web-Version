export class User{
    constructor(id, name, userName, email, image) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.image = image;
    }

    toList() {
        return [this.id, this.name, this.userName, this.email, this.image];
    }

    toJson() {
        return {
            'id': this.id,
            'name': this.name,
            'userName': this.userName,
            'email': this.email,
            'image': this.image
        }
    }
}