import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Person from '../Person/Person';

const People = (props) => {
    const [people,setPeople] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
        .then(res=>res.json())
        .then(data=>setPeople(data));
    },[]);
    return (
        <div>
            {
                people.map(person =><Person 
                    key={person.id} person={person}
                >
                </Person>)
            }
        </div>
    );
};

export default People;