import { Route, Routes } from "react-router-dom";
import Cart from "./Customer/Components/Cart/Cart";
import CheckOut from "./Customer/Components/Cart/CheckOut";
import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Nanigation";
import Order from "./Customer/Components/Order/Order";
import OrderDetails from "./Customer/Components/Order/OrderDetails";
import Product from "./Customer/Components/Product/Product";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";
import HomePage from "./Customer/Pages/HomePage";
import CustomerRoutes from "./Routes/CustomerRoutes";
import AdminRouter from "./Routes/AdminRouter";


function App() {
  return (
    <div>

       {/* <HomePage/> */}
       {/* <Product/> */}
       {/* <ProductDetails/> */}
       {/* <Cart/> */}
       {/* <CheckOut/> */}

       {/* <Order/> */}
       {/* <OrderDetails/> */}

       <Routes>
         <Route path="/*" element={<CustomerRoutes/>}/>
         <Route path="/admin/*" element={<AdminRouter/>}/>
       </Routes>

    </div>
  );
}

export default App; 
