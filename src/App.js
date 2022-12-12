import './App.css';
import { UsersList } from './screens/usersList/UsersList';
import { useEffect, useState } from 'react';
import { getUsers } from './common/getUsers';
import { UserProfile } from './screens/userProfile/UserProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from './contex/AppContext';

const defaultNumberOfUsers = 10;

function App() {

  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem('queriedData'));
    if (!dataFromStorage) {
        getUsers({ users, numberOfUsersToQuery: defaultNumberOfUsers, setUsers });
    } else {
      setUsers(dataFromStorage);
    }
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value = {{ userProfile: userProfile, setUserProfile: setUserProfile }}>
        <BrowserRouter basename={"http://Jeremywesfield.github.io/user-profile-management"}>
          <Routes>
            <Route exact path="/" element={<UsersList users={users} setUsers={setUsers} />} />
            <Route path="/userProfile" element={<UserProfile users={users} setUsers={setUsers} />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
