import { api } from "../../Config/apiConfig"
import { CREATE_ORDER_SUCCESS } from "../Order/ActionType";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment =(orderId)=>async (dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.post(`/api/payments/${orderId}`);
        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
            dispatch({type:CREATE_ORDER_SUCCESS})
        }
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}


export const updatePayment =(reqData)=>async (dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&orderId=${reqData.orderId}`);
       
        console.log(data);
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}

// http://localhost:3000/payment/8?razorpay_payment_id=pay_P0e88msixxKY9S&razorpay_payment_link_id=plink_P0e6lJG9B7nGZg&razorpay_payment_link_reference_id=&razorpay_payment_link_status=paid&razorpay_signature=8c7c7235abe0b6af962032fd397b3272900542d14d400a02b9252e0ad0fb9365