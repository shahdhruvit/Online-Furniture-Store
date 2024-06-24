import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';

import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import Cancel from '../components/Cancel';
import Sucess from '../components/Sucess';
const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>

    <Route path='/*' element={<ProtectedRoute/>}>
      <Route path='checkout' element={<Checkout/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='dashboard/all-products' element={<AllProducts/>} />
      <Route path='dashboard/add-product' element={<AddProducts/>} />
      <Route path='dashboard/users' element={<Users/>} />
    </Route>

    {/* <Route path='checkout' element={<ProtectedRoute>
      <Checkout/>
    </ProtectedRoute>}/> */}
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>

    {/* payment */}
    <Route path='sucess' element={<Sucess/>}/>
    <Route path='cancel' element={<Cancel/>}/>
  </Routes>
  );
  };

export default Routers;

// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase.config'; // Import Firebase authentication instance
// import Home from '../pages/Home';
// import Shop from '../pages/Shop';
// import Cart from '../pages/Cart';
// import ProductDetails from '../pages/ProductDetails';
// import Checkout from '../pages/Checkout';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import ProtectedRoute from './ProtectedRoute';
// import AddProducts from '../admin/AddProducts';
// import AllProducts from '../admin/AllProducts';
// import Dashboard from '../admin/Dashboard';
// import Users from '../admin/Users';
// import Cancel from '../components/Cancel';
// import Sucess from '../components/Sucess';

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="home" />} />
//       <Route path="home" element={<Home />} />
//       <Route path="shop" element={<Shop />} />
//       <Route path="shop/:id" element={<ProductDetails />} />
//       <Route path="cart" element={<Cart />} />

//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       {/* Protected Routes */}
//       <ProtectedRoute path="/*">
//         <Route path="checkout" element={<Checkout />} />
//         <Route path="dashboard" element={<DashboardOrHome />} />
//         <Route path="dashboard/all-products" element={<AllProducts />} />
//         <Route path="dashboard/add-product" element={<AddProducts />} />
//         <Route path="dashboard/users" element={<Users />} />
//         <Route path="sucess" element={<Sucess />} />
//         <Route path="cancel" element={<Cancel />} />
//       </ProtectedRoute>
//     </Routes>
//   );
// };

// // Custom component to determine whether to show Dashboard or Home page based on user role
// const DashboardOrHome = () => {
//   const [user] = useAuthState(auth);
//   const isAdmin = user && user.email === 'admin@gmail.com';

//   return isAdmin ? <Dashboard /> : <Navigate to="/home" />;
// };

// export default Routers;




