import axios from 'axios';

export const getUsers = async ({ users, numberOfUsersToQuery, setUsers }) => {

  try {
        if(numberOfUsersToQuery > users.length) {
          const usersArray = [...users];
          const numberToQuery = numberOfUsersToQuery - users.length;
          const usersData = await axios.get(`https://randomuser.me/api/?results=${numberToQuery}`);
          usersArray.push(...usersData.data.results);
          localStorage.setItem('queriedData', JSON.stringify(usersArray));
          setUsers(usersArray);
          return usersArray;
        } else {
          const usersArrayCopy = [...users];
          const selectedFewerUsers = usersArrayCopy.filter((item, index) => index + 1 <= numberOfUsersToQuery);
          return selectedFewerUsers;
        }
      } catch {
        
      }
}