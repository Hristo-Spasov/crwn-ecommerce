import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} 
    from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBIxv-GsCFhZDeuTCpcughGxuXjRTuNuxw",

    authDomain: "crwn-db-9d349.firebaseapp.com",

    projectId: "crwn-db-9d349",

    storageBucket: "crwn-db-9d349.appspot.com",

    messagingSenderId: "408486102566",

    appId: "1:408486102566:web:3c501efc58c870069e88e7"

};

const firebase_app = initializeApp(firebaseConfig);

// we can use different providers for different services
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)


export const db = getFirestore()

// Crate user with  Auth

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    //doc(database,collection,document) doc gets 3 params.
    if (!userAuth) return
    const userDocRef = doc(db,'users',userAuth.uid) 
    const userSnapshot = await getDoc(userDocRef)

    // If user doesnt exists it will create it
    if (!userSnapshot.exists()) {
        const {displayName,email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (err) {
            console.log('error creating the user',err.message);
        }
    }
    return userDocRef
}

// Create user with email and password

export const createUserWithEmailAndPwd = async (email,password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth,email,password)

}
export const loginUser = async (email,password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth,email,password)

}

export const logoutUser = async () => await signOut(auth)

//listen to the global auth state so we dont need to pass set current user in every place we need it
export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth,callback)