import React from 'react';
import useAuth from '../../hooks/useAuth';
import "./user.css";

const User = () => {
    const {user,isLoading}=useAuth()

    let photo=user.reloadUserInfo.photoUrl;
    return (
        <div className='container-fluid' style={{minHeight:"73vh"}}>
            <img className='user-dp mt-5' src={photo} alt="" />
            <h1 className='text-center my-3'>{user?.displayName.toUpperCase()}</h1>
        </div>
    );
};

export default User;