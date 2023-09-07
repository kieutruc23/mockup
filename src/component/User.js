import React, { useState } from 'react';

const UserInfoCard = ({ stt, onDelete, onMoveUp, onMoveDown }) => {
  const [username, setUsername] = useState(`Person ${stt}`);
  const [age, setAge] = useState(1);

  return (
    <div className="user-card">
      <div className="user-info">
        <label>Title:</label>
        <p>{`[${stt}] ${username} - ${age} years old`}</p>
      </div>
      <div className="user-input">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="user-buttons">
        <button onClick={onDelete}>Delete</button>
        <button onClick={onMoveUp}>Up</button>
        <button onClick={onMoveDown}>Down</button>
      </div>
    </div>
  );
};

export default UserInfoCard;
