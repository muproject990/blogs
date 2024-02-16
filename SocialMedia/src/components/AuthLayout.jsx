import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Protected(
    { children,
        authentication = true
    }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO *** make it more easy in future  ***

        //! ***  Easy Methods   ***
        // if (authStatus === true) {
        //     navigate("/")

        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //!DIFFICULT level high
        // if ( authStatus != authentication)
        // true && false!=true
        if (authentication && authStatus != authentication
        ) {
            navigate("/login")
        }
        // fale && true !=true
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)

    }, [authStatus, navigate, authentication])


    return loader ? <h1>Loading....</h1> : <>{children}</>
}
