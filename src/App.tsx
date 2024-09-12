import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage.tsx";
import ChatPage from "./components/pages/ChatPage/ChatPage.tsx";
import FilePage from "./components/pages/FilePage/FilePage.tsx";
import React ,{ FC } from "react";
// import LoginPage from "./components/pages/LoginPage/LoginPage";
// import ChatPage from "./components/pages/ChatPage/ChatPage";


const App : FC = () => {
  return (
    <Router>
      <div style={{ height: "100dvh", width: "100dvw" }}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="file_manage" element={<FilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
