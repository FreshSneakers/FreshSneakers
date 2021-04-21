import React from "react";
import "../Auth/Login.css";

const Login = () => {
  return (
    <div classNameName="container-fluid">
      <main className="row ">
        <section className="col-md-6" id="panel-left">
          <div className="container align-self-center">
            <div className="row">
              <h1 className="col-12 text-center">FreshSneakers</h1>
            </div>
            <div className="row">
              <p className="col-12 text-center description">
                Welcome to the world of sneakers
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-12 logo-container d-flex justify-content-center"></div>
            </div>
          </div>
        </section>

        <section className="col-md-6" id="panel-right">
          <div className="container">
            <div className="row mb-5">
              <h2 className="col-12 text-center">Log in</h2>
            </div>
            <div className="row">
              <form action="#" className="col-12 col-md-8 offset-md-2" autoComplete='off'>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="form-group text-center pt-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Ingresar"
                  />
                </div>
              </form>
            </div>
            <div className="row mt-5">
              <div className="col-12 links text-center">
                <div>
                  <a href="#">forgot my password</a>
                </div>
                <div>
                  <a href="#">create an account</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
