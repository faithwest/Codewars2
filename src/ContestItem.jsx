
import React from 'react';

function ContestItem({ contest }) {
  return (
    <li>
      <h3>{contest.name}</h3>
      <p>{contest.platform}</p>
      <p>{contest.start_time}</p>
     
    </li>
  );
}

export default ContestItem;
