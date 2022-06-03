import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/Home/Home";
import Error from "./layout/Error/Error";

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}
