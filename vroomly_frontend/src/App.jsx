// import { useState } from 'react'r
import StartPage from './Pages/startpage.jsx'
import Signup from './Pages/signupPage.jsx'
import { Routes, Route } from 'react-router-dom';
import  LoginChoiceCards from "./Pages/chooseRole.jsx";
import CustomerDashboard from './Pages/Dashboard.jsx'; 
import Login from './Pages/loginPage.jsx';
import SellerDashboard from './components/sellerDashboard/SellerDashboard.jsx';
import SellerLayout from './components/sellerDashboard/SellerLayout.jsx';
import MyCars from './components/sellerDashboard/MyCars.jsx';
import Bookings from './components/sellerDashboard/Bookings.jsx';
import Earnings from './components/sellerDashboard/Earnings.jsx';
import Profile from './components/sellerDashboard/sellerProfile.jsx';



import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/chooseRole' element={<LoginChoiceCards />} />
        <Route path='/Customerdashboard' element={<CustomerDashboard />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/Sellerdashboard' element={<SellerDashboard />} /> */}




        <Route path="/sellerdashboard" element={<SellerLayout />}>

         
          <Route index element={<SellerDashboard />} />
          <Route path="my-cars" element={<MyCars />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile" element={<Profile />} />

        </Route>


      </Routes>
      
    </>
  )
}

export default App
