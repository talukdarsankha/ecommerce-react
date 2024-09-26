import { api } from "../../../Config/apiConfig";
import { CANCLE_ORDER_FAILURE, CANCLE_ORDER_REQUEST, CANCLE_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIPPEED_ORDER_FAILURE, SHIPPEED_ORDER_REQUEST, SHIPPEED_ORDER_SUCCESS } from "./ActionType"


export const getOrders=()=>{
    return async (dispatch)=>{
        dispatch({type:GET_ORDERS_REQUEST});
        try {
            const {data} = await api.get(`/api/admin/orders/`);
            dispatch({type:GET_ORDERS_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:GET_ORDERS_FAILURE,payload:error.message});
        }
    }
}


export const confirmOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:CONFIRMED_ORDER_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/orders/${orderId}/confirmed`);
            dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message});
        }
    }
}

export const shipOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:SHIPPEED_ORDER_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/orders/${orderId}/ship`);
            dispatch({type:SHIPPEED_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:SHIPPEED_ORDER_FAILURE,payload:error.message});
        }
    }
}

export const placedOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:PLACED_ORDER_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/orders/${orderId}/placed`);
            dispatch({type:PLACED_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:PLACED_ORDER_FAILURE,payload:error.message});
        }
    }
}

export const deliverOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:DELIVERED_ORDER_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/orders/${orderId}/deliver`);
            dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message});
        }
    }
}

export const cancleOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:CANCLE_ORDER_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/orders/${orderId}/cancel`);
            dispatch({type:CANCLE_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:CANCLE_ORDER_FAILURE,payload:error.message});
        }
    }
}


export const deleteOrders=(orderId)=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_ORDER_REQUEST});
        try {
            const {data} = await api.delete(`/api/admin/orders/${orderId}/delete`);
            dispatch({type:DELETE_ORDER_SUCCESS,payload:orderId});
        } catch (error) {
            dispatch({type:DELETE_ORDER_FAILURE,payload:error.message});
        }
    }
}
