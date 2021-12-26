import "./App.css";
import "./CSS/App.css";
import CustomNavbar from "./Components/CustomNavbar";
import FloatingActionButton from "./Components/FloatingActionButton";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import { useDispatch } from "react-redux";
import { Login } from "./Actions/UserSessionActions";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  ///Store

  const dispatch = useDispatch();

  if (localStorage.getItem("user")) {
    dispatch(
      Login(
        localStorage.getItem("user"),
        localStorage.getItem("profile"),
        localStorage.getItem("accessToken"),
        localStorage.getItem("expiryDate"),
      )
    );
  }
  return (
    <Router>
      <div>
        {/* <main id="main"> */}
        <CustomNavbar />
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        <FloatingActionButton />
        {/* </main> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
