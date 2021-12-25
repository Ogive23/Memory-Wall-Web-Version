import "./App.css";
import "./CSS/App.css";
import CustomNavbar from "./Components/CustomNavbar";
import FloatingActionButton from "./Components/FloatingActionButton";
import HomePage from "./Pages/Home";
// import LoginPage from "./Pages/Login";
import { useDispatch } from "react-redux";
import { Login } from "./Actions/UserSessionActions";
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
    <main id="main">
      <CustomNavbar />
      {/* <LoginPage /> */}
      <HomePage />
      <FloatingActionButton />
    </main>
  );
}

export default App;
