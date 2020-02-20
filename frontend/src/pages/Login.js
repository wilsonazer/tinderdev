import React, { useState } from 'react'
import './Login.css'

 function Login() {

    const [ userName, setUserName ] = useState('')

    function handleInput(e) {
        setUserName( e.target.value )
    }

    function handleSubmit(e){
        e.preventDefault()
        
    }

    return(
            <div className='form-login'>
                <h1 className='logo'>TindDev</h1>
                <form onSubmit={ handleSubmit }>
                    <input 
                    type='text' 
                    name='login' 
                    placeholder='Digite seu usuário no Github'
                    value= { userName }
                    onChange={ e => handleInput(e) }
                    />
                    <button type='submit' name='login'>Login</button>
                </form>
            </div>
    )
}

export default Login