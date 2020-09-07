import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Navigation from './components/Navigation';
import Prescription from './components/prescription'
import PayABill from './components/payABill'
import RecentOrders from './components/recentOrders'
import HomeDelivery from './components/homeDelivery'
import LocatePharmacy from './components/locatepharmacy'
import prescriptionCreation from './components/prescriptionCreation';
import prescriptionCreationSuccessful from './components/prescriptionCreationSuccessful';
import PrescriptionRetrieving from './components/prescriptionRetrieving';

import './App.css'

    class App extends React.Component {

      state = { 
        Loading: true,
        Person: null
      };
      // // async componentDidMount() {
      // //   const url = "http://localhost:8081/createDrug";
      // //   const response = await fetch(url);
      // //   const data = await response.json();
      // //   this.setState({Person: data, Loading:false})
      // //   console.log(data);
      // // }

      render() {
        
        return ( 

          <div class="comp">     
          <BrowserRouter>
           <div>
             <Navigation />
               <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/prescriptions" component={Prescription} exact/>
                <Route path ="/RecentOrders" component={RecentOrders} exact/>
                <Route path="/HomeDelivery" component={HomeDelivery} exact />
                <Route path="/PayABill" component={PayABill} exact />
                <Route path="/LocatePharmacy" component={LocatePharmacy} exact />
                <Route path="/prescriptionCreation" component={prescriptionCreation} exact />
                <Route path="/prescription/successful" component={prescriptionCreationSuccessful} exact />
                <Route path="/prescription/retrieving" component={PrescriptionRetrieving} exact/>
              </Switch>
           </div> 
         </BrowserRouter>
         <div class="extraSpacing">
           &nbsp;
         </div>
         <div>
         </div>
          </div>
          );
      }

    } 

    export default App;