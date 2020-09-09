import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './components.css';
import {Redirect} from 'react-router';
import axios from 'axios';
class prescriptionCreation extends React.Component{

    state ={
      prescriptionRequestID:[ ],
        priority:'High',
        comments:'',
        errorResponse:''
    }

    changeHandler = (e) => {
            this.setState({[e.target.name]: e.target.value})
    };
     
    changeHandlersub = e => { 
          this.setState({
            prescriptionRequestID: {
              ...this.state.prescriptionRequestID,
              [e.target.name]: e.target.value,
              'patientId': 'PA12323',
            }
          });
      }
       
    submitHandler = e => {
      e.preventDefault() //To avoid page refresh 
      axios.post('http://localhost:8080/patient/prescriptionRequest', this.state)
      .then(response => {
        if(response.status==200)
        {
          console.log(response.status)
          window.location.href="/prescription/successful"
        }
      })
      .catch(error => {
<<<<<<< HEAD
        this.setState({errorResponse: error.response})
=======
        this.setState({errorResponse: error.response.data})
>>>>>>> 9e8c944a09deae361b9358110c06608779678823
       console.log(this.state.errorResponse);
        //console.log(error.response.data);
      })
    }

                                                              // Render Below //
    render (){
      const { prescriptionRequestID, comments, priority, errorResponse } = this.state;
        return ( 
      <div>

        <div class="extraSpacing">
          &nbsp;
        </div>
        <div class="extraSpacing">
          &nbsp;
        </div>
        <div class="extraSpacing">
          &nbsp;
        </div>

      <form class="w-25 mx-auto bg-white p-5" onSubmit={this.submitHandler}
                    target="/presriptions">
          <div>
              <h4>Prescription Request Form</h4>
          </div>

          <div class="form-group">
            <label for="prescriberId">Prescription Request</label>
            <input type="text" class="form-control"  name="prescriberId"  onChange={this.changeHandlersub} placeholder="Enter Prescriber ID"/>
          </div>

          <div class="form-group">
            <label for="priority">Priority</label>
          <select class="custom-select" name="priority"  onChange={this.changeHandler}  required={true}>
            <option >High</option>
            <option >Medium</option>
            <option >Low</option>
          </select>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Enter Comments to Prescriber</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="comments" onChange={this.changeHandler} placeholder="Comments.."/>
          </div>
          
              <center><input type="submit" class="submitButton"></input></center>
              <br></br>
              <h6>{errorResponse}</h6>

      </form>
    </div>
   

    );
    }
}
export default prescriptionCreation;










// componentDidMount(){
    //     fetch('http://localhost:8080/prescriptionRequest/?patientId=333&${this.state.prescriberid}&comments=abc&priority=high')
    //     .then(result=>result.json())
    //     .then((data)=> {
    //         this.setState({PrescriptionRequest:data, Loading:false})
    //     })

    // }

   
     
   /* onSubmit = event => {
        event.preventDefault();
        const prescriberpd = encodeURIComponent(this.state.prescriberid);
        fetch(`http://localhost:8080/prescriptionRequest/?patientId=366&prescriberId=${prescriberpd}&comments=abc&priority=high`, {
        
        
        method: "POST",
         
          headers: { "Content-Type": "application/json" },
          
        })
          .then(res => {
            console.log("response: ", res);
          })
          .catch(err => {
            console.log("error:", err);
          });
       
      };

      onSubmittest = event => {
        event.preventDefault();
        //fetch(http://localhost:8080/patient/prescriptionRequest
        fetch('http://localhost:8080/prescriptionRequest/?patientId=400&prescriberId=128&comments=abcd&priority=high', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          
        })
          .then(res => {
            
            console.log("response: ", res);
            return <Redirect to='/' />

              
          })
          
          return <Redirect to="/" />
      };
*/


                      /* 
                      Code to toggle an element
                      <button type="button" class="btn btn-primary" onClick={() => this.setState({ showing: !showing })}>Submit</button>
                      { showing 
                              ? <div style={{}}>This is visible</div>
                              : null
                          } */