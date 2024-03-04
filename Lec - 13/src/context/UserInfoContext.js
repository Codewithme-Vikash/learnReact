import { createContext, useState } from "react";

export const UserInfoContext = createContext({
    user: {
        name: "vikas",
        email: "vikas@email.com"
    }
});

export const cartContext = createContext(0);
cartContext.displayName = "cartContext";
// used to see name in react dev tool
UserInfoContext.displayName = "UserInfoContext"


const UserInfoContextProvider = ( {children} )=>{

    const [ user , setUser ] = useState({
        user: {
            name: "Jaldi",
            email: "internship@gmail.com"
        }
    });

    console.log( "userinfocontextprovider", user)

    const contextObj = {
        user,
        setUser : setUser
    }

    return (
        <UserInfoContext.Provider value={contextObj} >
            {children}
        </UserInfoContext.Provider>
    )
};

export default UserInfoContextProvider;