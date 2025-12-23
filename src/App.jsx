import "./style.css";
import Navbar from "./components/Navbar";
import TopContent from "./components/TopContent";
import Counter from "./components/Counter";
import { users, profile } from "./Data/CounterData.js";
import { profiles } from "./Data/PopularData.js";
import { navLinks } from "./Data/NavbarData.js";
import { brand } from "./Data/BrandData.js";
import Popular from "./components/Popular.jsx";
import Artist from "./components/Artist.jsx";
import BrandImage from "./components/BrandImage.jsx";

const App = () => {
  return (
    <div>
      <Navbar links={navLinks}/>
      <TopContent />
      <Counter users={users} profile={profile}/>
      <Popular/>
      <Artist profiles={profiles}/>
      <BrandImage brand={brand}/>
    </div>
  );
};

export default App;
