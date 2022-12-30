import { createContext, useContext, useEffect, useState } from "react";
import { authService, UserSignIn, UserSignUp } from "./AuthService";
const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: any) => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [user, setUser]: any = useState(null);
    const [message, setMessage] = useState<any>();


    const[dbUser, setDbUser]:any =useState()

    const [storedUser, setStoredUser] = useState(null) 


    // auth Users with Token
    async function RegisterUser(user: UserSignUp) {
        setLoading(true);
        await authService
            .register(user)
            .then(() => {
                setSuccess(true);
               alert("Sign up Valid: You have been registered");
            })
            .catch((err) => {
                console.log(err);
                setMessage(err);
            });
    }
    const AuthUser = async (user: UserSignIn) => {
        setLoading(true);
         await authService
             .login(user)
             .then(() => {
                 setSuccess(true);
                 alert("Sign In Valid");
             })
             .catch((err) => {
                 console.log(err);
                 setMessage(err);
             });
   };

    
   const GetMe_DB = async () => {
        setLoading(true);
   };

    const AuthToken = async (tokenData: {token:string}) => {
        setLoading(true);
        await authService
            .token(tokenData)
            .then(() => {
                setSuccess(true);
                alert("Success");
            })
            .catch((err) => {
                console.log(err);
                alert("Error");
                setMessage(err);
            });
    };
    
    function Reset() {
        setLoading(false);
        setSuccess(false);
        setMessage("");
    }

    const AuthValues = {
        isLoading,
        user,
        message,
        isSuccess,
        RegisterUser,
        AuthUser,
        Reset,
        setUser,
        setStoredUser,
        storedUser,
        AuthToken,
    
    };
    return (
        <AuthContext.Provider value={AuthValues}>
            {children}
        </AuthContext.Provider>
    );
};

export interface Auth {
    isLoading?: boolean;
    user?: null;
    message?: any;
    isSuccess?: boolean;
    RegisterUser?: (user: UserSignUp) => Promise<void>;
    AuthUser?: (user: UserSignIn) => Promise<void>;
    getLogedInUser?: () => Promise<any>;
    Reset?: () => void;
    setUser?: React.Dispatch<React.SetStateAction<any>>;
    AuthToken?: (tokenData: { token: string }) => Promise<void>;
    GetMe_DB?: (user: UserSignIn) => Promise<void>;
    dbUser?: any
}
export { AuthContextProvider, useAuth};
