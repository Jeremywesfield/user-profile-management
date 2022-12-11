import axios from 'axios';

export const getUsers = async (usersLength, numberOfUsersToQuery) => {
  try {
        const users = await axios.get(`https://randomuser.me/api/?results=${numberOfUsersToQuery}`);
        const usersArray = users.data.results;

        if (numberOfUsersToQuery > usersLength) {
          localStorage.setItem('queriedData', JSON.stringify(usersArray));
        } else {
          usersArray.slice(0,numberOfUsersToQuery);
          localStorage.setItem('queriedData', JSON.stringify(usersArray));
        }

        return usersArray;
      } catch {
        
      }
}