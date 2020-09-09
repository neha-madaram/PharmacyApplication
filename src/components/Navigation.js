import React from 'react';
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
         
       <div> 
          <li class="logo"><h1>Pharmacy</h1></li>
          <div class="hide">
          <li >
          <NavLink to="/"><h5>Home</h5></NavLink></li>
          <li><NavLink to="/prescriptions"><h5>Prescriptions</h5></NavLink></li>
          <li><NavLink to="/RecentOrders"><h5>Recent Orders</h5></NavLink></li>
          <li><NavLink to="/HomeDelivery"><h5>Home Delivery</h5></NavLink></li>
          <li><NavLink to="/PayABill"><h5>Pay A Bill</h5></NavLink></li>
          <li><NavLink to="/LocatePharmacy"><h5>Locate a Pharmacy</h5></NavLink></li>
          </div>
      
       
       </div>
       
       </div>
    );
}
 
export default Navigation;