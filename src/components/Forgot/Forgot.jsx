import React, { useState } from "react";
import { forgot } from "../../services/UserService";

const Forgot = () => {
  const [state, setState] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    forgot(state);
  };

  return (
    <div className="Profile">
      <div className="forgot__box">
        <div className="edit__information">
          <h1>Forgot password</h1>
          <form autoComplete="off" onSubmit={onSubmit} className="edit__form">
            <p>Email:</p>
            <input
              className="input__email"
              name="email"
              type="text"
              value={state.email}
              onChange={onChange}
            />

            <div className="btn__edit">
              <button type="submit">Send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
