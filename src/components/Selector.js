import { useState } from 'react';

export function Selector({ handleNumberOfUsersSelect, usersLength }) {
    return (
        <div className='selector-wrapper'>
            <h5>How Many Users Would You Like To Query?</h5>
            <select value={usersLength} onChange={(e) => handleNumberOfUsersSelect(e.target.value)} className='selector' name="users" id="users">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>
        </div>
    )
}