import React, { useState, useEffect } from 'react';
import Details from './Details';

const List = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // В этом useEffect загрузим список пользователей
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <div className="list">
        {/* Отображаем список пользователей */}
        {users.map((user) => (
          <div key={user.id} onClick={() => handleSelectUser(user)}>
            {user.name}
          </div>
        ))}
      </div>
      <div className="details">
        {/* Отображаем детальную информацию о выбранном пользователе */}
        {selectedUser ? <Details info={selectedUser} /> : <p>Выберите пользователя</p>}
      </div>
    </div>
  );
};

export default List;