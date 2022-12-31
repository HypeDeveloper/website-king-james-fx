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
//  get a transfare
const geAlltUserTransfares = async (typeOFTransfare,token) => {
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
//  create a transfare
const createATransfare = async (typeOFTransfare, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let DATA_ME

    await axios.post(fetchUrl + "/transfare/newTrans", typeOFTransfare, config).then((res) => {
        if (res.data) {
            DATA_ME = res.data
        }
    })
    return DATA_ME
};



// Trasn End Points



// Admin End Points
const token = async (userData) => {
    let DATA_ADMIN

    await axios.post(fetchUrl + "/admin/login", userData).then((res) => {

        if (res.data) {
            DATA_ADMIN = res.data
        }
    });
    return DATA_ADMIN
};
// Get Users Admin
const getUsersAdmin = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let DATA_ADMIN

    await axios.get(fetchUrl + "/users/admin/users", config).then((res) => {
        if (res.data) {
            DATA_ADMIN = res.data
        }
    })
    return DATA_ADMIN
};
// Delete User Admin
const deleteUserAdmin = async (deletData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    

    let DATA_ADMIN

    await axios.get(fetchUrl + "/admin/users/all", deletData,config).then((res) => {
        if (res.data) {
            DATA_ADMIN = res.data
        }
    })
    return DATA_ADMIN
};


// GEt all Transfares
const getAllTransDBAdmin = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const body={
        id: _id
    }

    let DATA_ADMIN

    await axios.get(fetchUrl + "/transfare/admin", body,config).then((res) => {
        if (res.data) {
            DATA_ADMIN = res.data
        }
    })
    return DATA_ADMIN
};
// Approve Trans
const ValidateTrans = async (orderData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let DATA_ADMIN

    await axios.post(fetchUrl + "/transfare/transUpdate", orderData, config).then((res) => {
        if (res.data) {
            DATA_ADMIN = res.data
        }
    })
    return DATA_ADMIN
};


export const authService = {
    getMe,
    logout,
    register,
    login,
    token,
    logedUser,
    createATransfare,
    getUserTransfare,
    getUsersAdmin,
    deleteUserAdmin,
    geAlltUserTransfares,
    getAllTransDBAdmin,
    ValidateTrans
}