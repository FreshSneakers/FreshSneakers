import React, { useState } from "react";
import { useHistory } from "react-router";
import "./ContactUs.css";
import { contact } from "../../services/UserService";
import { toast } from "react-toastify";
// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validators = {
  name: (value) => {
    let message;

    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  email: (value) => {
    let message;

    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  phone: (value) => {
    let message;
    if (!value) {
      message = "Phone umber is required";
    }
    return message;
  },
  message: (value) => {
    let message;

    if (!value) {
      message = "Message is required";
    }
    return message;
  },
  incidences: (value) => {
    let message;

    if (!value) {
      message = "Incidence is required";
    }
    return message;
  },
};

const ContactUs = () => {
  const { push } = useHistory();
  const [state, setState] = useState({
    fields: {
      name: "",
      email: "",
      message: "",
      phone: "",
      incidences: "",
    },
    errors: {
      name: validators.name(),
      email: validators.email(),
      phone: validators.phone(),
      message: validators.message(),
      incidences: validators.incidences(),
    },
  });

  const onSubmit = (e) => {
    const { fields } = state;
    console.log(state)
    e.preventDefault();
    if (isValid()) {
      console.log("hola");
      contact(fields).then((response) => {
        console.log(response);
        push("/");
        toast.info(
          "your message has been sent successfully, you will receive a reply soon."
        );
      });
    }
  };
  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
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

  const { name, email, message, phone, incidences } = state.fields;

  return (
    <div className="contact">
      <div className="contactUs__2">
        <div className="contact__information">
          <h1>Help</h1>
          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="contact__form"
          >
            Name:
            <input
              autoComplete="off"
              className="contact__name"
              name="name"
              type="text"
              value={name}
              onChange={onChange}
              placeholder="Name"
            />
            Email:
            <input
              className="contact__email"
              name="email"
              type="text"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
            Phone:
            <input
              className="contact__email"
              name="phone"
              type="text"
              value={phone}
              onChange={onChange}
              placeholder="Phone"
            />
            Incidence
            <textarea
              rows="8"
              cols="36"
              placeholder="Write your incidence..."
              className="contact__message mt-2"
              name="message"
              type="text"
              value={message}
              onChange={onChange}
            ></textarea>
            <div className="check__box">
              <select name="select" onChange={onChange}>
                <option selected value="0">
                  Check one option
                </option>
                <option
                  name="incidence"
                  value={incidences}>
                  my order has not arrived
                </option>
                <option
                  name="incidence"
                  value={incidences}>
                  information
                </option>
                <option name="incidence"
                  value={incidences}>
                  problems with the payment of my order
                </option>
              </select>
            </div>
            <div className="contact__edit">
              <button type="submit" value="contact us">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
