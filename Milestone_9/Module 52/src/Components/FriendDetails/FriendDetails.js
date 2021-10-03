import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from "react-router-dom";

const FriendDetails = () => {
    const {friendId} = useParams();
    // console.log(params);
    const [user,setUser] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setUser(data));
    },[friendId]);
    const history = useHistory();
    const seeAll = ()=>{
        history.push("/friends");
    }
    return (
        <div>
            <h1>I am {user.name}</h1>
            <h3>My email {user.email}</h3>
            <h3>My phone {user.phone}</h3>
            <button onClick={seeAll}>See all friends</button>
        </div>
    );
};

export default FriendDetails;