import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../Redux/Order/Action";
import { updatePayment } from "../../../Redux/Payment/Action";
import {  Grid} from "@mui/material";

import OrderTracker from "../Order/OrderTracker";
import SuccessAlert from "./SuccessAlert";

function PaymentSuccess() {
  const [paymentId, setPaymentId] = useState();
  const [refrenceId, setRefrenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParms = new URLSearchParams(window.location.search);
    setPaymentId(urlParms.get("razorpay_payment_id"));
    setPaymentStatus(urlParms.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { paymentId, orderId };
    if(orderId && paymentId){
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
      
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36 py-10">
      <div className="flex flex-col justify-center items-center">
         <SuccessAlert/>
      </div>

      <div className="py-7">
        <OrderTracker activeStep={1} />
      </div>

      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems?.map((item, i) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className=" flex cursor-pointer gap-4 items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imgUrl}
                  alt=""
                />

                <div className="space-y-1">
                  <p className="mb-2 font-semibold">
                  {item?.product?.title}
                  </p>
                  <p className="opacity-50 text-sm font-semibold">
                    <span>Size: {item?.size}, </span>
                    <span>Color: {item?.product?.color}</span>
                  </p>
                  
                  <p className="mb-2 font-semibold">
                   Price: {item?.discountedPrice} , Quantity : {item?.quantity}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PaymentSuccess;


// http://localhost:3000/payment/10?razorpay_payment_id=pay_P0g7fGUPmutCFe&razorpay_payment_link_id=plink_P0g7QGRDoqRr7b&razorpay_payment_link_reference_id=&razorpay_payment_link_status=paid&razorpay_signature=3543870707eb7da2a35b1f08f9a2283e6170788d58edf4de8749299288977011
