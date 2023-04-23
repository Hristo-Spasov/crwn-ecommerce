// import { getRedirectResult } from "firebase/auth";
// import auth,
// signInWithGoogleRedirect,
// "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import "./Authentication.scss";

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
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
