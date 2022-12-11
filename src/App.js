import './App.css';
import { UsersList } from './components/UsersList';
import { useEffect, useState } from 'react';
import { getUsers } from './common/getUsers';

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem('queriedData'));
    if (!dataFromStorage) {
        const defaultNumberOfUsers = 10;
        getUsers(users.length, defaultNumberOfUsers).then(res => setUsers(res));
    } else {
      setUsers(dataFromStorage);
    }
  }, [])

  return (
    <div className="App">
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
