import React, { useState } from "react";
import { editPassword } from "../../services/UserService";
import "./EditPassword.css";

const EditPassword = () => {
  const [state, setState] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editPassword(state);
  };

  return (
    <div className="Profile">
      <div className="forgot__Box">
        <div className="edit__information">
          <h1>Reset password</h1>
          <form autoComplete="off" onSubmit={onSubmit} className="edit__form">
            <p> Enter your new password:</p>
            <input
              className="input__email"
              name="password"
              type="password"
              value={state.password}
              onChange={onChange}
            />
           
            <div className="btn__edit">
              <button type="submit">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
