import { Box, Button, Grid, Grid2, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../Address/AddressCard";
import { Warning } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../Redux/Order/Action";

function DeliveryAddressForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit =(e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    
     const address = {
      firstName:data.get("firstname"),
      lastName:data.get("lastname"),
      streeAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("pin"),
      mobile:data.get("phonenumber"),

     }

    const reqData = {address,navigate}
    dispatch(createOrder(reqData));
  }
  
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-auto "
        >
          <div className="px-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2 }} size="large" variant="contained">
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={3}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="pin"
                    name="pin"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" fullWidth sx={{ mt: 2,py:'1rem', bgcolor:"RGB(145 85 256)" }} size="large" variant="contained">
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressForm;
