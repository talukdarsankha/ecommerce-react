import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancleOrders, confirmOrders, deleteOrders, deliverOrders, getOrders, placedOrders, shipOrders } from '../../Redux/Admin/Orders/Action';
import { Avatar, AvatarGroup, Button, Card, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function OrderTable() {
  const dispatch = useDispatch();
  const {adminOrder} = useSelector(store=>store);


  const [anchorEl, setAnchorEl] = React.useState([]);
  
  const handleClick = (event,index) => {
    const newAnchorElArr= [...anchorEl];
    newAnchorElArr[index]=event.currentTarget;
    setAnchorEl(newAnchorElArr);
  };

  const handleClose = (index) => {
    const newAnchorElArr= [...anchorEl];
    newAnchorElArr[index]=null;
    setAnchorEl(newAnchorElArr);
  };


  const handleConfirmOrder = (orderId,index)=>{
    dispatch(confirmOrders(orderId))
    handleClose(index);
  }
  const handleShippedOrder = (orderId,index)=>{
    dispatch(shipOrders(orderId))
    handleClose(index);
  }
  const handlePlacedOrder = (orderId,index)=>{
    dispatch(placedOrders(orderId))
    handleClose(index);
  }
  const handleDeliverOrder = (orderId,index)=>{
    dispatch(deliverOrders(orderId))
    handleClose(index);
  }
  const handleCancleOrder = (orderId,index)=>{
    dispatch(cancleOrders(orderId))
    handleClose(index);
  }

  const handleDeleteOrder = (orderId,index)=>{
    dispatch(deleteOrders(orderId))
    handleClose(index);
  }





  useEffect(()=>{
    dispatch(getOrders());
    console.log("adminOrder")
  },[adminOrder.confirmed,adminOrder.placed,adminOrder.shipped,adminOrder.delivered,adminOrder.canceled,adminOrder.deleted])


  return (
    <div className="p-2 shadow-2xl">
      <Card>
      <Typography variant="h5" sx={{p:"1rem"}}>Recent Orders</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="left">Total Price</TableCell>
                <TableCell align="left">Total Items</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.Orders?.map((row,index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup sx={{justifyContent:"start"}}>
                     { row.orderItems?.map((item)=>(
                        <Avatar src={item.product?.imgUrl}/>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="row">
                     { row.orderItems?.map((item)=>(
                        item.product?.title
                      ))}
                  </TableCell>
                  <TableCell align="left">₹ {row.totalDiscountedPrice}</TableCell>
                  <TableCell align="left">{row.tortalItem}</TableCell>
                  <TableCell align="center">
    
                      <Chip 
                      id={`demo-positioned-button-${row.id}`}
                      aria-controls={Boolean[anchorEl[index]] ? `demo-positioned-menu-${row.id}` : undefined}
                      aria-haspopup="true"
                      aria-expanded={Boolean[anchorEl[index]] ? 'true' : undefined}
                      onClick={(e)=>handleClick(e,index)}

                        label={row.orderStatus}
                        color={
                          row.orderStatus === "PENDING" ? "warning" : 
                          row.orderStatus === "CONFIRMED" ? "info" : 
                          row.orderStatus === "CANCELED" ? "error" : 
                          row.orderStatus === "SHIPPED" ? "primary" : 
                          row.orderStatus === "DELIVERED" ? "success" :
                          undefined
                        }
                        sx={row.orderStatus === "PLACED" ? { backgroundColor: 'violet', color: 'white' } : {}}
                      />

                    <Menu
                      id={`demo-positioned-menu-${row.id}`}
                      aria-labelledby={`demo-positioned-button-${row.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <MenuItem onClick={()=>handleConfirmOrder(row.id,index)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={()=>handleShippedOrder(row.id,index)}>Shipped Order</MenuItem>
                      <MenuItem onClick={()=>handlePlacedOrder(row.id,index)}>Placed Order</MenuItem>
                      <MenuItem onClick={()=>handleDeliverOrder(row.id,index)}>Delivered Order</MenuItem>
                      <MenuItem onClick={()=>handleCancleOrder(row.id,index)}>Cancle Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                     onClick={()=>handleDeleteOrder(row.id,index)}
                      variant="outlined"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      
    </div>
  )
}

export default OrderTable
