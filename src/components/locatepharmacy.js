import React from 'react'
import './components.css'
import MapView from './mapview'

const Home = () => {
    const stylePrescriptions = {backgroundColor : 'red'};
    const styleOrders = {backgroundColor : 'blue'};
    const styleAccount = {backgroundColor : 'yellow'};
    return (
        
        
       <div>
       <MapView/>
       </div>
  


    );
}

export default Home;