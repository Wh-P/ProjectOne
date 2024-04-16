import "./App.css";
import React from "react";
import Header from "./common/Header";
import Mainpage from "./main/Mainpage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Mainpage />
    </div>
  );
};

export default App;
