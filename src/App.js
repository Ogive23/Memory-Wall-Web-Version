import logo from './logo.svg';
import './App.css';
import './CSS/App.css';

function MemoryList() {
  return (
    <section className="memorylist">
      <Memory />
      <Memory />
      <Memory />
      <Memory />
      <Memory />
      <Memory />
    </section>
  );
}
const Memory = () => {
  return <article className="memory">
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg" alt="" />)

const Title = () => (<h1>Title</h1>)
const Author = () => (<h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Author</h4>)

function App() {
  return <MemoryList />
}

export default App;
