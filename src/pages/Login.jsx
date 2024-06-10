import React from 'react'
import Add from '../images/add.png'
const Login = () =>{
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className='logo'>WhatsOn</span>
            <span className='title'>Login</span>
                <form>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
                <p>Don't have an account? Sign Up</p>
            </div>
        </div>

    )
}

export default Login

