import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Homepage from "./Pages/Homepage";
import Modal from "./Pages/Modal";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from 'web3';
import MetamaskProvider from "./Layout/DashHeader/connectors";
import Xrpl from "./Pages/Dashboard/XrplProf";

function getLibrary(provider) {
  return new Web3(provider, "any");
}

function App() {
  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <Routes>
            <Route element={<Homepage />} path="/" />
            <Route element={<Modal />} path="/facebook" />
            <Route element={<Dashboard />} path="/dashboard/*" />
            <Route element={<Xrpl />} path="/xrplTest" />
          </Routes>
        </MetamaskProvider>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
