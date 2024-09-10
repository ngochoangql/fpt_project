import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
// import LoginPage from "./components/pages/LoginPage/LoginPage";
// import ChatPage from "./components/pages/ChatPage/ChatPage";


function App() {
  return (
    <Router>
      <div style={{ display: "flex",height:"100vh" }}>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="login" Component={LoginPage} />
        
          </Routes>
        </div>{" "}
      </div>
    </Router>
  );
}

export default App;
