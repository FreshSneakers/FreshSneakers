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
        } else if (!EMAIL_PATTERN.test(value)){//Metodo test para pasar el valor, nos devuelve true or false
            message = 'Email is invalid'
        }

        return message;
    },
    password:(value)=> {
        let message;

        if(!value){
            message = 'Password is required'
        }else if(value && !PASSWORD_PATTERN.test(value)){
            message = 'Password must have 8 characters or more'
        }

        return message
    }
}

const Login = () => {
    // Nos declaramos dos estados. Uno para valoresy errores y otro para los campos que han sido tocados
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
    //isInvalid nos recorre el objeto errors y comprueba si hay alguno
    const isvalid = ()=> {
        const {errors}= state
        return !Object.keys(errors).some(error =>errors[error])
    }

    const onSubmit = (e)=> {
        const {fields} = state
        e.preventDefault()

        if(isvalid()){
            console.log(state.fields)
        }

    }

    const onChange = (e)=> {
        const {name,value} = e.target
        //Hacemos cambio de estado y nos quedamos con el valor anterior (prevState) y retornar un objeto
        setState((prevState) =>({
            fields: {
                ...prevState.fields,//Hacemos copia de lo que teniamos y modificamos el campo que queremos
                [name]: value
            },
            errors: {
                ...prevState.errors,
                [name]:validators[name] && validators[name](value)//Nos aseguramos que existe validador para name y si lo hay lo llamamos con una función y le pasamos el value

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
      <main className="row">
        <section className="col-md-6" id="login__panel-left">
          <div className="container align-self-center">
            
            <div className="row mt-5">
              <div className="col-12 logo-container d-flex justify-content-center"></div>
            </div>
          </div>
        </section>

        <section
          className="col-md-6 d-flex justify-content-center"
          id="panel-right"
        >
          <div className="login__container">
            <form autoComplete="off" onSubmit={onSubmit} className="login__form">
              <img className="avatar" src="/img/logo.png" alt="perfil" />
              <h2>Login</h2>

              <div className="input-div two">
                <div className="i">
                  <BsEnvelopeFill />
                </div>
                <div>
                  <input
                    className={`input ${errors.email && touched.email ? 'is-invalid' : ''}`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    onBlur = {onBlur}
                    onFocus = {onFocus}
                    placeholder="Email"
                    required
                  />
                <div className="invalid-feedback">{errors.email}</div>
                </div>
              </div>
              <div className="input-div two">
                <div className="i">
                  <BsFillLockFill />
                </div>
                <div>
                  <input
                    className={`input ${errors.password && touched.password ? 'is-invalid' : ''}`}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    onBlur = {onBlur}
                    onFocus = {onFocus}
                    placeholder="Password"
                    required
                  />
                    <div className="invalid-feedback">{errors.password}</div>
                </div>
              </div>

              <a
                href="/forgot"
                style={{ textDecoration: "none" }}
                className="login__forgot"
              >
                Forgot Pasword
              </a>
              <input className="btn__log" type="submit" value="Login"  />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
