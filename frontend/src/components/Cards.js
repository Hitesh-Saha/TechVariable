import React, { useState }from 'react';
import Dropdown from './Dropdown';
import Card from './Card';

export default function Cards(){
    const[results,setResults] = useState([]);

    const value = (data) =>{
        setResults(data);     
    }

    const showCard = (val) => {
        return (
            <Card
              imgsrc={val.img}
              name={val.name}
              exp={val.experience}
              edu={val.education}
              specialize={val.specialization}
              avail={val.available}
              fee={val.fees}
            />
        );
    }
      
    return(
        
        <div className="container-fluid main">
            <Dropdown update={value}/>
            <div className="body">
                {results.map(showCard)}             
            </div>
        </div>
    );
}
