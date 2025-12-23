import "./style.css";
import Navbar from "./components/Navbar";
import TopContent from "./components/TopContent";
import Counter from "./components/Counter";
import { users, profile } from "./Data/CounterData.js";
import { profiles } from "./Data/PopularData.js";
import Popular from "./components/Popular.jsx";
import Artist from "./components/Artist.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopContent />
      <Counter users={users} profile={profile}/>
      <Popular/>
      <Artist profiles={profiles}/>
    </div>
  );
};

export default App;
