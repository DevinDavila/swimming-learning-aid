import React, { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Admin.css';
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    const [signUp, setSignUp] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    const handleLogin = () => {
        fetch('http://localhost:5000/api/authentication/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((Response) => Response.json())
            .then((result) => {
                if (result.status === 'success') {
                    sessionStorage.setItem('token', result.user.token);
                    sessionStorage.setItem('email', email);
                    navigate('/stages');
                }
            })
    }

    const handleRegister = () => {
        if (password != confirmPassword) {
            console.log("Passwords don't match!")
        } else {
            fetch('http://localhost:5000/api/authentication/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                type: 'Admin',
                status: 'Pending'
            })
        })
            .then((Response) => Response.json())
            .then((result) => {
                if (result.status === 'success') {
                    console.log(result.status)
                }
            })
        }
    }

    return (
        <div className='admin-container'>
            <BackButton />
            {!signUp ?
                <div class="admin-login-section">
                    <div class="admin-login-section-title">Admin login</div>
                    <form class="admin-login-form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="admin-login-submit-button-container">
                            <button type="button" onClick={handleLogin} class="btn btn-primary admin-login-submit-button">Login</button>
                        </div>
                        <div class="admin-login-submit-text">
                            Don't have an account?&nbsp;
                            <text href="#" onClick={handleShowSignUp} class="admin-login-submit-text-link">Sign up here</text>
                        </div>
                    </form>
                </div>
                :
                <div class="admin-sign-up-main-section">
                    <div class="admin-sign-up-section-title">Admin Sign up</div>
                    <div class="admin-sign-up-big-section">
                        <div class="admin-sign-up-left-section">
                            <form class="admin-sign-up-form">
                                <div class="form-group">
                                    <label for="inputEmailAddress">Email address</label> <div class="admin-required-text"> *</div>
                                    <input type="email" onChange={e => setEmail(e.target.value)} class="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Enter email address" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Password</label>   <div class="admin-required-text"> *</div>
                                    <input type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="inputConfirmPassword">Confirm Password</label> <div class="admin-required-text"> *</div>
                                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
                                </div>
                            </form>
                        </div>

                        <div class="admin-sign-up-right-section">
                            <form class="admin-sign-up-form">
                                <div class="form-group">
                                    <label for="inputAdminFirstname">Admin Firstname</label> <div class="admin-required-text"> *</div>
                                    <input type="name" onChange={e => setFirstName(e.target.value)} class="form-control" id="inputAdminFirstname" placeholder="e.g. Bob" />
                                </div>
                                <div class="form-group">
                                    <label for="inputAdminSurname">Admin Surname</label> <div class="admin-required-text"> *</div>
                                    <input type="name" onChange={e => setLastName(e.target.value)} class="form-control" id="inputAdminSurname" placeholder="e.g. Smith" />
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="admin-sign-up-submit-button-container">
                        <button type="button" onClick={handleRegister} class="btn btn-primary admin-sign-up-submit-button">Sign up</button>
                    </div>

                    <div class="admin-sign-up-submit-text"> Already have an an account?&nbsp;
                        <text onClick={handleHideSignUp} class="admin-sign-up-submit-text-link">Login here</text>
                    </div>
                </div>
            }
        </div>
    );
}

export default Admin;