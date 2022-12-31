import { createContext, useContext, useEffect, useState } from "react";
import  {authService} from "./AuthService";
const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [user, setUser] = useState(null);


    const userLocal = authService.logedUser()
    

    useEffect(() => {
        setUser(userLocal)
    }, [])


    // SignIn  User
    async function RegisterUser(user) {
        setLoading(true);
        await authService
            .register(user)
            .then(() => {
                setSuccess(true);
                alert("Sign up Valid: You have been registered");
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    }
    // LogIn User
    const AuthUser = async (user) => {
        setLoading(true);
        await authService
            .login(user)
            .then(() => {
                setSuccess(true);
                alert("Sign In Valid");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            }).finally(() => {
                setLoading(true)
            });
    };
    // Get User Details    
    const GetUser_DB = async () => {
        setLoading(true);
        // Get Stored Token
        const storedToken = authService.logedUser().token
        let new_data 
        await authService.getMe(storedToken)
            .then((data) => {
                if (data) {
                    new_data = data
                }
        }).catch((err)=>{
            console.log(err);
        })
        return new_data
    }
    const GetUser_Transfares = async () => {
        setLoading(true);
        // Get Stored Token
        const storedToken = authService.logedUser().token
        let new_data
        await authService.geAlltUserTransfares(storedToken)
            .then((data) => {
                if (data) {
                    new_data = data
                }
            }).catch((err) => {
                console.log(err);
            })
        return new_data
    }
    const createATransfare = async (data)=>{
        setLoading(true);
        // Get Stored Token
        const storedToken = authService.logedUser().token
        let new_data
        await authService.createATransfare(storedToken)
            .then((data) => {
                if (data) {
                    new_data = data
                }
            }).catch((err) => {
                console.log(err);
            })
        return new_data
    }



    const AuthToken = async (tokenData) => {
        setLoading(true);
        await authService
            .token(tokenData)
            .then(() => {
                setSuccess(true);
                alert("Success");
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };


    const AuthValues = {
        isSuccess,
        isLoading,
        user,
        RegisterUser,
        AuthUser,
        AuthToken,
        GetUser_DB,
        GetUser_Transfares
    };
    return (
        <AuthContext.Provider value={AuthValues}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, useAuth };
