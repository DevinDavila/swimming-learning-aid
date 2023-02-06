import React from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Admin.css';

function Admin() {
    const [signUp, setSignUp] = React.useState(false);

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    return (
        <div className='admin-container'>
            <BackButton />
            {!signUp ?
                <div class="admin-login-section">
                    <div class="admin-login-section-title">Admin login</div>
                    <form class="admin-login-form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="admin-login-submit-button-container">
                            <button type="submit" class="btn btn-primary admin-login-submit-button">Login</button>
                        </div>
                        <div class="admin-login-submit-text">
                            Don't have an account?
                            <a href="/#" onClick={handleShowSignUp} class="admin-login-submit-text-link">Sign up here</a>
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
                                        <input type="email" class="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Enter email address"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword">Password</label>   <div class="admin-required-text"> *</div>
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputConfirmPassword">Confirm Password</label> <div class="admin-required-text"> *</div>
                                        <input type="confirmPassword" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                </form>
                            </div>

                        <div class="admin-sign-up-right-section">
                            <form class="admin-sign-up-form">
                                <div class="form-group">
                                    <label for="inputAdminFirstname">Admin Firstname</label> <div class="admin-required-text"> *</div>
                                    <input type="name" class="form-control" id="inputAdminFirstname" placeholder="e.g. Bob"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputAdminSurname">Admin Surname</label> <div class="admin-required-text"> *</div>
                                    <input type="name" class="form-control" id="inputAdminSurname" placeholder="e.g. Smith"/>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="admin-sign-up-submit-button-container">
                        <button type="submit" class="btn btn-primary admin-sign-up-submit-button">Sign up</button>
                    </div>

                    <div class="admin-sign-up-submit-text"> Already have an an account?
                        <a href="/#" onClick={handleHideSignUp} class="admin-sign-up-submit-text-link">Login here</a>
                    </div>
                </div>
            }
        </div>
    );
}

export default Admin;