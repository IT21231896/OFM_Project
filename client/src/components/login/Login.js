import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import css from './styles/Login.module.css'

//import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //let navigate = useNavigate();

    function login(e) {
        e.preventDefault();
    
        if (email.trim() === '' || password.trim() === '') {
            alert("Please fill out all fields.");
            return;
        }
    
        const user = {
            email,
            password
        }
    
        axios.post("http://localhost:8000/login/login", user)
        .then(() => {
            alert("User Logged Successfully");
            // navigate('/home-page');
        })
        .catch(err => {
            alert(err);
        })
    }
    

    return (
        <div className={css.wrapper}>
            {/* <span className={css.icon_close}><ion-icon name="close"></ion-icon></span> */}
            <div className={css.form_box}>
                <h2>Admin Login</h2>
                <form onSubmit={login}>
                    <div className={css.input_box}>
                        <span className ={css.icon}><ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" required onChange={(e) => {setEmail(e.target.value)}} />
                        <label>Email</label>
                    </div>
                    <div className={css.input_box}>
                        <span className ={css.icon}><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="Password" required onChange={(e) => {setPassword(e.target.value)}}/>
                        <label>Password</label>
                    </div>
                    <div>
                        <div className={css.remember_forgot}>
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <Link to="/home-page">
                        <button type="submit" className={css.btn}>Login</button>
                        </Link>
                        <div className={css.login_register}>
                            <p>Don't have an account?<Link to="/register" className={css.register_link}> Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login