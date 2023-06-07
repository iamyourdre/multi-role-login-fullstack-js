import React, { useEffect } from 'react';

const Login = () => {

  useEffect(()  => {
    document.body.classList.add('bg-primary');
  });

  return (
    <div className='container my-5'>
    <div className="bg-white shadow-sm rounded col-md-6 mx-auto">
      <form className='px-4 py-5'>
        <h2 className='text-center pb-2'>Login</h2>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" name='password'/>
          </div>
          <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Login