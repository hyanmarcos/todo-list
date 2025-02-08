import React from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "././styles/global.css";
import { Refs } from "./components/Concepts/Refs";
import { Memorization } from "./components/Concepts/Memorization";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />

      {/* <Refs />

      <Memorization
        financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      /> */}
    </TasksProvider>
  );
}

export default App;
