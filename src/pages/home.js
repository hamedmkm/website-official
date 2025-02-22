import React from "react";
import { RememberList } from "../components/remember";
import  {rememberService} from '../components/remember'

export class Homepage extends React.Component{


state = {remember: []};

componentDidMount(){
    rememberService.getRemembers().then(response=>this.setState({remember:response.data}))

}

render(){
    return <div className="container ">
    <div className="row">
    <RememberList remember={this.state.remember}/>
    </div>
    </div>
}

}