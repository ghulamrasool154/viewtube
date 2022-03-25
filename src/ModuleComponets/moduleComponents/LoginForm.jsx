import React, { useContext } from 'react'
import Button from '../../AbstructComponents/absComponent/Button'
import InputFiled from '../../AbstructComponents/absComponent/InputFiled'
import '../moduleStyleComponets/LoginForm.css'
import { ThemeContext } from '../../ThemeDark'
const LoginForm = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    return (
        <>

            <div className="my-account-content" style={{ backgroundColor: darkmode ? '#111' : 'white' }}>
                <div className="header-profile-login">
                    <h6 className="text-center" style={{ color: darkmode ? "white" : "#444" }}>Log In to Your Account</h6>
                    {/* <form name="loginform" id="loginform" action="#" method="post"> */}
                    <p className="login-username">
                        <label htmlFor="user_login" style={{ color: darkmode ? "white" : "#444" }}>Username or Email Address</label>
                        <InputFiled
                            type='text'
                            name="log"
                            placeholder=''
                            id="user_login"
                            style={{ color: darkmode ? "white" : "#444" }}


                        />

                        {/* <input type="text" name="log" id="user_login" className="input" value="" size="20" /> */}
                    </p>
                    <p className="login-password">
                        <label htmlFor="user_pass" style={{ color: darkmode ? "white" : "#444" }}>Password</label>
                        {/* <input type="password" id="user_pass" name="pwd" /> */}
                        <InputFiled
                            type='password'
                            name="pwd"
                            placeholder=''
                            id="user_pass"

                        />
                    </p>
                    <p className="login-remember" style={{ color: darkmode ? "white" : "#444" }}><label>
                        <input name="rememberme" type="checkbox" id="rememberme" value="forever" style={{ color: darkmode ? "white" : "#444" }} /> Remember Me</label></p>
                    <p className="login-submit">

                        <Button cls='btn' text='Log In' />

                    </p>
                    {/* </form> */}
                </div>
            </div>
        </>
    )
}

export default LoginForm