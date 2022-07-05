import React, { Component } from 'react';
const LoginForm = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        userName: '',
        Password: ''
    })
    const { userName, Password } = user

    const onChange = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    })
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData('/user/login', {
            userName,
            Password
        }, "POST").then((data) => {
            if (!data.message) {
                navigate("/profile")
            }
        }).catch((error) => {
            console.log(`Error ${error.message}`)
        })
    }
    return (<form onSubmit={onSubmit}>
        <h3>Login Component</h3>
        <div class="mx-auto w-25 p-3">
            <label for="username" class="form-label">User Name</label>
            <input type="username" onChange={onChange} name="userName" class="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" onChange={onChange} name="Password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary ">Submit</button>
    </form>);
}
export default LoginForm;