
import './App.css';
import initializeAuth from './Firebase/firebase.initialize';
import { signOut, getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';

initializeAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const userSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({});    
    }).catch((error) => {
      // An error happened.
    });
  }

  const googleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          img: photoURL
        }
        setUser(loggedInUser);
      })
      .catch(error =>
        console.log(error.message))
  }
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          img: photoURL
        }
        setUser(loggedInUser);
      })
      .catch(error =>
        console.log(error.message))
  }
  return (
    <div className="App">
      {
        !user.name ? <><button className="mt-5" onClick={googleSignIn}>Google Sign In</button><button className="m-5" onClick={githubSignIn}>Github Sign In</button></>:<button className="m-5" onClick={userSignOut}>Sign Out</button>
      }
      
      
      {/* <BrowserRouter>
        <Link to="/check/20101534/cse">Go to Check</Link>
        <Switch>
          <Route path="/check/:id/:dept">
            <Check></Check>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>

        </Switch>
      </BrowserRouter> */}
      {
        user.email && <div>
          <h1>Welcome {user.name}</h1>
          <p>Email {user.email}</p>
          <img src={user.img} alt="" srcSet="" />
        </div>
      }
    </div>
  );
}

export default App;
