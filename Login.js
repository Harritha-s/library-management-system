import React, {useState} from 'react'
import Registration from './Registration';
import {Link} from 'react-router-dom';
import email from "./images/email.png";
import password from "./images/password.png";
import avatar from "./images/avatar1.jpg";


function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    return (
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={avatar} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div>
                            <h1 className='Header'>Login</h1>
                            <div>
                                <img src={email} alt="emial" className='email' />
                                <input type="email" placeholder='Enter Email-id' className='fill' />
                            </div>
                            <div className='second-input'>
                                <img src={password} alt='password' className='email' />
                                <input type="password" placeholder='Enter Password' className='fill' />
                            </div>
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="button">Login</button>
                                </Link>
                            </div>
                            <div className='register-link'>
                                <Link className='link' to='/registration'>
                                    <li>Register Now</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;