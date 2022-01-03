import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Factory } from "../../Helpers/Factory";
import axios from 'axios';
import { useSelector } from "react-redux";

export const MainMemoriesSlider = () => {
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState('');
  const BASE_API_CALLER = useSelector(state => state.UserSession.BASE_API_URL);
  const initializeMemories = () => {
    axios.get(BASE_API_CALLER + `/api/memorywall/getTopMemories`)
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
