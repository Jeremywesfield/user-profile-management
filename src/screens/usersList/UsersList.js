import { FirstRow } from "./components/FirstRow";
import { UserRow } from "./components/UserRow";
import { Selector } from "./components/Selector";
import { getUsers } from "../../common/getUsers";
import { useState } from "react";

export function UsersList({ users, setUsers }) {

    const [filteredUsersToDisplay, setFilteredUsersToDisplay] = useState([]);

    const handleNumberOfUsersSelect = (numberOfUsersToQuery) => {
        const data = getUsers({ users, numberOfUsersToQuery, setUsers }).then(res => {
            setFilteredUsersToDisplay(res)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const userList = users.length ? users.map((user, index) => {
        return <UserRow user={user} index={index} key={index} users={users} setUsers={setUsers} />
    }) : null;

    const filteredUserList = filteredUsersToDisplay.length ? filteredUsersToDisplay.map((user, index) => {
        return <UserRow user={user} index={index} key={index} users={users} setUsers={setUsers} />
    }) : null;

    return (
        <div className='page-container'>
            <Selector usersLength={filteredUsersToDisplay.length ? filteredUsersToDisplay.length : users.length} handleNumberOfUsersSelect={handleNumberOfUsersSelect} />
            <form onSubmit={(e) => handleSubmit(e)}>
                <ul className='list-container'>
                    <FirstRow />
                    {filteredUserList ? filteredUserList : userList}
                </ul>
            </form>
        </div>
    )
}