import "./App.css";
import "./CSS/App.css";
import CustomNavbar from "./Components/Navbar/CustomNavbar";
import FloatingActionButton from "./Components/FloatingActionButton";
import HomePage from "./Pages/Home";
import AddMemory from './Components/AddMemory';
import LoginPage from "./Pages/Login";
import { useDispatch } from "react-redux";
import { Login } from "./Actions/UserSessionActions";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from "./Pages/Landing";
import { AppRoutes } from "./AppRoutes";

function App() {
  const accessToken = localStorage.getItem('accessToken');

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
      {/* <div> */}
      <CustomNavbar />
      <FloatingActionButton />
      <Routes>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route exact path={AppRoutes.Landing} element={<LandingPage />} />
        <Route exact path={AppRoutes.Home} element={<HomePage />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
