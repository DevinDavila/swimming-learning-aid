import React, { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Admin.css';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Admin() {
    const navigate = useNavigate();
    const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [signUp, setSignUp] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    const handleLogin = () => {
        if (emailValidationRegex.test(email)) {
            fetch('http://176.58.96.143:5000/api/authentication/login', {
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
                        navigate('/adminView');
                    } else {
                        wrongLogin(result.error);
                    }
                })
        }
        else {
            invalidEmail();
        }
    }

    const handleRegister = () => {
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            requiredFields();
        } else {
            if (password != confirmPassword) {
                passwordsNotMatching();
            } else {
                if (emailValidationRegex.test(email)) {
                    fetch('http://176.58.96.143:5000/api/authentication/register', {
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
                                userAdded();
                                setSignUp(false);
                                setFirstName('');
                                setLastName('');
                                setEmail('');
                                setPassword('');
                                setConfirmPassword('');
                            } else {
                                userExists();
                            }
                        })
                }
                else {
                    invalidEmail();
                }
            }
        }
    }

    // Alerts
    const userAdded = () => toast("User Added Successfully!");
    const userExists = () => toast("User Already Exists. Try Logging In.");
    const wrongLogin = (result) => toast(result);
    const requiredFields = () => toast("Fill All Required Fields.");
    const passwordsNotMatching = () => toast("Passwords Do Not Match.");
    const invalidEmail = () => toast("Enter a Valid Email Address.");

    return (
        <div className='admin-container'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <BackButton />
            {!signUp ?
                <div className="admin-login-section">
                    <div className="admin-login-section-title">Admin login</div>
                    <form className="admin-login-form">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <div className="admin-login-submit-button-container">
                            <button type="button" onClick={handleLogin} className="btn btn-primary admin-login-submit-button">Login</button>
                        </div>
                        <div className="admin-login-submit-text">
                            Don't have an account?&nbsp;
                            <div href="#" onClick={handleShowSignUp} className="admin-login-submit-text-link">Sign up here</div>
                        </div>
                    </form>
                </div>
                :
                <div className="admin-sign-up-main-section">
                    <div className="admin-sign-up-section-title">Admin Sign up</div>
                    <div className="admin-sign-up-big-section">
                        <div className="admin-sign-up-left-section">
                            <form className="admin-sign-up-form">
                                <div className="form-group">
                                    <label>Email address</label> <div className="admin-required-text"> *</div>
                                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email address" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>   <div className="admin-required-text"> *</div>
                                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label> <div className="admin-required-text"> *</div>
                                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password" />
                                </div>
                            </form>
                        </div>

                        <div className="admin-sign-up-right-section">
                            <form className="admin-sign-up-form">
                                <div className="form-group">
                                    <label>Admin Firstname</label> <div className="admin-required-text"> *</div>
                                    <input type="name" onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="e.g. Bob" />
                                </div>
                                <div className="form-group">
                                    <label>Admin Surname</label> <div className="admin-required-text"> *</div>
                                    <input type="name" onChange={e => setLastName(e.target.value)} className="form-control" placeholder="e.g. Smith" />
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="admin-sign-up-submit-button-container">
                        <button type="button" onClick={handleRegister} className="btn btn-primary admin-sign-up-submit-button">Sign up</button>
                    </div>

                    <div className="admin-sign-up-submit-text"> Already have an an account?&nbsp;
                        <div onClick={handleHideSignUp} className="admin-sign-up-submit-text-link">Login here</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Admin;