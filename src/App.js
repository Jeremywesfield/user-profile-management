import './App.css';
import { UsersList } from './components/UsersList';
import { useEffect, useState } from 'react';
import { getUsers } from './common/getUsers';

const defaultNumberOfUsers = 10;

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem('queriedData'));
    if (!dataFromStorage) {
        getUsers({ users, numberOfUsersToQuery: defaultNumberOfUsers, setUsers });
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
