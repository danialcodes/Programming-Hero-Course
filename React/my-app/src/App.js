// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
      <ExternalUsers></ExternalUsers> */}
      <LoadComments></LoadComments>
    </div>
  );
}
function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);
  return (
    <div id='commentBox'>
      {
        comments.map(comment => (<ShowComments id={comment.id} name={comment.name} email={comment.email} body={comment.body}></ShowComments>))
      }
    </div>
  );

}
function ShowComments(props) {
  const [id,setId] = useState(props.id);
  const increaseId = () => setId(id+1);
  const decreaseId =  () => setId(id-1);
  return (
     <div id='comment'>
       <h1>Name: {props.name}</h1>
       <h3>Id: {id}</h3>
       <h4>Email: {props.email}</h4>
       <p>{props.body}</p>
       <button onClick={increaseId}>Increase ID</button>
       <button onClick={decreaseId}>Decrease ID</button>
     </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div >
      <h1>External Users</h1>
      {
        users.map(user => (<User name={user.name} email={user.email}>
        </User>))
      }
    </div>
  );

}
function User(props) {
  return (
    <div className='Person'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
{/* <Person name='Danial Islam' study="Brac University"></Person>
      <Person name='Nishat Tasnim' study="Brac University"></Person>
      <Person name='Danial Islam' study="Brac University"></Person> */}
function Person(props) {
  const person = {
    border: '2px solid red',
    backgroundColor: "rgb(211, 28, 7)",
    margin: "10px",
    borderRadius: "20px"
  };
  return (
    <div className="Person" style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Study: {props.study}</h4>
    </div>
  );
}
export default App;
