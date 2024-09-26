import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, deleteProductDefault, findProducts } from "../../Redux/Product/Action";
import CloseIcon from '@mui/icons-material/Close';

function ProductTable() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  const dispatch = useDispatch();
  const { customerProduct } = useSelector((store) => store);
  console.log(customerProduct);

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    };

    dispatch(findProducts(data));
  }, [customerProduct.deleteResponse]);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const [snackopen, setSnackopen] = React.useState(false);

  useEffect(() => {
    if (customerProduct.deleteResponse) {
      setSnackopen(true);
    }
     setTimeout(() => {
      dispatch(deleteProductDefault())
     }, 3000);

  }, [customerProduct.deleteResponse]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackopen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="p-2 shadow-2xl">
      <Card>
        <Typography variant="h5" sx={{p:"1rem"}}>All Products</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Discounted Price</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">quantity</TableCell>
                <TableCell align="right">Offer</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerProduct.products?.content?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={row.imgUrl} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.category.name}</TableCell>
                  <TableCell align="right">{row.discountedPrice}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">
                    {row.discountedPercent} % off{" "}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleProductDelete(row.id)}
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

      <Snackbar
        open={snackopen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Deleted Successfully..."
        action={action}
      />
    </div>
  );
}

export default ProductTable;
