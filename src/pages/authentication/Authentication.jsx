// import { getRedirectResult } from "firebase/auth";
import // auth,
// signInWithGoogleRedirect,
"../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
// import Button from "../../components/button/Button";

const Authentication = () => {
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

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignIn />
      {/* <Button>Sign In</Button>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with google Popup
      </Button> */}
      <SignUp />
    </div>
  );
};

export default Authentication;
