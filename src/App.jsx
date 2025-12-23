import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import TopContent from "./components/TopContent";
import Counter from "./components/Counter";
import { users, profile } from "./Data/CounterData.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopContent />
      <Counter users={users} profile={profile}/>
    </div>
  );
};

export default App;
