import { useState } from "react";
import "./SignUp.scss";
import { defaultFormFields } from "../../constants";
import {
  createUserWithEmailAndPwd,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      resetFormField();
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPwd(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already exist");
        resetFormField();
      } else {
        console.log("failed to crate a user", err.message);
      }
    }
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign up with your email and password</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
