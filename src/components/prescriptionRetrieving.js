import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './components.css';
import { Link, Redirect } from 'react-router-dom';
import Home from './home';
import axios from 'axios';
import { browserHistory, Router, Route } from 'react-router';


class PrescriptionRetrieving extends React.Component{
    state = {
        patientDetails: [],
        Loading: true,
        showing:true,
        patientId:'PA12324',
        isSignedUp: false,
    };
    
    async componentDidMount() {
        console.log("in component mount")
        const {patientDetails, patientId, isSignedUp } = this.state;
    axios.get(`http://SpringsApplication.us-east-1.elasticbeanstalk.com/patient/getPatientDrugs/?patientId=${patientId}`)
    .then(res => {
        const patientDetail = res.data
        this.setState({ patientDetails: patientDetail})
      })
      .catch(error => {
        console.log(error);
      })
    }
    

    render() { 
        const {patientDetails, isSignedUp } = this.state;
        if(isSignedUp)
        {
            return <Redirect to="/"/>
        }
        return(
        
        <div>
        <div class="extraSpacing">
            &nbsp;
        </div>
        
        <div class="extraSpacing">
            &nbsp;
        </div>

     <section id="services" class="bg-light mt-5 text-dark">
    <div class="container">
        <div class="row">
            <div class=" p-5">
                {patientDetails.map((items) => (
                    <div>
                        <div class="row border">
                            
                            <h5 class="col-6 redcolor">Rx Id: {items.rxid}</h5>
                            <h5 class="col-6">Expiry: {items.rxexpired}</h5>
                            <h5 class="col-6">Drug Name :{items.drugname}</h5>
                            <h5 class="col-6">Dosage: {items.dosage}</h5>    
                        </div> 
                    </div>    
                ))}    
            </div>    
        </div>   
        </div>
     </section> 
     </div>
     )};
    }
    
    
    export default PrescriptionRetrieving;
     
