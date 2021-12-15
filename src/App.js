import logo from './logo.svg';
import './App.css';
import './CSS/App.css';
import CustomNavbar from './Components/CustomNavbar';
import MemoryCard from './Components/MemoryCard';
import { Col, Container, Row } from 'react-bootstrap';
import { Fab, } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
//setup vars
const memories = [
  {
    title: 'Title',
    author: 'Author',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg'
  }, {
    title: 'Title2',
    author: 'Author2',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg'
  }
];
function MemoryList() {
  return (
    <Container>
      <Row xs={1} md={3}>
        {memories.map((memory) => { return <Col><MemoryCard memory={memory} /></Col> })}
      </Row>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" style={{ right: 20, position: 'fixed' }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
      </Box>
    </Container>
    // <section className="memorylist">

    // </section>
  );
}
// const Memory = (props) => {
//   return <MemoryCard memory=
//   return <article className="memory">
//     <img src={props.memory.image} alt="" />
//     <h1>{props.memory.title}</h1>
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}></h4>
//   </article>
// }

function App() {
  return <main>
    <CustomNavbar />
    {/* <MemoryList /> */}
  </main>
}

export default App;
