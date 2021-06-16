import React from "react";
import {Link} from 'react-router-dom'

export function Remember({data}){

 


    return <div className=" card-body  card mt-5 ">
    
        <img src={data.pic} classNam="card-img-top" />
        <h5 className=" card-title">{data.title}</h5>
        <d style={{fontSize:20,fontWright:700}} className="card-body text-success">{data.date}</d>
        <Link  to={'/detail/'+data.id}><span className="card-body btn btn-primary">show more</span></Link>
      
    </div>


}