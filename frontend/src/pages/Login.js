import React from 'react'
import './Login.css'

const Login = () =>(
    <div className='form-login'>
        <h1 className='logo'>TindDev</h1>
        <form>
            <input type='text' name='login' placeholder='Digite seu usuário no Github'/>
            <button type='submit' name='login'>Login</button>
        </form>
    </div>
)

export default Login