import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import UserCard from '../../components/UserCard/UserCard';
import useAuth from '../../hooks/useAuth';
import "./user.css";

const User = () => {
    const {user,isLoading,setIsLoading}=useAuth({});
    const [myevents,setMyevents]=useState([]);
    const [loading,setLoading]=useState(true);
    const navigate = useNavigate();

    if(user.email==null){
        user.email=user?.uid;
    }

    useEffect(()=>{
        fetch(`https://forhumanity-server.herokuapp.com/myevents?email=${user.email}`,{
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
            setLoading(false)
        })
    },[])
console.log(myevents);
    
//console.log(user?.email);
    

    return (
        <div className='container-fluid' style={{minHeight:"73vh"}}>
            <img className='user-dp mt-5' src={user?.photoURL} alt="" />
            <h1 className='text-center my-3'>{user?.displayName.toUpperCase()}</h1>
            { loading?<LoadingSpinner/>:myevents.length === 0 ? (
          <div
            className="text-center"
            style={{ minHeight: "5vh" }}
          >
            <h1 className="text-center" style={{ color: "gray" }}>
              You didn't register to any event! Please Register ! ! !
            </h1>
            <Link to='/register'> Go to Register </Link>
          </div>
        ):(
                 <div className='row container-fluid gy-5 my-5'>
                    {
                        myevents?.map(myevent=><UserCard key={myevent._id} myevent={myevent}></UserCard>
                        )
                    }
                 </div>
            )
               
            }
        </div>
    );
};

export default User;