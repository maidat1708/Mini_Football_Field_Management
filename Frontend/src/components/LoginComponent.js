import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function LoginComponent(props) {
    const navigate = useNavigate()
    const [acc, setAcc] = useState({
        username: "abc",
        password: "123"
    })
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("a");
        await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(acc),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.username !== null) {
                    toast.success('Login success')
                    navigate("/products", { replace: true });
                }
                else {
                    toast.error('Login false')
                }
            })
            .catch((error) => {
                // handle error
                console.error(error);
            });
    };

    return (
        <section className="vh-100">
            <div className="pt-5 container-fluid h-custom">
                <div className="pt-5 row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="mt-5 col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={(e) => handleLogin(e)} method='POST'>
                            <div className="form-outline mb-4">
                                <input type="username" id="form3Example3" value={acc.username} className="form-control form-control-lg"
                                    placeholder="Enter a valid username" onChange={(e) => setAcc(prevState => ({ ...prevState, username: e.target.value }))} />
                                <label className="form-label" >Username</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" value={acc.password} className="form-control form-control-lg"
                                    placeholder="Enter password" onChange={(e) => setAcc(prevState => ({ ...prevState, password: e.target.value }))} />
                                <label className="form-label" >Password</label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" >
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    styles="padding-left: 2.5rem; padding-right: 2.5rem;" >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
