import { FirstRow } from "./FirstRow";
import { UserRow } from "./UserRow";
import { Selector } from "./Selector";
import { getUsers } from "../common/getUsers";
import { useState } from "react";

export function UsersList({ users, setUsers }) {

    const [filteredUsersToDisplay, setFilteredUsersToDisplay] = useState([]);

    const handleNumberOfUsersSelect = (numberOfUsersToQuery) => {
        const data = getUsers({ users, numberOfUsersToQuery, setUsers }).then(res => {
            setFilteredUsersToDisplay(res)
        });
    }

    const userList = users.length ? users.map((user, index) => {
        return <UserRow user={user} index={index} key={index} />
    }) : null;

    const filteredUserList = filteredUsersToDisplay.length ? filteredUsersToDisplay.map((user, index) => {
        return <UserRow user={user} index={index} key={index} />
    }) : null;

    return (
        <div className='page-container'>
            <Selector usersLength={filteredUsersToDisplay.length ? filteredUsersToDisplay.length : users.length} handleNumberOfUsersSelect={handleNumberOfUsersSelect} />
            <ul className='list-container'>
                <FirstRow />
                {filteredUserList ? filteredUserList : userList}
            </ul>
        </div>
    )
}