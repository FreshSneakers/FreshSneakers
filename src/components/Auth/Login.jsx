import React from "react";
import "../Auth/Login.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";


const Login = () => {
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
            <form autoComplete="off" className="login__form">
              <img className="avatar" src="/img/logo.png" alt="perfil" />
              <h2>Login</h2>

              <div className="input-div two">
                <div className="i">
                  <BsEnvelopeFill />
                </div>
                <div>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="input-div two">
                <div className="i">
                  <BsFillLockFill />
                </div>
                <div>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <a
                href="/forgot"
                style={{ textDecoration: "none" }}
                className="login__forgot"
              >
                Forgot Pasword
              </a>
              <input className="btn__log" type="submit" value="Login" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
