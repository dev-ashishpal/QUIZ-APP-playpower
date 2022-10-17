// import { createContext, useContext, useState } from "react";
// import { AuthService } from "../service/AuthService";

// const authContext = createContext();

// export default function useAuth() {
//   return useContext(authContext);
// }

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState("loda");
//   const [error, setError] = useState();

//   const loginWithGoogle = async () => {
//     const { error, user } = await AuthService.loginWithGoogle();
//     setUser(user ?? null);
//     setError(error ?? "");
//   };

//   const logout = async () => {
//     await AuthService.logout();
//     setUser(null);
//   };

//   const value = { user, error, loginWithGoogle, logout };

//   return (
//     <authContext.Provider value={value}>{props.children}</authContext.Provider>
//   );
// };
