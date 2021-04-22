import React, { useState } from "react";
import "../Auth/Login.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

//VALIDATORS-----------------

const validators = {
    email:(value)=> {
        let message;

        if(!value){
            message = 'Email is required'
        } else if (!EMAIL_PATTERN.test(value)){
            message = 'Email is invalid'
        }
        return message;
    },
    password:(value)=> {
        let message;

        if(!value){
            message = 'Password is required'
        }else if(!PASSWORD_PATTERN.test(value)){
            message = 'Password must have 8 characters or more'
        }
        return message
    }
}

const Login = () => {
     const [state,setState] = useState({
        fields:{
            email:'',
            password:''
        },
        errors:{
            email:validators.email(),
            password:validators.password()
        }
    })

    const [touched,setTouched] = useState({})

    const isvalid = ()=> {
        const {errors}= state
        return !Object.keys(errors).some(error =>errors[error])
    }

    const onSubmit = (e)=> {
        const {fields} = state
        e.preventDefault()

        if(isvalid()){
            console.log(fields)
        }
    }

    const onChange = (e)=> {
        const {name,value} = e.target
        setState((prevState) =>({
            fields: {
                ...prevState.fields,
                [name]: value
            },
            errors: {
                ...prevState.errors,
                [name]:validators[name] && validators[name](value)
            }
        }))
    }

    const onBlur = (e)=>{
        const {name} = e.target

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]:true
        }))
    }
    const onFocus = (e)=>{
        const {name} = e.target

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]:false
        }))
    }

const {email,password} = state.fields
const {errors}= state

  return (
    <div className="container-fluid">
      <main className="row login__main">
        <section className="col-md-6" id="login__panel__left"/>

        <section className="col-md-6 d-flex justify-content-center" id="panel-right">
          <div className="login__container">
            <form autoComplete="off" onSubmit={onSubmit} className="login__form">
              <img className="avatar" src="/img/logo.png" alt="perfil" />
              <h2>Login</h2>
              <div className="login__input__div two">
                <div className="i">
                  <BsEnvelopeFill />
                </div>
                <div>
                  <input
                    className={`login__input ${errors.email && touched.email ? 'is-invalid' : ''}`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    onBlur = {onBlur}
                    onFocus = {onFocus}
                    placeholder="Email"
                    required/>

                <div className="invalid-feedback">{errors.email}</div>
                </div>

              </div>
              <div className="login__input__div two">
                <div className="i">
                  <BsFillLockFill />
                </div>
                <div>
                  <input
                    className={`login__input ${errors.password && touched.password ? 'is-invalid' : ''}`}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    onBlur = {onBlur}
                    onFocus = {onFocus}
                    placeholder="Password"
                    required/>
                    <div className="invalid-feedback">{errors.password}</div>
                </div>
              </div>

              <a
                href="/forgot"
                style={{ textDecoration: "none" }}
                className="login__forgot">
                Forgot Pasword
              </a>
              <input className="login__btn" type="submit" value="Login"  />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
