import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItemAction, updateCartItemAction } from "../../../Redux/Cart/Action";

function CartItem({item}) {

  const dispatch = useDispatch();

  const updateCartItem=(num)=>{
    const data = {data:{quantity:item?.quantity+num},cartItemId:item?.id}
    dispatch(updateCartItemAction(data))
  }

  const removeCartItem=()=>{
    dispatch(removeCartItemAction({cartItemId:item?.id}))
  }
  
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="max-w-[8rem] min-h-[3rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="object-cover object-top w-full h-full"
            src={item?.product?.imgUrl}
            alt="productImage"
          />
        </div>

        <div className="ml-5 space-y-1 text-start max-w-[70%]">
          <p className="font-semibold">
          {item?.product?.title}
          </p>
          <p className=" opacity-50 font-medium">Size: {item?.size} , {item?.product?.color}</p>
          <p className="opacity-60 mt-2">Seller: Seller Name </p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹ {item?.discountedPrice}</p>
            <p className=" opacity-50 line-through">{item?.price}</p>
            <p className="font-semibold text-blue-700">{item?.product?.discountedPercent} %</p>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:space-x-5 items-center pt-4">
        <div className="flex items-center space-x-2">
            <IconButton onClick={()=>updateCartItem(-1)} sx={{color:"blue"}} disabled={item?.quantity<=1}>
              <RemoveCircleOutline />
            </IconButton>
          
          <span className="py-1 px-7 border rounded-sm"> {item?.quantity} </span>
            <IconButton sx={{color:"rgb(242 72 31)"}} onClick={()=>updateCartItem(1)} disabled={item?.product?.quantity<=item?.quantity}>
              <AddCircleOutline />
            </IconButton>
         
        </div>

        <Button onClick={removeCartItem} >Remove</Button>
      </div>
    </div>
  );
}

export default CartItem;
