import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './components.css';
import { Link } from 'react-router-dom';
import Home from './home';




class Prescription extends React.Component{
    state = {
        drugs: [],
        Loading: true,
        showing:true
    };

    

    async componentDidMount() {

        fetch('http://localhost:8080/getPD')
    .then(res => res.json())
    .then((data) => {
      this.setState({ drugs: data });
      console.log(this.state.drugs)
    })
    .catch(console.log)
}
    

    render() {
        const { Loading, drugs, showing } = this.state;
    return(
       
    <div>
       <div class="extraSpacing">
           &nbsp;
       </div>
    
       <div class="extraSpacing">
           &nbsp;
       </div>
       <section id="services" class="bg-light text-black">
            <div class="container p-5">
                    <div class="row">
                        <div class="mx-auto">
                            <h4>Create a request for prescription today!</h4>
                        </div>
                        </div>
                            <div class="text-center">
                                <Link to="/prescriptionCreation">
                            <Button variant="primary">Create </Button>
                            
                            </Link>
                    </div>
             </div>
     </section>

     <section id="services" class="bg-white text-black">
            <div class="container p-5">
                    <div class="row">
                        <div class="mx-auto">
                            <h4>Retrieve your prescriptions!</h4>
                        </div>
                        </div>
                            <div class="text-center">
                            <Link to="/prescription/retrieving">
                            <Button variant="primary">Retrieve</Button>{' '}
                            </Link>
                    </div>
             </div>
     </section>

     <section id="services" class="bg-light text-black">
            <div class="container p-5">
                    <div class="row">
                        <div class="mx-auto">
                            <h4>Request for an update in Prescription!</h4>
                        </div>
                        </div>
                            <div class="text-center">
                            <Button variant="primary">Update</Button>{' '}
                    </div>
             </div>
     </section>

     <section id="services" class="bg-white text-black">
            <div class="container p-5">
                    <div class="row">
                        <div class="mx-auto">
                            <h4>Request for Delete a prescription</h4>
                        </div>
                        </div>
                            <div class="text-center">
                            <Button variant="primary">Update</Button>{' '}
                    </div>
             </div>
     </section>

      {/* <section id="services" class="bg-light mt-5 text-dark">
    <div class="container">
        <div class="row">
            <div class="mx-auto p-5">
                {drugs.map((items) => (
                    <div>
                        <div class="row border">
                            <h5 class="col-6">{items.patientId}</h5>
                            <h5 class="col-6">{items.rxId}</h5>
                        </div>  
                    </div>    
                ))}    
            </div>    
        </div>   
        </div>
     </section>

     <section id="services" class="bg-light mt-5 text-dark">
    <div class="container">
        <div class="row">
            <div class="mx-auto p-5">
                {drugs.map((items) => (
                    <div>
                        <div class="row border">
                            <h5 class="col-6">{items.patientId}</h5>
                            <h5 class="col-6">{items.rxId}</h5>
                        </div>  
                    </div>    
                ))}    
            </div>    
        </div>   
        </div>
     </section>  */}
     </div>
     )};
    }
    
    
    export default Prescription;
     
