import React from "react";
import '../../asset/css/card.css';
import { Link } from "react-router-dom";
const Card = (props) => {
    return(
        <>
         
             
            
            <div className={`shadow-lg card  green order-card ${ props.color }`}>
                <div className="card-block">
                    <h5 className="m-b-20">{props.title}<i  className={`${ props.font }`}></i></h5>
                    <h3 className=" text-center " style={{marginTop:"25px"}}>{props.data}</h3>
                    <p className="m-b-0 f-right"><Link to="/addreferral">{props.link}</Link></p>
                </div>
            </div>
     


     

       

    
        </>
    )
}
export default Card