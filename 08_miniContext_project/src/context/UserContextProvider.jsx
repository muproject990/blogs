import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) =>{
    
    
    const [user, setUser] = React.useState('')
    //      var  methods
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children} //Header ,Navbar,Footer,Body,Tag etc
        </UserContext.Provider>
    )
}
export default UserContextProvider