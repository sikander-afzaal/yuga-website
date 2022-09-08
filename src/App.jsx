import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Modal from "./Pages/Modal";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Modal />} path="/facebook" />
      </Routes>
    </div>
  );
}

export default App;
