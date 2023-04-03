import {Routes,Route} from "react-router-dom";
import LandingPage from "../Components/LANDING PAGE/LandingPage";
import Register from "../Components/AUTHENTICATION/Register";
import Login from "../Components/AUTHENTICATION/Login";
import Mobile from "../Components/PRODUCTS/MOBILE PAGE/Mobile";
import PrivateRoute from "./PrivateRoute";
import Laptops from "../Components/PRODUCTS/LAPTOP PAGE/Laptops";
import Singleproduct from "../Components/SINGLEPRODUCT/SingleProduct";
import LaptopProduct from "../Components/SINGLEPRODUCT/SINGLE LAPTOP/laptopProduct";
import Headphones from "../Components/PRODUCTS/HEADPHONES PAGE/Headphones";
import HeadphoneProduct from "../Components/SINGLEPRODUCT/SINGLE HEADPHONE/HeadphoneProduct";
import Cart from "../Components/CART/Cart";
import Checkout from "../Components/CHECKOUT/Checkout";
import AdminLogin from "../Components/ADMIN/AdminLogin";
import AdminPage from "../Components/ADMIN/AdminPage";
import AddData from "../Components/ADMIN/AddData";
import Update from "../Components/ADMIN/Update";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/mobiles" element={<PrivateRoute><Mobile/></PrivateRoute>}></Route>
                <Route path="/mobiles/:id" element={<Singleproduct/>}></Route>
                <Route path="/laptop" element={<PrivateRoute><Laptops/></PrivateRoute>}></Route>
                <Route path="/laptop/:id" element={<LaptopProduct/>}></Route>
                <Route path="/headphone" element={<PrivateRoute><Headphones/></PrivateRoute>}></Route>
                <Route path="/headphone/:id" element={<HeadphoneProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/adm" element={<AdminLogin/>}></Route>
                <Route path="/admpage" element={<AdminPage/>}></Route>
                <Route path="/add" element={<AddData/>}></Route>
                <Route path="/update" element={<Update/>}></Route>
            </Routes>
        </div>
    )

}

export default AllRoutes;