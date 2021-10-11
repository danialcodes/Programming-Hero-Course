import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import Authentication from "./Firebase/firebase.Authentication";
Authentication();
const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [IsLogin, setIsLogin] = useState(false);

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      });

  }

  const emailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        setError("");
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // ----------------------------------------------------
  const emailSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in 
        console.log(email, password);
        console.log(result);
        setError("");
        verifyEmail();
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }
  const googleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      }).catch((error) => {
        console.log(error);
      });
  }
  const toggle = e => {
    e.target.checked ? setIsLogin(true) : setIsLogin(false);
  }


  const registration = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
    if (!regex.test(password)) {
      setError("Password Must be 6 Charector long!!");
      return;
    }
    emailSignUp();

  }
  const logIn = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
    if (!regex.test(password)) {
      setError("Password Must be 6 Charector long!!");
      return;
    }
    emailSignIn();

  }
  const emailHandle = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  }
  const passwordHandle = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  }
  const resetPass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {

        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className="App mx-5">
      {/* <form onSubmit={registration}>
        <h3>Please Register</h3>
         <label htmlFor="email">Email: 
           <input type="text" name="email" />
         </label>
         <br />
         <label htmlFor="password">Password: 
           <input type="password" name="password" />
         </label>
         <br />
         <input type="submit" value="Register" />
       </form> */}
      <form onSubmit={IsLogin ? logIn : registration}>
        <h1 className="text-primary">{IsLogin ? "Please Login" : "Plase Register"}</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input onBlur={emailHandle} type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input onBlur={passwordHandle} type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input onChange={toggle} class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Already Member?
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-3 text-danger">{error}</div>
        <button type="submit" class="btn btn-primary">{IsLogin ? "Sign in" : "Sign Up"}</button>
        <button onClick={()=>resetPass(email)} class="btn mx-5 btn-primary">Reset PassWord</button>
      </form>

      <div>------------------------</div>
      <button onClick={googleSignUp}>Sign Up With Google</button>



    </div>
  );
}

export default App;
