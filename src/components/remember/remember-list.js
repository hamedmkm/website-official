import React from "react"
import {Remember} from './Remember'
export function RememberList (props){
return props.remember.map(item=<div className="col-6" key={item.id}>
<Remember data={item}/>

</div>)



}