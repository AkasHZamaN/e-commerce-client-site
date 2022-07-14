import React from 'react';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                localStorage.setItem('accessToken', data.accessToken)
            }
            console.log(data);
        })
    }

    return (
        <div className='text-center my-12'>
            <form onSubmit={handleLogin}>
            <input className='input input-bordered input-primary w-full max-w-xs mt-6' type='email' name='email' placeholder='Email' /> <br />
            <input className='input input-bordered input-primary w-full max-w-xs mt-6' type='password' name='password' placeholder='Password' /> <br />
            <input className='input-bordered bg-cyan-800 w-full max-w-xs mt-6 rounded-xl p-2 text-white uppercase' type='submit'value='Login' />
        </form>
        </div>
    );
};

export default Login;