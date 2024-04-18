import "./reset.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Mainpage from "./main/Mainpage";
import Detail from "./detail/Detail";
import Register from "./register/components/Register";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
