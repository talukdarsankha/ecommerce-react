import { CREATE_ORDER_SUCCESS } from "../Order/ActionType";
import { CREATE_PAYMENT_REQUEST } from "./ActionType";


const initialState = {
    loading:false,
    error:null,
}


export const paymentReducer=(state=initialState,action)=>{
    switch(action.type){
        case CREATE_PAYMENT_REQUEST:
            return ({...state,loading:true,error:null});

            case CREATE_ORDER_SUCCESS:
                return ({...state,loading:false,error:null})    


        default: return state;
        
    }

    
}


