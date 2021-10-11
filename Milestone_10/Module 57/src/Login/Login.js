import React from 'react';

const Login = (props) => {
    return (
        <>
        <h1 className="text-primary">Plase Register</h1>
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
        </>
    );
};

export default Login;