import { FirstRow } from "./FirstRow";
import { UserRow } from "./UserRow";
import { Selector } from "./Selector";
import { getUsers } from "../common/getUsers";

export function UsersList({ users, setUsers }) {

    const handleNumberOfUsersSelect = (numberOfUsersToQuery) => {
        const data = getUsers(users.length, numberOfUsersToQuery).then(res => setUsers(res));
    }

    const userList = users.map((user, index) => {
        return <UserRow user={user} index={index} key={index} />
      });

    return (
        <div className='page-container'>
            <Selector usersLength={users.length} handleNumberOfUsersSelect={handleNumberOfUsersSelect} />
            <ul className='list-container'>
                <FirstRow />
                {userList}
            </ul>
        </div>
    )
}