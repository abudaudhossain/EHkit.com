import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";
import { getDataLocalDB, getRemoveItemLocalDB, setUserInfo } from "./localDB";




const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const auth = getAuth(firebaseInitialize());
    const googleProvider = new GoogleAuthProvider();

    // google sing in
    const googleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                let userAccount = {}
                userAccount.name = result.user.displayName;
                userAccount.email = result.user.email;
                userAccount.rule = "user";

                axios.post('https://ehkit.herokuapp.com/createAccount', userAccount)
                    .then(function (response) {
                        const result = response.data;
                        setUserInfo(result.data.user) // set to local storage
                        window.location.reload(false);

                    })
                    .catch(function (error) {
                        const result = error.response.data
                        const status = error.response.status
                        console.log(result, 'result');
                        console.log(status, "status");
                    });

            }).catch((error) => {
                console.log(error)
            });


    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUserData(getDataLocalDB("user"));
        });

    }, []);

    // Create a password-based account
    const createAccountWithPasswordBased = (userInfo) => {
        const { email, password } = userInfo;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user, "after firebase sing in")
                // ...
                userInfo.rule = 'user';
                axios.post('https://ehkit.herokuapp.com/createAccount', userInfo)
                    .then(function (response) {
                        const result = response.data;
                        setUserInfo(result.data.user) // set to local storage
                        window.location.reload(false);


                    })
                    .catch(function (error) {
                        const result = error.response.data
                        const status = error.response.status
                        console.log(result, 'result');
                        console.log(status, "status");
                    });
            })
            .catch((error) => {
                console.log(error)
            });

    }

    const loginWithEmailAndPassword = ({ email, password }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                axios.post('https://ehkit.herokuapp.com/login', { email })
                    .then(function (response) {
                        const result = response.data;
                        setUserInfo(result.data.user) // set to local storage
                        window.location.reload(false);


                    })
                    .catch(function (error) {
                        const result = error.response.data
                        const status = error.response.status
                        console.log(result, 'result');
                        console.log(status, "status");
                    });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            getRemoveItemLocalDB("user");
            setUserData({});
        }).catch((error) => {
            console.log(error, "logout")
        });
    }
   
    return {
        googleSingIn,
        userData,
        logout,
        createAccountWithPasswordBased,
        loginWithEmailAndPassword
    }
}


export default useFirebase;