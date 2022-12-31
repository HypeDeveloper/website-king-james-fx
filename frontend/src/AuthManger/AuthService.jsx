import axios from 'axios'
const fetchUrl = '/api'

// register user
const register = async (userData) => {
    await axios.post(fetchUrl+'/users/', userData).then((res) => {
        if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
        }
    })    
}
// login User
const login = async (userData) => {
    await axios.post(fetchUrl +'/users/login', userData).then((res) => {
        if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
    });
};

const logedUser = () => {
    let logedUser;
    try {
        logedUser = JSON.parse(localStorage.getItem("user") || "");
        return logedUser;
    } catch (err) {
        console.log("no u");
        return null;
    }
};

const logout = () => {
    localStorage.removeItem('user')
}

const token = async (userData) => {
    await axios.post(fetchUrl + "/admin/login", userData).then((res) => {
        return res.data;
    });
};

// users requests
// get me
const getMe = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    
    let DATA_ME

    await axios.get(fetchUrl + "/users/me", config).then((res) => {
        if (res.data) {
            DATA_ME = res.data
       }
    })
    return DATA_ME
};
// get Transfare
const getUserTransfare = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let DATA_ME

    await axios.get(fetchUrl + "/transfare", config).then((res) => {
        if (res.data) {
            DATA_ME = res.data
        }
    })
    return DATA_ME
};
//  create a transfare
const createTransfare = async (typeOFTransfare,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let DATA_ME

    await axios.post(fetchUrl + "/transfare", typeOFTransfare, config).then((res) => {
        if (res.data) {
            DATA_ME = res.data
        }
    })
    return DATA_ME
};
export const authService = {
    getMe,
    logout,
    register,
    login,
    token,
    logedUser,
    createTransfare,
    getUserTransfare
}