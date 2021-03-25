import React,{useState,createContext} from 'react';

export const SignInContext = createContext();

const SignInContextProvider = (props) =>{    
const [show, setShow] = useState(false);


    return(
        <>
        <SignInContext.Provider value={{show, setShow}}>
            {props.children}
        </SignInContext.Provider>
        </>
    )
}
export default SignInContextProvider;