import React from 'react';

export default function Card(props) {
    return(

        <div className = "card-cover">
            <div className = "cards container-fluid">
                <div className="row">
                    <div className = " profile col-3">
                        <img src={props.imgsrc} className="img-fluid" alt="error"/>
                    </div>
                    <div className = "info col-7">
                        <h5>{props.name}</h5>
                        <p>{props.exp}</p>
                        <p>{props.edu}</p>
                        <p>{props.specialize}</p>
                    </div>
                    <div className = "fees col-2"><span><i className="fas fa-rupee-sign"></i></span>{props.fee}</div>
                </div>
                <div className="border mx-auto"></div>
            </div>
            
            <div className = "tag">
                {props.avail==="Yes"? 
                    <div className = "availability">Next Availability<br/>At 5:30 PM</div> : 
                    <div className = "availability">Not Available</div>
                }
                <div className = "schedule">
                    <button className="btn btn-outline-primary">Schedule Now</button>
                </div>
            </div>
        </div>
    );
}