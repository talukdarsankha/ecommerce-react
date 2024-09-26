import axios from "axios"
import { API_BASE_URL } from "../../Config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


export const register=(userData)=>async (dispatch)=>{
    dispatch({type:REGISTER_REQUEST})

    try {
        const res = await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user = res.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
            dispatch({type:REGISTER_SUCCESS,payload:user})
        }
    } catch (error) {
        dispatch({type:REGISTER_FAILURE,payload:error.message});
    }
}


export const login=(loginData)=>async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST})

    try {
        const res = await axios.post(`${API_BASE_URL}/auth/signin`,loginData);
        const loginUser = res.data;
        if(loginUser.jwt){
            localStorage.setItem("jwt",loginUser.jwt);
            dispatch({type:LOGIN_SUCCESS,payload:loginUser})
        }
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error.message});
    }
}

export const getUserProfile =(jwt)=>async (dispatch)=>{
    dispatch({type:GET_USER_REQUEST});

    try {
        const response = await axios.get(`${API_BASE_URL}/api/user/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        const reqUser = response.data;
        if(reqUser){
        dispatch({type:GET_USER_SUCCESS,payload:reqUser});
        }
    } catch (error) {
        dispatch({type:GET_USER_FAILURE,payload:error.message})
    }
}

export const logout=()=> (dispatch)=>{
    dispatch({type:LOGOUT,payload:null});
    // localStorage.removeItem("jwt");
}

