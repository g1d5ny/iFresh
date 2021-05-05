import React, {createContext, useContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

// export const AuthProvider = () => {
//     return (
//         // <AuthContext.Provider value={{isLoggedIn, logUserIn, logUserOut, userNo, providerNo, SetUserNo, SetProviderNo, reLogIn, isUser, firstCheck}}>
//         //     {children}
//         // </AuthContext.Provider>
//     );
// };

// export const useIsLoggedIn = () => {
//     const {isLoggedIn} = useContext(AuthContext);
//     return isLoggedIn;
// };
//
// export const useLogIn = () => {
//     const {logUserIn} = useContext(AuthContext);
//     return logUserIn;
// };
//
// export const useLogOut = () => {
//     const {logUserOut} = useContext(AuthContext);
//     return logUserOut;
// };
//
// export const useReLogIn = () => {
//     const {reLogIn} = useContext(AuthContext);
//     return reLogIn;
// };
//
// export const useFirstLogIn = () => {
//     const {firstCheck} = useContext(AuthContext);
//     return firstCheck;
// };
//
// export const userCheck = () => {
//     const {isUser} = useContext(AuthContext);
//     return isUser;
// };
