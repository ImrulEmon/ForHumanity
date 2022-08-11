import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./user.css";

const User = () => {
    const {user,isLoading}=useAuth();
    const [myevents,setMyevents]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myevents?email=a@b.com`)
        .then(res=>res.json())
        .then(data=>{
            setMyevents(data)
        })
    },[])
console.log(myevents);
    

    

    return (
        <div className='container-fluid' style={{minHeight:"73vh"}}>
            <img className='user-dp mt-5' src={user?.photoURL} alt="" />
            <h1 className='text-center my-3'>{user?.displayName.toUpperCase()}</h1>
            {
                myevents.map(myevent=><p className='text-center'>{myevent.FullName} | {myevent.Event} | {myevent.email}</p>
                )
            }
        </div>
    );
};

export default User;