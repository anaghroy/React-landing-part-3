import { Quote } from "lucide-react";

const Artist = ({ profiles }) => {
    console.log(profiles)
  return (
    <div className="main-artist">
      <div className="artist-left">
        <h6>Artist</h6>
        <div className="heading">
          <span>Top List</span>
          <span>Artist.</span>
        </div>
        <div className="para">
          <p>
            We have dozens of artists who contribute to create amazing works
          </p>
        </div>
      </div>
      <div className="artist-right">
        {profiles.map((item, index) => (
          <div className="image-content" key={index}>
            <div className="profile">
              <img src={item.userProfile} alt="profile1" />
            </div>
            <div className="text">
              <div className="quotes">
                <Quote size={20} color="#ead3b1" />
                <h2>{item.name}</h2>
                <Quote size={20} color="#ead3b1" />
              </div>
              <span>{item.place}</span>
            </div>
            <div className="image">
              <img src={item.backgroundProfile} alt="Artist1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
