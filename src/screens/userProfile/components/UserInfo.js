import profilePicture from '../../../images/profilePicture.png';
import femaleNotSelected from '../../../images/femaleNotSelected.png';
import femaleSelected from '../../../images/femaleSelected.png';
import maleNotSelected from '../../../images/maleNotSelected.png';
import maleSelected from '../../../images/maleSelected.png';
import googleMapDemo from '../../../images/googleMapDemo.png';
import { useState, useContext } from 'react';
import AppContext from '../../../contex/AppContext';

export function UserInfo() {
    const appContext = useContext(AppContext);
    const { gender, firstName, lastName, email, phone } = appContext.userProfile;

    return (
        <div className='user-info-container'>
            <div className='user-info-my-profile'>
                My Profile
            </div>
            <div className='user-info-profile-picture-wrapper'>
                <label className='profile-label-text'>Profile Picture</label>
                <img src={profilePicture} alt="profile-pic" width="70" height="70" />
            </div>
            <div className='user-name-wrapper'>
                <div className='name-container' >
                    <label className='profile-label-text'>
                        First name
                    </label>
                    <div className='profile-name-output profile-txt-outputs'>
                        {firstName}
                    </div>
                </div>
                <div className='name-container'>
                    <label className='profile-label-text'>
                        Last name
                    </label>
                    <div className='profile-name-output profile-txt-outputs'>
                        {lastName}
                    </div>
                </div>
            </div>
            <div className='email-phone-container'>
                <div className='name-container'>
                        <label className='profile-label-text'>
                            Email
                        </label>
                        <div className='profile-email-phone-outputs profile-txt-outputs'>
                            {email}
                        </div>
                    </div>
                <div className='name-container'>
                    <label className='profile-label-text'>
                        Phone
                    </label>
                    <div className='profile-email-phone-outputs profile-txt-outputs'>
                        {phone}
                    </div>
                </div>
            </div>
            <div className='name-container'>
                <label className='profile-label-text'>
                    Gender
                </label>
                <div>
                    <img src={gender == 'male' ? maleSelected : maleNotSelected} alt="male-button" width="90" height="40" />
                    <img src={gender != 'male' ? femaleSelected : femaleNotSelected} alt="female-button" width="100" height="40" style={{marginLeft: '10px'}} />
                </div>
            </div>
            <div className='location-wrapper'>
                <label className='profile-label-text'>
                    Location
                </label>
                <div  className='location-container'>
                    <img src={googleMapDemo} alt="google-map" className='map-dynamics' />
                </div>
            </div>
        </div>
    )
}