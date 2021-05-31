import React, { useEffect, useState } from 'react'
import {getCurrentUser} from '../services/auth'
export const User = React.createContext({
    
})


function UserProvider(props){
    const [user, setUser] = useState("");
    const [isLoged, setLoged] = useState(false);
    

    useEffect(()=>{
        const actual=()=> getCurrentUser().then((res)=>{
            setUser(res.uid);
            setLoged(true)
        })
        .catch((e)=>{
            console.log(e)
        });
        actual()
    },[])

    
    return(
        <User.Provider value={{
            user,
            setUser,
            isLoged,
            setLoged
        }}>
            {props.children}
        </User.Provider>
    );

}

export default UserProvider;