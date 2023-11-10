
import React, { useState, useEffect } from 'react';
import ContestItem from './ContestItem';


function ContestList() {
  const [contestData, setContestData] = useState(null);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then(response => response.json())  
      .then(data => setContestData(data))
      .catch((error) => console.log('Error:', error));

  }, []);

  return (
    <div>
      <h1>Contest Information</h1>
        <ul>
          {contestData && contestData.map((contest, index) => (
            <li key={index}>
              <h3>{contest.name}</h3>
              <p>{contest.platform}</p>
              <p>{contest.start_time}</p>
              <p><a href={contest.url} target="_blank" rel="noopener noreferrer">
              {contest.url}</a></p>

              
              <ContestItem contest={contest} />
            </li>
          ))}
        </ul>
    
    </div>
  );
}

export default ContestList;
