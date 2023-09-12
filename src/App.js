import './App.css';
import React, { useState } from 'react';
import UserInfoCard from './component/User';
function App() {
  const [userCards, setUserCards] = useState([]);
  const maxCards = 5;

  const handleAddCard = () => {
    if (userCards.length < maxCards) {
      setUserCards((prevCards) => [
        ...prevCards,
        <UserInfoCard
          key={prevCards.length}
          stt={prevCards.length + 1}
          onDelete={() => handleDeleteCard(prevCards.length)}
          onMoveUp={() => handleMoveCard(prevCards.length, -1)}
          onMoveDown={() => handleMoveCard(prevCards.length + 1)}
        />,
      ]);
    }
  };

  const handleDeleteCard = (index) => {
    setUserCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleMoveCard = (index, direction) => {
    if (index + direction >= 0 && index + direction < userCards.length) {
      setUserCards((prevCards) => {
        const newCards = [...prevCards];
        [newCards[index], newCards[index + direction]] = [
          newCards[index + direction],
          newCards[index],
        ];
        return newCards;
      });
    }
  };
  

  return (
    <div className="App">
      <button onClick={handleAddCard} disabled={userCards.length >= maxCards}>
        Thêm
      </button>
      {userCards}
    </div>
  );
}

export default App;
