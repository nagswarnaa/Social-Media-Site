import React, { Component } from 'react';
const LoginForm = () => {
    return (<form>
        <h3>Login Component</h3>
        <div class="mx-auto w-25 p-3">
            <label for="username" class="form-label">User Name</label>
            <input type="username" class="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary ">Submit</button>
    </form>);
}
export default LoginForm;