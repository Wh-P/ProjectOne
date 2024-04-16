import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mainpage from "./main/Mainpage";
import Detail from "./detail/Detail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
