import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import ChatPage from "./components/pages/ChatPage/ChatPage";
import FilePage from "./components/pages/FilePage/FilePage";
// import LoginPage from "./components/pages/LoginPage/LoginPage";
// import ChatPage from "./components/pages/ChatPage/ChatPage";


function App() {
  return (
    <Router>
      <div style={{ height: "100dvh",width:"100dvw"  }}>
     
          <Routes>
            <Route path="login" Component={LoginPage} />
            <Route path="chat" Component={ChatPage}/>
            <Route path="file_manage" Component={FilePage}/>
          </Routes>
        </div>{" "}
      
    </Router>
  );
}

export default App;
