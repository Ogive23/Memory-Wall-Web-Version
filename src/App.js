import logo from './logo.svg';
import './App.css';
import './CSS/App.css';
import CustomNavbar from './Components/CustomNavbar';
import FloatingActionButton from './Components/FloatingActionButton';
import HomePage from './Pages/Home';

function App() {
  return <main id="main">
    <CustomNavbar />
    <HomePage />
    <FloatingActionButton/>
    </main>
}

export default App;
