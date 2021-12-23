import { DataObjectTypeNotFound } from "../Exceptions/DataObjectTypeNotFound";
import { Memory } from "../Models/Memory";
import { Profile } from "../Models/Profile";
import { User } from "../Models/User";

export class Factory {
  getObjectFromJson(dataObject, type) {
    switch (type) {
      case "memory":
        return new Memory(
          dataObject["id"],
          dataObject["personName"],
          dataObject["birthDate"],
          dataObject["deathDate"],
          dataObject["age"],
          dataObject["brief"],
          dataObject["lifeStory"],
          dataObject["image"],
          dataObject["createdOn"],
          dataObject["numberOfLikes"],
          dataObject["numberOfShares"],
          new User(
            dataObject["createdBy"]["id"],
            dataObject["createdBy"]["name"],
            dataObject["createdBy"]["userName"],
            dataObject["createdBy"]["email"],
            dataObject["createdBy"]["image"]
          )
        );
      case "user":
        return new User(
          dataObject["id"],
          dataObject["name"],
          dataObject["userName"],
          dataObject["email"],
          dataObject["image"]
        );
      case "profile":
        return new Profile(
          dataObject["id"],
          dataObject["bio"],
          dataObject["cover"],
          dataObject["image"]
        );
      default:
        throw new DataObjectTypeNotFound(type + " Not Found!");
    }
  }
  getObjectsFromJson(dataObjects, type) {
    let objects = [];
    switch (type) {
      case "memories":
        dataObjects.forEach((dataObject) => {
          objects.push(this.getObjectFromJson(dataObject, "memory"));
        });
        return objects;
      case "users":
        dataObjects.forEach((dataObject) => {
          objects.push(this.getObjectFromJson(dataObject, "user"));
        });
        return objects;
      default:
        throw new DataObjectTypeNotFound(type + " Not Found!");
    }
  }
}
