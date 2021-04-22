import React, { useState } from 'react';
import './SignUp.css'
import { BsPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";

//eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const validators = {

    name: (value) => {
        let message;

        if (!value) {
            message = 'Name is required'
        }
        return message
    },
    email: (value) => {
        let message;

        if (!value) {
            message = 'Email is required'
        } else if (!EMAIL_PATTERN.test(value)) {
            message = 'Email is invalid'
        }
        return message
    },
    password: (value) => {
        let message;

        if (!value) {
            message = 'Password is required'
        } else if (!PASSWORD_PATTERN.test(value)) {
            message = 'Password is invalid'
        }
        return message
    },

    address: (value) => {
        let message;

        if (!value) {
            message = 'Address is required'
        }
        return message
    }

}

const SignUp = () => {

    const [state, setState] = useState({
        fields: {
            name: '',
            email: '',
            password: '',
            address: ''
        },
        errors: {
            name: validators.name(),
            email: validators.email(),
            password: validators.password(),
            address: validators.address()
        }
    })

    const [touched, setTouched] = useState({})

    const onChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
            fields: {
                ...prevState.fields,
                [name]: value
            },
            errors: {
                ...prevState.errors,
                [name]: validators[name] && validators[name](value)
            }
        }))
    }

    const onBlur = (e) => {
        const { name } = e.target

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true
        }))
    }

    const onFocus = (e) => {
        const { name } = e.target

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: false
        }))
    }

    const isValid = () => {
        const { errors } = state
        return !Object.keys(errors).some(error => errors[error])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (isValid()) {
            console.log(state.fields)
        }
    }


    const { name, email, password, address } = state.fields
    const { errors } = state

    return (
        <div className="container-fluid">
            <main className="row signup__main">
                <section className="col-md-6" id="signup__panel__left" />

                <section className="col-md-6 d-flex justify-content-center" id="signup__panel__right">
                    <div className="signup__container">
                        <form onSubmit={onSubmit} autoComplete='off' className="sign__form">
                            <img className="signup__avatar" src="/img/perfil-auth.png" alt="perfil" />
                            <h2>Register</h2>
                            <div className="signup__input__div one">
                                <div className="i">
                                    <BsPersonFill />
                                </div>
                                <div>
                                    <input
                                        className={`signup__input ${errors.name && touched.name ? 'is-invalid' : ''}`}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        onFocus={onFocus}
                                        required />
                                </div>
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="signup__input__div two">
                                <div className="i">
                                    <BsEnvelopeFill />
                                </div>
                                <div>
                                    <input className={`signup__input ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        onFocus={onFocus}
                                        required />
                                </div>
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="signup__input__div two">
                                <div className="i">
                                    <BsFillLockFill />
                                </div>
                                <div>
                                    <input className={`signup__input ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        onFocus={onFocus}
                                        required />
                                </div>
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="signup__input__div two">
                                <div className="i">
                                    <BsFillHouseDoorFill />
                                </div>
                                <div>
                                    <input className={`signup__input ${errors.address && touched.address ? 'is-invalid' : ''}`}
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={address}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        onFocus={onFocus}
                                        required />
                                </div>
                                {errors.address && (
                                    <div className="invalid-feedback">
                                        {errors.address}
                                    </div>
                                )}
                            </div>

                            <input className="signup__btn" type="submit" value="Sign up"/>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SignUp;