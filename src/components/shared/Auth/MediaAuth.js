import React, { useEffect } from 'react'
import useFirebase from '../../../hooks/useFirebase';


const MediaAuth = () => {
    const { googleSingIn, user, setUser } = useFirebase();


    return (
        <div className="footer-social-icon text-center">
            <a ><i className="fab fa-facebook-f"></i></a>
            <a><i className="fab fa-twitter"></i></a>
            <a onClick={googleSingIn}><i className="fab fa-google-plus-g"></i></a>

        </div>
    )
}

export default MediaAuth;