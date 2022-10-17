// import firebase from "firebase/app";
// // import "firebase/auth";
// import {
//   User,
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// ///
// import { app } from "../config/firebase";
// const auth = getAuth();
// ///

// export const AuthService = {
//   loginWithGoogle: async () => {
//     // const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//       //   const userCred = await firebase.auth().signInWithPopup(provider);
//       const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
//       return { user: userCred };
//     } catch (e) {
//       return { error: e.message };
//     }
//   },
//   logout: async () => {
//     // await firebase.auth().signOut();
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.log("error:", e.message);
//     }
//   },
// };
