import React from "react";

const Counter = ({ users, profile }) => {
  return (
    <div className="main-counter">
      {/**Counter section */}
      <div className="counter">
        {users.map((item, index) => (
          <div className="first-counter" key={index}>
            <h6>{item.name}</h6>
            <span>{item.count}</span>
          </div>
        ))}

        <div className="profile">
          <div className="content">
            <h6>Art</h6>
            <h5>3.4 ETH</h5>
          </div>
          <div className="image-card">
            {profile.map((item, index) => (
              <div className="first-img" key={index}>
                <img src={item.backgroundImage} alt="background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
