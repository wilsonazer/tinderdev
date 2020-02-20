import React from 'react'
import './Login.css'

const Login = () =>(
    <div>
        <h1 className='logo'>Login</h1>
        <form>
            <input type='text' name='login' placeholder='Informe seu login'/>
            <button type='submit' name='login'>Login</button>
        </form>
    </div>
)

export default Login