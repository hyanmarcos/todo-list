import React from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "././styles/global.css";
import { Refs } from "./components/Concepts/Refs";

function App() {
  return (
    <>
      <Header />
      <Tasks />

      <Refs />
    </>
  );
}

export default App;
