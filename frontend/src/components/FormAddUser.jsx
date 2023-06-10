import React from 'react'

const FormAddUser = () => {
  return (
    <div>
        <h3 className="">Users</h3>
        <p className="">Add New User</p>
        <form className=''>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name='name'/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name='email'/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name='password'/>
            </div>
            <div class="mb-3">
                <label for="confpassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confpassword" name='confpassword'/>
            </div>
            <div className="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="admin">Admin</option>
                    <option value="user" selected>User</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary w-100">Save</button>
        </form>
    </div>
  )
}

export default FormAddUser