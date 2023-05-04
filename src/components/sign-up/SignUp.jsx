import { useState } from "react";
import { defaultFormFields } from "../../constants";
import {
  createUserWithEmailAndPwd,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/FormInput";
import { SignUpContainer, SignUpHeader } from "./SignUp.styles.jsx";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const SignUp = () => {
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, displayName));
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
    <SignUpContainer>
      <SignUpHeader>Don't have an account ?</SignUpHeader>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
