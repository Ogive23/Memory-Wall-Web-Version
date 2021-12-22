import logo from "./logo.svg";
import "./App.css";
import "./CSS/App.css";
import CustomNavbar from "./Components/CustomNavbar";
import FloatingActionButton from "./Components/FloatingActionButton";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <main id="main">
      <CustomNavbar />
      <LoginPage />
      {/* <HomePage /> */}
      <FloatingActionButton />
    </main>
  );
}

export default App;
