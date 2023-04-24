import { useState } from "react";
import { defaultFormFields } from "../../constants";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import Button from "../button/Button";
import {
  signInWithGooglePopup,
  loginUser,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //! HANDLE CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //! HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await loginUser(email, password);
      resetFormField();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong email or password");
          break;
        case "auth/user-not-found":
          alert("Wrong email or password");
          break;
        default:
          console.log(err);
      }
    }
  };
  //! RESET FUNC
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  //! GOOGLE SIGNIN
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span className="form-title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
