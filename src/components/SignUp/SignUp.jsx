import React from 'react';

import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Sign Up</h2>

            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Enter Your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm password' required />
                </div>

                <input className='btn-submit' type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default SignUp;