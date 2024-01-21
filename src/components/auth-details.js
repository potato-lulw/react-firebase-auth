import React, { useEffect, useState } from 'react'
import { onAuthStateChanged , signOut} from 'firebase/auth'
import { auth } from '../firebase'
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user);  
            }else{
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => {console.log("Signout successful")})
            .catch((err) => {console.log(err)})
    }
  return (
    <div>
        {
            authUser ? <><p>Logged in</p><button onClick={userSignOut}>Sign Out</button></> : <p>Logged out</p>
        }
    </div>
  )
}

export default AuthDetails