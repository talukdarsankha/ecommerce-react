import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../Config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_DEFAULT, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCT_REQUEST})

  const {
    category,
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;



  try {
    const {data} = await api.get(`/api/products/?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
      console.log("product Data -: ");
      console.log(data);
    dispatch({type:FIND_PRODUCT_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:FIND_PRODUCT_FAILURE,payload:error.message});
  }
};



export const findProductById = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

  const {productId} = reqData;

  try {
    const {data} = await api.get(`/api/products/id/${productId}`);

    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data});

  } catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message});
  }
};


export const createProduct =(product)=> async (dispatch)=>{
  dispatch({type:CREATE_PRODUCT_REQUEST})

  try {
    const {data} = await api.post(`/api/admin/product/`,product);
    dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data});

  } catch (error) {
     dispatch({type:CREATE_PRODUCT_FAILURE,payload:error.message});
  }
}

export const deleteProduct =(productId)=> async (dispatch)=>{
  dispatch({type:DELETE_PRODUCT_REQUEST})

  try {
    const {data} = await api.delete(`/api/admin/product/${productId}/delete`);
    dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId});

  } catch (error) {
     dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message});
  }
}

export const deleteProductDefault =()=> async (dispatch)=>{
  dispatch({type:DELETE_PRODUCT_DEFAULT})

}


