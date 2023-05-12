import { useState, FormEvent, ChangeEvent } from "react";
import { defaultFormFields } from "../../constants";
import FormInput from "../form-input/FormInput";
import {
  SignInContainer,
  SignInHeader,
  ButtonsContainer,
} from "./SignIn.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const SignIn = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //! HANDLE CHANGE
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //! HANDLE SUBMIT
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Wrong email or password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("Wrong email or password");
          break;
        default:
          console.log(error);
      }
    }
  };
  //! RESET FUNC
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  //! GOOGLE SIGNIN
  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <SignInHeader>Already have an account ?</SignInHeader>
      <span>Sign in with your email and password</span>
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
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
