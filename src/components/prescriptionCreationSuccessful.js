import React from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
const prescrptionCreationSuccessful= () =>  {
    return(
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
    <div class="extraSpacing">
        &nbsp;
    </div>
    <section id="services" class="bg-light text-black">
            <div class="container p-5">
                    <div class="row">
                        <div class="mx-auto">
                            <h4>You have successfully created a request for a prescription</h4>
                        </div>
                        </div>
                            <div class="text-center">
                                <Link to="/prescriptions">

                            <Button variant="primary"> Go to prescription Page </Button>
                            
                            </Link>
                    </div>
             </div>
     </section>
</div>

    )};
export default prescrptionCreationSuccessful;