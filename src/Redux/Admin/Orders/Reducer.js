import { CANCLE_ORDER_FAILURE, CANCLE_ORDER_REQUEST, CANCLE_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIPPEED_ORDER_FAILURE, SHIPPEED_ORDER_REQUEST, SHIPPEED_ORDER_SUCCESS } from "./ActionType";

const initialState = {
    isLoading:false,
    error:null,
    Orders:[],
    confirmed:null,
    placed:null,
    shipped:null,
    delivered:null,
    canceled:null,
    deleted:null
}

export const adminOrderReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ORDERS_REQUEST:
            return {...state,isLoading:true, error:null} ;
            
       
        case GET_ORDERS_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,Orders:action.payload}    
    
        case GET_ORDERS_FAILURE:
            return {...state,Orders:[], isLoading:false,error:action.payload};
            
        case CONFIRMED_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
        case SHIPPEED_ORDER_REQUEST:    
        case DELIVERED_ORDER_REQUEST:
        case CANCLE_ORDER_REQUEST:         
            return {...state,
                isLoading:true
            };   
            
        case CONFIRMED_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,confirmed:action.payload} 
            
        case PLACED_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,placed:action.payload} 

        case SHIPPEED_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,shipped:action.payload}  

        case DELIVERED_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,delivered:action.payload}   
            
            
        case CANCLE_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false, error:null,canceled:action.payload}     

        case DELETE_ORDER_SUCCESS:
            console.log(action.payload);
            return {...state,isLoading:false,
                 error:null,
                 Orders:state.Orders.filter((item)=>item.id!==action.payload),
                 deleted:action.payload
                 }         
       
        case CONFIRMED_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
        case SHIPPEED_ORDER_FAILURE:    
        case DELIVERED_ORDER_FAILURE:
        case CANCLE_ORDER_FAILURE:         
            return {...state,
                isLoading:false
            };   


        default: return state;    
    }
}
