import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Factory } from "../Helpers/Factory";
import axios from 'axios';

// const SampleMemories = [
//   {
//     id: "12671265",
//     personName: "Omar Mohamed",
//     birthDate: "28/12/1983",
//     deathDate: "28/12/2000",
//     age: "17",
//     brief:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//     lifeStory: "",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
//     createdOn: "17/11/2021 03:39:12",
//     numberOfLikes: 312,
//     numberOfShares: 14,
//     createdBy: {
//       id: "3456775643234567",
//       name: "Mohamed Salah",
//       image: null,
//     },
//   },
//   {
//     id: "864231564321",
//     personName: "Ali Mohamed",
//     birthDate: "16/11/1954",
//     deathDate: "09/10/2000",
//     age: "46",
//     brief:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//     lifeStory: "",
//     image:
//       "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
//     createdOn: "11/02/2021 05:39:12",
//     numberOfLikes: 123,
//     numberOfShares: 21,
//     createdBy: {
//       id: "13456775643234567",
//       name: "Ali Salah",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
//     },
//   },
//   {
//     id: "864231564321",
//     personName: "Ali Mohamed",
//     birthDate: "16/11/1954",
//     deathDate: "09/10/2000",
//     age: "46",
//     brief:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//     lifeStory: "",
//     image:
//       "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
//     createdOn: "11/02/2021 05:39:12",
//     numberOfLikes: 123,
//     numberOfShares: 21,
//     createdBy: {
//       id: "13456775643234567",
//       name: "Ali Salah",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
//     },
//   },
// ];

export const MainMemoriesSlider = () => {
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState('');
  const config = {
    headers: { Authorization: `Bearer lhhMhiK8wNicHB1v3tSpr6gGJ4r1tCHwskPU5YwRMtXu7CKSFrkyiWvIvIyz` }
  };
  const initializeMemories = () => {
    axios.get(`http://127.0.0.1:8000/api/memorywall/mostLikelyMemories`, config)
      .then(res => {
        // let factory = new Factory();
        // setMemories(factory.getObjectsFromJson(res.data.data, "memories"));
        console.log(res.data.data)
        setMemories(res.data.data)
      })
      .catch((error) => setError(error.Err_Desc));

  };
  useEffect(() => {
    initializeMemories();
    return () => { }
  }, []);
  return (
    <Container>
      <Carousel interval={100000}>
        {memories.map((memory) => {
          const imageUrl = `http://127.0.0.1:8000${memory.image}`;
          return (
            <Carousel.Item className="text-center">
              <img
                className="d-block"
                src={imageUrl}
                alt="Second slide"
                style={{ height: 'inherit' }}
              />

              <Carousel.Caption>
                <h3>{memory.personName}</h3>
                <p>{memory.brief}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

    </Container>
  )
}

export default MainMemoriesSlider;
