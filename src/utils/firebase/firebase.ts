import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyBIxv-GsCFhZDeuTCpcughGxuXjRTuNuxw",

  authDomain: "crwn-db-9d349.firebaseapp.com",

  projectId: "crwn-db-9d349",

  storageBucket: "crwn-db-9d349.appspot.com",

  messagingSenderId: "408486102566",

  appId: "1:408486102566:web:3c501efc58c870069e88e7",
};

const firebase_app = initializeApp(firebaseConfig);

// we can use different providers for different services
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// adding items to the database
export type ObjectToAdd = {
  title: string;
};
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

// Get Item data

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

// Crate user with  Auth

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  //doc(database,collection,document) doc gets 3 params.
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user doesnt exists it will create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating the user", err);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

// Create user with email and password

export const createUserWithEmailAndPwd = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const loginUser = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => await signOut(auth);

//listen to the global auth state so we dont need to pass set current user in every place we need it
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
