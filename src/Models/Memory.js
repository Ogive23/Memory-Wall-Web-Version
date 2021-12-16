export class Memory {
    constructor(id, personName, birthDate, deathDate, age, brief, lifeStory, image, createdOn, numberOfLikes, numberOfShares, author) {
        this.id = id;
        this.personName = personName;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.age = age;
        this.brief = brief;
        this.lifeStory = lifeStory;
        this.image = image;
        this.createdOn = createdOn;
        this.numberOfLikes = numberOfLikes;
        this.numberOfShares = numberOfShares;
        this.author = author;
    }

    toList() {
        return [this.id, this.personName, this.birthDate, this.deathDate, this.age, this.brief, this.image, this.createdOn, this.numberOfLikes, this.numberOfShares, this.author];
    }

    toJson() {
        return {
            'id': this.id,
            'personName': this.personName,
            'birthDate': this.birthDate,
            'deathDate': this.deathDate,
            'age': this.age,
            'brief': this.brief,
            'image': this.image,
            'createdOn': this.createdOn,
            'numberOfLikes': this.numberOfLikes,
            'numberOfShares': this.numberOfShares,
            'author': this.author
        };
    }
}