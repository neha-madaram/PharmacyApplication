import React from 'react'
import './components.css'
import MapView from './mapview'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/card'
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