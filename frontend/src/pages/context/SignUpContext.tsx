import { createContext, useContext, useState } from "react";

const SignContext = createContext({})

const useSign = () => useContext(SignContext)

const SignContextProvider = ({ children }: any) => {
    const [SignUpData, setSignUpData] = useState('');

    const signValues = {
        SignUpData,
        setSignUpData,
    };
    return (
        <SignContext.Provider value={signValues}>
            {children}
        </SignContext.Provider>
    );
};

export { SignContextProvider, useSign }