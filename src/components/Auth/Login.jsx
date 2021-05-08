import React, { useState } from "react";
import "../Auth/Login.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { login } from "../../services/AuthService";
import { useHistory } from "react-router";
import { setAccessToken } from "../../stores/AccessTokenStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// eslint-disable-next-line
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const validators = {
  email: (value) => {
    let message;

    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;

    if (!value) {
      message = "Password is required";
    } else if (!PASSWORD_PATTERN.test(value)) {
      message = "Your password does not meet the requirements";
    }
    return message;
  },
};

const Login = ({ doLogin }) => {
  const { push } = useHistory();
  const [state, setState] = useState({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: validators.email(),
      password: validators.password(),
    },
  });

  const [touched, setTouched] = useState({});
  const [errorsForm, setErrorsForm] = useState({});

  const isvalid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    const { fields } = state;
    e.preventDefault();
    if (isvalid()) {
      login(fields).then((response) => {
        if (response.access_token) {
          setAccessToken(response.access_token);
          doLogin()
            .then(() => {
              push("/");
            })
            .catch((error) => console.log(error.message));
        } else {
          setErrorsForm(response.data.errors);
        }
      });
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };
  const onFocus = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const { email, password } = state.fields;
  const { errors } = state;

  return (
    <div className="container-fluid">
      <main className="row login__main">
        <section className="col-md-6" id="login__panel__left" />

        <section
          className="col-md-6 d-flex justify-content-center"
          id="panel-right"
        >
          <div className="login__container">
            <form
              autoComplete="off"
              onSubmit={onSubmit}
              className="login__form"
            >
              <img className="avatar" src="/img/logo.png" alt="perfil" />
              <h2>Login</h2>
              <div className="login__input__div two">
                <div className="i">
                  <BsEnvelopeFill />
                </div>
                <div>
                  <input
                    className={`login__input ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    placeholder="Email"
                    required
                  />

                  <div className="invalid-feedback ">{errors.email}</div>
                </div>
              </div>
              <div className="login__input__div two">
                <div className="i">
                  <BsFillLockFill />
                </div>
                <div>
                  <input
                    className={`login__input ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    placeholder="Password"
                    required
                  />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>
              </div>
              {errorsForm && (
                <div style={{ color: "#dc3545" }}>
                  <p> {errorsForm.email}</p>
                </div>
              )}
              <Link
                to={"/forgot"}
                style={{ textDecoration: "none" }}
                className="login__forgot"
              >
                Forgot Pasword
              </Link>
              <input className="login__btn" type="submit" value="Login" />
              <ToastContainer />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
