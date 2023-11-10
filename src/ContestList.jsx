import React, { useState, useEffect } from 'react';
import ContestItem from './ContestItem';

function ContestList() {
  const [contestData, setContestData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then(response => response.json())
      .then(data => setContestData(data))
      .catch((error) => console.log('Error:', error));

  }, []);

  const handleSearch = () => {
   
    const filteredContests = contestData.filter(contest =>
      contest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    setContestData(filteredContests);
  };

  return (
    <div>
      <h1>Current Contests</h1>
      <div>
        <label htmlFor="searchInput">Search: </label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {contestData && contestData.map((contest, index) => (
          <li key={index}>
            <h3>{contest.name}</h3>
            <p>{contest.platform}</p>
            <p>{contest.start_time}</p>
            <p>{contest.site}</p>
            <p>
              <a href={contest.url} target="_blank" rel="noopener noreferrer">
                {contest.url}
              </a>
            </p>

            <ContestItem contest={contest} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContestList;
