import { Box } from "@mui/material";
import Pagination from "react-js-pagination";
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
// import { Factory } from "../Helpers/Factory";
import MemoryCard from "./MemoryCard";
import axios from 'axios';

// const memories = [
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
// ];
function MemoryList() {
  const [memories, setMemories] = useState([]);
  const [total, setTotal] = useState();
  const [current_page, setCurrrentPage] = useState(1);
  const [per_page, setPerPage] = useState();
  const [error, setError] = useState('');
  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    fetchMemories(pageNumber);
  };
  function fetchMemories(current_page) {
    axios.get(`http://127.0.0.1:8000/api/memorywall/memories?page=${current_page}`)
      .then(res => {
        setMemories(res.data.data.data);
        setPerPage(res.data.data.per_page);
        setTotal(res.data.data.total);
        setCurrrentPage(res.data.data.data.current_page);

      })
      .catch((error) => setError(error.Err_Desc));
  }
  useEffect(() => {
    fetchMemories(current_page);
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <Container>
        <Row xs={1} md={3} mb={4}>
          {memories.map((memory) => {
            return (
              <Box pb={6}>
                <Col key={memory.id}>
                  <MemoryCard memory={memory} />
                </Col>
              </Box>

            );
          })}
        </Row>

        {/* <Pagination onPageChange={""} style={{ background: '#fff' }} count={10} /> */}
        <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => { handlePageChange(pageNumber) }}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText='First'
          lastPageText="Last"
        />
      </Container>
    </div>
  )
};
export default MemoryList;
// export class MemoryList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       memories,
//     };
//   }
//   render() {
//     let factory = new Factory();
//     try {
//       this.state.memories = factory.getObjectsFromJson(memories, "memories");
//       return (
//         <Container>
//           <Row xs={1} md={3}>
//             {this.state.memories.map((memory) => {
//               return (
//                 <Col key={memory.id}>
//                   <MemoryCard memory={memory} />
//                 </Col>
//               );
//             })}
//           </Row>
//           <Pagination onPageChange={""} style={{ background: '#fff' }} count={10} color="primary" />
//         </Container>
//       );
//     } catch (DataObjectTypeNotFound) {
//       console.log(DataObjectTypeNotFound.message);
//     }
//   }
// }

// export default MemoryList;
