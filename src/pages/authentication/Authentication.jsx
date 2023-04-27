// import { getRedirectResult } from "firebase/auth";
// import auth,
// signInWithGoogleRedirect,
// "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import { AuthenticationContainer } from "./Authentication.styles.jsx";

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
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
