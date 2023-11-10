// ContestItem.jsx
import React from 'react';

function ContestItem({ contest }) {
  return (
    <li>
      <h3>{contest.name}</h3>
      <p>{contest.platform}</p>
      <p>{contest.start_time}</p>
      {/* Add more details based on the contest data structure */}
    </li>
  );
}

export default ContestItem;
