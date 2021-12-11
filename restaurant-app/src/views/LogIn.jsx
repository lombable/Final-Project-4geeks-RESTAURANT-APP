import { React, useContext, useState } from "react";
import "bootstrap";
import '../App.css';
import Navbar from "../components/Navbar";
import { Context } from '../store/appContext'
import { useHistory } from "react-router-dom";

const Login = () => {

    const { store, actions } = useContext(Context)

    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        actions.login(formData, history)
    }


    return (
        <>


            <Navbar />
            <div className="row pt-5 mt-5 d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: "#d4d6d9" }}>
                <div className="col col-xl-10">
                    <div className="card" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                    alt="login form"
                                    className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }}
                                />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">

                                    <form onSubmit={handleSubmit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <span className="h1 fw-bold mb-0">Welcome back!</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example17" name="email" className="form-control form-control-lg" onChange={handleChange} />
                                            <label className="form-label" for="form2Example17">Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example27" name="password" className="form-control form-control-lg" onChange={handleChange} />
                                            <label className="form-label" for="form2Example27">Password</label>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                        </div>
                                        {
                                            store.error !== null && (
                                                <div className="alert alert-danger" role="alert">
                                                    {store.error}
                                                </div>)
                                        }
                                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/worker-register" style={{ color: "#393f81" }}>Register here</a></p>

                                        <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>)
}

export default Login;