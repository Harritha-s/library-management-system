import React,{useState} from 'react'
import Login from './Login';
import {Link} from 'react-router-dom';
import mail from "./images/email.png";
import password from "./images/password.png";
import avatar from "./images/avatar1.jpg";


function Registration() {

    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        name:"",
        email:"",
        password:"",

    });

    let register = (e) =>{
        e.preventDefault()

        if (!Info.name || !Info.email || !Info.password ) {
            alert("Complete all the fields!!!")
            return
        }
    }

    return (
        <form onSubmit={register}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>Registration</h1>
                            <div>
                                <img src={avatar} alt="emial" className='email' />
                                <input type="text" placeholder='Enter Name' className='fill' />
                            </div>
                            <div className='mail-id'>
                                <img src={mail} alt="emial" className='email' />
                                <input type="email" placeholder='Enter Email-id' className='fill' />
                            </div>
                            <div className='mail-id'>
                                <img src={password} alt="emial" className='email' />
                                <input type="password" placeholder='Enter New Password' className='fill' />
                            </div>

                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit">Register</button>
                                </Link>
                            </div>
                            <div className='register-link'>
                                <p>If Account exist then</p><Link className='link' to='/login'><li>Login!!!</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration;