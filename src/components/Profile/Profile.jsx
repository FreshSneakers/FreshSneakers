import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getUserInfo } from "../../services/UserService";
import { editProfile } from "../../services/UserService";
import "./profile.css";

const Profile = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getUserInfo().then((user) => {
      setState(user);
    });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editProfile(state);
  };

  return (
    <div className="Profile">
      <div className="prBox__1">
        <img
          className="img__profile"
          src="/img/profile.png"
          style={{ width: '300px' }}
          alt="imgProfile"
        />
      </div>
      <div className="prBox__2">
        <div className="information">
          <h1>Information</h1>
          <form autoComplete="off" onSubmit={onSubmit} className="edit__form">
            Name:
            <input
              className="input__name"
              name="name"
              type="text"
              value={state.name}
              onChange={onChange}
            />
            Email:
            <input
              className="input__email"
              name="email"
              type="text"
              value={state.email}
              onChange={onChange}
            />
            address:
            <input
              className="input__address"
              name="address"
              type="text"
              value={state.address}
              onChange={onChange}
            />
            <div className="btn__edit">
              <button type="submit">Save changes</button>
              <button>
                <Link className="button__link" to="/">Back to home</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
