import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import "./Friend.css";

const Friend = (props) => {
    // console.log(props.friend);
    const {id,name,email,username,website} = props.friend;
    const url = `friend/${id}`;
    const history = useHistory();
    const btnClicked = ()=>{
        history.push(url);
    }
    return (
        <div className="friend">
            <h1>I am {name}</h1>
            <h3>My email {email}</h3>
            <button onClick={btnClicked}> Visit Me</button>
        </div>
    );
};

export default Friend;