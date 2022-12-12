import { useState } from "react";
import { Link } from "react-router-dom";

export function UserRow({ user, index, users, setUsers }) {

    const [firstName, setFirstName] = useState(user?.name?.first);
    const [lastName, setLastName] = useState(user?.name?.last);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [isDisable, setIsDisabled] = useState({ firstName: true, lastName: true, email: true, phone: true });

    if(!user.name) {
        return null;
    }

    const handleDoubleClick = (type) => {
        const disabledObj = { ...isDisable };
        disabledObj[type] = false;
        setIsDisabled(disabledObj)
    }

    const updateUser = () => {
        const usersCopy = [...users];
        usersCopy[index].name.first = firstName;
        usersCopy[index].name.last = lastName;
        usersCopy[index].email = email;
        usersCopy[index].phone = phone;
        localStorage.setItem('queriedData', JSON.stringify(usersCopy));
        setUsers(usersCopy);
        setIsDisabled({ firstName: true, lastName: true, email: true, phone: true });
    }

    const handleDelete = () => {
        const UsersCopyForDelete = [...users];
        for (const key in UsersCopyForDelete[index]) {
            delete UsersCopyForDelete[index][key];
          }
          localStorage.setItem('queriedData', JSON.stringify(UsersCopyForDelete));
          setUsers(UsersCopyForDelete);
    }

    const formatWord = (word) => word.replace(/^\w/, c => c.toUpperCase());

    return (
        <li>
            <div className="user-row">
                <Link style={{ textDecoration: 'none' }} to="/userProfile">
                    <label className='row-item' style={{ width: '70px', color: 'black' }}>
                        {index + 1}
                    </label>
                </Link>
                <label className='row-item' onDoubleClick={() => handleDoubleClick("firstName")}>
                    <input disabled={isDisable.firstName} className='hover' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}name='text'></input>
                </label>
                <label className='row-item' onDoubleClick={() => handleDoubleClick("lastName")}>
                    <input disabled={isDisable.lastName} className='hover' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}name='text'></input>
                </label>
                <label className='row-item' style={{ color: 'blue', width: '265px' }} onDoubleClick={() => handleDoubleClick("email")}>
                    <input disabled={isDisable.email} style={{ width: '100%' }} className='hover' type='text' value={email} onChange={(e) => setEmail(e.target.value)}name='text'></input>
                </label>
                <label className='row-item hover' onDoubleClick={() => handleDoubleClick("phone")}>
                    <input disabled={isDisable.phone} className='hover' type='text' value={phone} onChange={(e) => setPhone(e.target.value)}name='text'></input>
                </label>
                <label className='row-item'>
                    {formatWord(user.gender)}
                </label>
                <label className='row-item'>
                    <button onClick={updateUser}>Update</button>
                </label>
                <label className='row-item'>
                    <button onClick={handleDelete}>Delete</button>
                </label>
            </div>
        </li>
    );
}