import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
// import Status from './Status';

const Profile = (props) => {
    const onSubmit = (FormData) => {
        alert(FormData);
    }
    return <>
        {/* <Status  status="status" /> */}
        <ProfileStatusWithHooks status="status" />
        <LoginForm  onSubmit={onSubmit} />
    </>
}

export default Profile;