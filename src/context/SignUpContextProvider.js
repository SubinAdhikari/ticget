import React,{useState,createContext} from 'react';

export const SignUpContext = createContext();

const SignUpContextProvider = (props) =>{    
const [showSignUp, setShowSignUp] = useState(false);


    return(
        <>
        <SignUpContext.Provider value={{showSignUp, setShowSignUp}}>
            {props.children}
        </SignUpContext.Provider>
        </>
    )
}
export default SignUpContextProvider;