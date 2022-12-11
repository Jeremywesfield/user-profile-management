export function UserRow({ user, index }) {

    return (
        <li>
            <div className="user-row">
                <h5 className='row-item' style={{ width: '70px' }}>
                    {index + 1}
                </h5>
                <h5 className='row-item'>
                    {user?.name?.first}
                </h5>
                <h5 className='row-item'>
                    {user?.name?.last}
                </h5>
                <h5 className='row-item' style={{ color: 'blue', width: '265px' }}>
                    {user.email}
                </h5>
                <h5 className='row-item'>
                    {user.phone}
                </h5>
                <h5 className='row-item'>
                    {user.gender}
                </h5>
                <h5 className='row-item'>
                    Update
                </h5>
                <h5 className='row-item'>
                    Delete
                </h5>
            </div>
        </li>
    );
}