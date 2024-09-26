import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../Redux/Product/Action';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';



const  initialSizes = [
  {name:"S", quantity:0},
  {name:"M", quantity:0},
  {name:"L", quantity:0}

]

function CreateProductForm() {

  const [productData, setProductData] = useState({
    imageUrl:"",
    title:"",
    brand:"",
    description:"",
    color:"",
    discountedPrice:"",
    price:"",
    discountedPrecent:"",
    quantity:"",
    sizes:initialSizes,
    topLavelCategory:"",
    secondLavelCategory:"",
    thirdLavelCategory:"",

  });

  const jwt = localStorage.getItem("jwt");

  const handleChange =(e)=>{
   const {name,value} = e.target;
   setProductData((prevData)=>({
    ...prevData,
    [name]:value
   }))
  }

  const handleSizeChange =(e, index)=>{
    let {name, value} = e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;

    const sizes = [...productData.sizes];
    sizes[index][name] = value;
    setProductData((prevData)=>({
      ...prevData,
      sizes:sizes
    }))
  }

  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(productData)
    dispatch(createProduct(productData))
  }

  return (
    <div>
       <Typography variant='h5' sx={{textAlign:"center"}} className='py-5'>Add a new product</Typography>

       <form className='p-5 min-h-screen createProductContainer' onSubmit={handleSubmit}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth
                required
                label="Image Url"
                name='imageUrl'
                value={productData.imageUrl}
                onChange={handleChange}
                >

                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField fullWidth
                required
                label="Brand"
                name='brand'
                value={productData.brand}
                onChange={handleChange}
                >
                </TextField>
              </Grid>
              
              <Grid item xs={12} sm={8}>
                <TextField fullWidth
                required
                label="Title"
                name='title'
                value={productData.title}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={6} sm={4}>
                <TextField fullWidth
                required
                label="Color"
                name='color'
                value={productData.color}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={6} sm={4}>
                <TextField fullWidth
                required
                label="Quantity"
                name='quantity'
                value={productData.quantity}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={6} sm={4}>
                <TextField fullWidth
                required
                label="Price"
                name='price'
                value={productData.price}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField fullWidth
                required
                label="Discounted Price"
                name='discountedPrice'
                value={productData.discountedPrice}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField fullWidth
                required
                label="Discounted Percent"
                name='discountedPrecent'
                value={productData.discountedPrecent}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                 <FormControl fullWidth>
                   <InputLabel>Top Lavel Category</InputLabel>
                   <Select
                    name='topLavelCategory'
                    value={productData.topLavelCategory}
                    onChange={handleChange}
                    label="Top Lavel Category"
                    >
                      <MenuItem value="men">Men</MenuItem>
                      <MenuItem value="women">Women</MenuItem>
                      <MenuItem value="kids">Kids</MenuItem>
                   </Select>
                 </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                 <FormControl fullWidth>
                   <InputLabel>Second Lavel Category</InputLabel>
                   <Select
                    name='secondLavelCategory'
                    value={productData.secondLavelCategory}
                    onChange={handleChange}
                    label="Second Lavel Category"
                    >
                      <MenuItem value="clothing">Clothing</MenuItem>
                      <MenuItem value="accessories">Accessories</MenuItem>
                      <MenuItem value="electronics">Electronics</MenuItem>
                      <MenuItem value="groccery">Groccery</MenuItem>

                   </Select>
                 </FormControl>
              </Grid>


              <Grid item xs={12} sm={4}>
                 <FormControl fullWidth>
                   <InputLabel>Third Lavel Category</InputLabel>
                   <Select
                    name='thirdLavelCategory'
                    value={productData.thirdLavelCategory}
                    onChange={handleChange}
                    label="Third Lavel Category"
                    >
                      <MenuItem value="top">Top</MenuItem>
                      <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                      <MenuItem value="women_dress">Dress</MenuItem>
                      <MenuItem value="t-shirts">T-Shirts</MenuItem>
                      <MenuItem value="saree">Saree</MenuItem>
                      <MenuItem value="lengha_choli">Lengha Choli</MenuItem>

                   </Select>
                 </FormControl>
              </Grid>


              <Grid item xs={12} >
                <TextField fullWidth
                multiline
                rows={3}
                required
                id='outlined-multiline-static'
                label="Description"
                name='description'
                value={productData.description}
                onChange={handleChange}
                >
                </TextField>
              </Grid>

              {productData.sizes.map((item,i)=>(
                <Grid container item spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth
                    required
                    label="Size Name"
                    name='name'
                    value={item.name}
                    onChange={(e)=>handleSizeChange(e,i)}
                    >
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth
                    required
                    type='number'
                    label="Quantity"
                    name='size_quantity'
                    value={item.quantity}
                    onChange={(e)=>handleSizeChange(e,i)}
                    >
                    </TextField>
                  </Grid>
                </Grid>
              ))}

              <Grid item xs={12} sm={6}>
               <Button
               variant='contained'
                sx={{p:1.8}}
               size='large'
               type='submit'
               >
                 Add Product
               </Button>
              </Grid>
           
          </Grid>
          
       </form>
    </div>
  )
}

export default CreateProductForm
