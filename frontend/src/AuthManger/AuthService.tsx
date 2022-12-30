import axios from 'axios'


const API_URL = `/api/users/`;
const API_URL_ADMIN = `/api/admin/`;

// register user
const register = async (userData:UserSignUp) => {
    const res = await axios.post(API_URL, userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}
// login User
const login = async (userData: UserSignIn) => {
    const res = await axios.post(API_URL+'login', userData);

    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const getLogedInUser:any =  () => {
    let logedUser;
    try {
        logedUser = JSON.parse(localStorage.getItem("user") || ""); 
        return logedUser;
    } catch (err) {
        console.log(err);
        logedUser =  null
        return logedUser;
    }  
    
};
const logout = () => {
    localStorage.removeItem('user')
}
const token = async (userData: {token: string}) => {
    const res = await axios.post( API_URL_ADMIN + "login", userData);

    return res.data;
};



// get me
const getMe = async (token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL + "me", config)

    return res.data;
};


 export const authService = {
     register,
     login,
     logout,
     getLogedInUser,
     token,
     getMe,
 };

export interface UserSignIn {
    email: string;
    password: string;
}

export interface UserSignUp {
    fullname: string;
    username: string;
    email: string;
    country: string;
    password: string;
    inviteRefCode: string;
}