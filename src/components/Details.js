import React, { useState, useEffect } from 'react';

function Details({ info }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // В этом useEffect загрузим  информацию о пользователе
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching user details:', error));
  }, [info.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userData.avatar}?${Date.now()}`} alt={userData.name} />
      <h2>{userData.name}</h2>
      <p>Город: {userData.details.city}</p>
      <p>Компания: {userData.details.company}</p>
      <p>Должность: {userData.details.position}</p>
    </div>
  );
}

export default Details;

