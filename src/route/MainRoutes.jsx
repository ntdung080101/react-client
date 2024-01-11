import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import SingleProduct from '../Pages/SingleProduct';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import CartPage from '../Pages/CartPage';
import CheckOut from '../Pages/CheckOut';
import ErrorPage from '../Pages/ErrorPage';
import AdminPage from '../Pages/AdminPage';
import Private from './Private';
import ProductPage from '../Pages/ProductPage';
import AdminLogin from '../Pages/AdminLogin';
import PurchasePage from '../Pages/PurchasePage';
import PaymentGateway from '../component/Payment/PaymentGateway';
import AdminContext from '../component/Admin/AdminContext';
import PaymentDetail from '../component/Payment/PaymentDetail';
import PaymentPopup from '../component/Payment/PaymentPopup';
import MapPage from '../Pages/MapPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <Private>
            <CartPage />
          </Private>
        }
      />
      <Route
        path="/checkout"
        element={
          <Private>
            <CheckOut />
          </Private>
        }
      />
      <Route
        path="/purchase/:status"
        element={
          <Private>
            <PurchasePage />
          </Private>
        }
      />
      <Route
        path="/payment"
        element={
          <Private>
            <PaymentGateway  />
          </Private>
        }
      />
      <Route path='/paymentpopup' element={<PaymentPopup />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/paymentdetail' element={<PaymentDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
