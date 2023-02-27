import React, { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Learner.css';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Learner() {
    const navigate = useNavigate();
    const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [signUp, setSignUp] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [guardianFirstName, setGuardianFirstName] = useState('');
    const [guardianLastName, setGuardianLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    const handleLogin = () => {
        if (emailValidationRegex.test(email)) {
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
                    } else {
                        wrongLogin();
                    }
                })
        }
        else {
            invalidEmail();
        }
    }

    const handleDOBChange = (event) => {
        const newDate = new Date(event.target.value);
        if (newDate < dateOfBirth) {
            setDateOfBirth(newDate);
        } else {
            validDOB();
        }
    };

    const handleRegister = () => {
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            requiredFields();
        } else {
            if (password != confirmPassword) {
                passwordsNotMatching();
            } else {
                if (emailValidationRegex.test(email)) {
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
                            type: 'Learner',
                            date_of_birth: dateOfBirth,
                            guardian_first_name: guardianFirstName,
                            guardian_last_name: guardianLastName
                        })
                    })
                        .then((Response) => Response.json())
                        .then((result) => {
                            if (result.status === 'success') {
                                userAdded();
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
    const wrongLogin = () => toast("Wrong Username or Password. Please Try Again.");
    const requiredFields = () => toast("Fill All Required Fields.");
    const passwordsNotMatching = () => toast("Passwords Do Not Match.");
    const validDOB = () => toast("Enter a Valid Date of Birth.");
    const invalidEmail = () => toast("Enter a Valid Email Address.");

    return (
        <div className='learner-container'>
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
                <div className="learner-login-section">
                    <div className="learner-login-section-title">Learner login</div>
                    <form className="learner-login-form">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <div className="learner-login-submit-button-container">
                            <button type='button' onClick={handleLogin} className="btn btn-primary learner-login-submit-button">Login</button>
                        </div>
                        <div className="learner-login-submit-text">
                            Don't have an account?&nbsp;
                            <text onClick={handleShowSignUp} className="learner-login-submit-text-link">Sign up here</text>
                        </div>
                    </form>
                </div>
                :
                <>
                    <div className="learner-sign-up-main-section">
                        <div className="learner-sign-up-section-title">Learner Sign up</div>

                        <div className="learner-sign-up-big-section">

                            <div className="learner-sign-up-left-section">
                                <form className="learner-sign-up-form">
                                    <div className="form-group">
                                        <label for="inputEmailAddress">Email address</label> <div className="learner-required-text"> *</div>
                                        <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email address" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPassword">Password</label>   <div className="learner-required-text"> *</div>
                                        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputConfirmPassword">Confirm Password</label> <div className="learner-required-text"> *</div>
                                        <input type="password" onChange={e => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputDOB">Enter your Date of Birth</label> <div className="learner-required-text"> *</div>
                                        <input type="date" value={dateOfBirth.toISOString().substring(0, 10)} onChange={handleDOBChange} className="form-control" />
                                    </div>
                                </form>
                            </div>

                            <div className="learner-sign-up-right-section">
                                <form className="learner-sign-up-form">
                                    <div className="form-group">
                                        <label for="inputGuardianFirstname">Guardian Firstname</label>
                                        <input type="name" onChange={e => setGuardianFirstName(e.target.value)} className="form-control" placeholder="e.g. Olivia" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputGuardianSurname">Guardian Surname</label>
                                        <input type="name" onChange={e => setGuardianLastName(e.target.value)} className="form-control" placeholder="e.g. Jones" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputLearnerFirstname">Learner Firstname</label> <div className="learner-required-text"> *</div>
                                        <input type="name" onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="e.g. Bob" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputLearnerSurname">Learner Surname</label> <div className="learner-required-text"> *</div>
                                        <input type="name" onChange={e => setLastName(e.target.value)} className="form-control" id="inputLearnerSurname" placeholder="e.g. Smith" />
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="learner-sign-up-submit-button-container">
                            <button type="button" onClick={handleRegister} className="btn btn-primary learner-sign-up-submit-button">Sign up</button>
                        </div>

                        <div className="learner-sign-up-submit-text"> Already have an an account?&nbsp;
                            <text onClick={handleHideSignUp} className="learner-sign-up-submit-text-link">Login here</text>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Learner;
