import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Homepage from "./Pages/Homepage";
import Modal from "./Pages/Modal";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Modal />} path="/facebook" />
        <Route element={<Dashboard />} path="/dashboard/*" />
      </Routes>
    </div>
  );
}

export default App;
