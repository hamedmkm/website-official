import React from "react";
import {rememberService }from '../components/remember'



import {useParams} from 'react-router-dom'
export function Detail (){

const {id} =useParams()

console.log(id)


const data = rememberService.getRememberById(id)
return <div style={styles.container} className=" container">
<div className="col-5">
<img src={data.pic} width="240%" height='auto'/>
</div>
<div className="col-11">
<h1>{data.title}</h1>

<p>{data.desc}</p>

<strong style={styles.date}>{data.date}</strong>
</div>

</div>

}

const styles={
    date:{
        color:'green',
        fontSize:23
    },
    container :{
width:'100%',
textAlign: 'left',
marginBottom: '10%',
margin:'auto',
marginTop:'5%',
boxShadow: '1px 5px 10px 10px #888888'
    }
}