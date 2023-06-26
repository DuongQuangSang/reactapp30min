import React from 'react'
import '../style.scss'

export default function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='display name'></input>
                    <input type='email' placeholder='email'></input>
                    <input type='password' placeholder='password'></input>
                    <input style={{display:"none"}} type='file' id='file'></input>
                    <label htmlFor='file'>
                        <img src='' alt=''></img>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}