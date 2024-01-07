import { useState } from "react";
// import { Link } from "react-router-dom";
import lists from "../lists.json";
import { IoMdArrowDown } from "react-icons/io";


function MainLeft() {
    const [searchTerm, setSearchTerm] = useState("");


    const filteredLists = lists.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.repo.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div className="box">
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
          <img
            src="https://avatars.githubusercontent.com/u/133630500?v=4"
            alt=""
          />
          <h2>behzodbaxtiyorov</h2>
          <IoMdArrowDown />
        </div>
        {/* */}
        <div className="line" />

        {/* recent repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Resent Repositeries</h2>
            <button>New</button>
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Find a repositeries..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>

        <div className="mainLeftLists">
        {filteredLists.map((item, idx) => (
            <div className="item" key={idx}>
              <img
                src="https://avatars.githubusercontent.com/u/133630500?v=4"
                alt=""
              />
              <div>
                <h2>{`${item.name}/${item.repo}`}</h2>
              </div>
            </div>
          ))}
          {/* <Link to="">Show more</Link> */}
        </div>

        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Your teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainLeft