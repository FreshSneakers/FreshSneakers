import React from 'react';
import './SignUp.css'
import { BsPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";

const SignUp = () => {
    return (
        <div className="container-fluid">
            <main className="row">
                <section className="col-md-6" id="panel-left">
                    <div className="container align-self-center">
                        <div className="row mt-5">
                            <div className="col-12 logo-container d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-md-6 d-flex justify-content-center" id="panel-right">
                    <div className="login-container">
                        <form autoComplete='off' className="sign__form">
                            <img className="avatar" src="/img/perfil-auth.png" alt="perfil" />
                            <h2>Register</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <BsPersonFill/>
                                </div>
                                <div>
                                    <input className="input" type="text" nam="name" placeholder="Name" required/>
                                </div>
                            </div>
                            <div className="input-div two">
                                <div className="i">
                                    <BsEnvelopeFill/>
                                </div>
                                <div>
                                    <input className="input" type="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="input-div two">
                                <div className="i">
                                    <BsFillLockFill/>
                                </div>
                                <div>
                                    <input className="input" type="password" name="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="input-div two">
                                <div className="i">
                                    <BsFillHouseDoorFill/>
                                </div>
                                <div>
                                    <input className="input" type="text" name="addres" placeholder="Address" required />
                                </div>
                            </div>
                        
                            <input className="btn__log" type="submit" value="Login" />
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SignUp;