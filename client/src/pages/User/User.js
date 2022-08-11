import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./user.css";

const User = () => {
    const {user,isLoading}=useAuth({});
    const [myevents,setMyevents]=useState([]);
    const navigate = useNavigate();

    if(user.email==null){
        user.email=user?.uid;
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/myevents?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res=>{
            if(res.status===200){
                return res.json()
            }
            else if(res.status===401){
                navigate('/login')
            }
        })
        .then(data=>{
            setMyevents(data)
        })
    },[])
//console.log(myevents);
    
//console.log(user?.email);
    

    return (
        <div className='container-fluid' style={{minHeight:"73vh"}}>
            <img className='user-dp mt-5' src={user?.photoURL} alt="" />
            <h1 className='text-center my-3'>{user?.displayName.toUpperCase()}</h1>
            {
                myevents?.map(myevent=><p className='text-center'>{myevent?.FullName} | {myevent?.Event} | {myevent?.email}</p>
                )
            }
        </div>
    );
};

export default User;