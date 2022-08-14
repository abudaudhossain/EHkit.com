import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";
import { getDataLocalDB, getRemoveItemLocalDB, setUserInfo } from "./localDB";




const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const auth = getAuth(firebaseInitialize());
    const googleProvider = new GoogleAuthProvider();


    const googleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                let userAccount = {}
                userAccount.name = result.user.displayName;
                userAccount.email = result.user.email;
                userAccount.rule = "user";

                axios.post('http://localhost:5000/createAccount', userAccount)
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
        logout
    }
}


export default useFirebase;