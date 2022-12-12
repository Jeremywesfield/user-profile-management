import { Graphic } from "./components/Graphic"
import { UserInfo } from "./components/UserInfo"

export function UserProfile() {
    return (
        <div className='profile-page-wrapper'>
            <div className='profile-page-container'>
                <div className='profile-page-left-half'>
                    <div className='divider'>
                        <UserInfo />
                    </div>
                </div>
                <div className='profile-page-right-half'>
                    <Graphic />
                </div>
            </div>
        </div>
    )
}