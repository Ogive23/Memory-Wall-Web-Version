import logo from './logo.svg';
import './App.css';
import './CSS/App.css';
import CustomNavbar from './Components/CustomNavbar';
import FloatingActionButton from './Components/FloatingActionButton';
import MainMemoriesSlider from './Components/MainMemoriesSlider';
import MemoryList from './Components/MemoryList';

function App() {
  return <main id="main">
    <CustomNavbar />
    <MainMemoriesSlider/>
    <MemoryList />
    <FloatingActionButton/>
    </main>
}

export default App;
