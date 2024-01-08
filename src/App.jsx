



import { useState } from 'react';
import './App.css';
import { useGlobalContext } from './context';
import './styles/_mainLeft.scss';
import { IoMdArrowDown } from "react-icons/io";

function App() {
  const { repo } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllRepos, setShowAllRepos] = useState(false); // Yangi o'zgaruvchilar
  const [showMoreClicked, setShowMoreClicked] = useState(false); // Yangi o'zgaruvchilar

  const filteredRepo = repo.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleRepos = showAllRepos ? filteredRepo : filteredRepo.slice(0, 3); // 3 ta repositori ko'rsatish uchun o'zgarish

  const handleShowMore = () => {
    setShowAllRepos(!showAllRepos);
    setShowMoreClicked(true);
  };

  return (
    <>
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
            <div className="line" />

            <div className="recentRepo">
              <div className="recentRepos">
                <h2>Recent Repositories</h2>
                <button>New</button>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  placeholder="Find a repository..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="mainLeftLists">
              {visibleRepos.map((item, idx) => (
                <div className="item" key={idx}>
                  <img
                    src="https://avatars.githubusercontent.com/u/133630500?v=4"
                    alt=""
                  />
                  <div>
                    <h2>{item.full_name}</h2>
                  </div>
                </div>
              ))}
            </div>

            {filteredRepo.length > 3 && !showMoreClicked && (
              <div className="showMoreButton">
                <a href="#" onClick={handleShowMore}>Show more</a>
              </div>
            )}

            {showMoreClicked && (
              <div className="showMoreButton">
                <a href="#" onClick={handleShowMore}>Show less</a>
              </div>
            )}

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
    </>
  );
}

export default App;

