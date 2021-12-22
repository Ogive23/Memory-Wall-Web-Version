import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Factory } from "../Helpers/Factory";
const memories = [
  {
    id: "12671265",
    personName: "Omar Mohamed",
    birthDate: "28/12/1983",
    deathDate: "28/12/2000",
    age: "17",
    brief:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    lifeStory: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    createdOn: "17/11/2021 03:39:12",
    numberOfLikes: 312,
    numberOfShares: 14,
    createdBy: {
      id: "3456775643234567",
      name: "Mohamed Salah",
      image: null,
    },
  },
  {
    id: "864231564321",
    personName: "Ali Mohamed",
    birthDate: "16/11/1954",
    deathDate: "09/10/2000",
    age: "46",
    brief:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    lifeStory: "",
    image:
      "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
    createdOn: "11/02/2021 05:39:12",
    numberOfLikes: 123,
    numberOfShares: 21,
    createdBy: {
      id: "13456775643234567",
      name: "Ali Salah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
    },
  },
  {
    id: "864231564321",
    personName: "Ali Mohamed",
    birthDate: "16/11/1954",
    deathDate: "09/10/2000",
    age: "46",
    brief:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    lifeStory: "",
    image:
      "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
    createdOn: "11/02/2021 05:39:12",
    numberOfLikes: 123,
    numberOfShares: 21,
    createdBy: {
      id: "13456775643234567",
      name: "Ali Salah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
    },
  },
];
export class MainMemoriesSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories,
    };
  }
  render() {
    let factory = new Factory();
    this.state.memories = factory.getObjectsFromJson(memories, "memories");
    return (
      <Carousel>
        {this.state.memories.map((memory) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={memory.image}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>{memory.personName}</h3>
                <p>{memory.brief}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default MainMemoriesSlider;
