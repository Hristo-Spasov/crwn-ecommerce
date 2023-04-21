// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";

const SignIn = () => {
  // Get auth using Redirect

  // useEffect(() => {
  //   const getGoogleRedirectResults = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getGoogleRedirectResults();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
