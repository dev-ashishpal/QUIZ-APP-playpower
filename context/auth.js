// import {
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { createContext, useContext, useEffect, useState } from "react";
// import { app } from "../config/firebase";

// const auth = getAuth(app);

// const AuthContext = createContext({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// const AuthProvider = (props) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return unsubscribe;
//   }, []);

//   const login = async () => {
//     try {
//       await signInWithPopup(auth, new GoogleAuthProvider());
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };
