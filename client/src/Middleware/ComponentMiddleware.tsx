import React from 'react';
import {Token} from '../Services';
import { Redirect } from 'react-router';

class ComponentMiddleware extends React.Component<any,any>{

    constructor(props:any){
        super(props);

        this.state = {
            finish : false,
            token : false,
        }
    }

    async componentDidMount(){
        if(await Token.valid()){
            this.setState({
                finish : true,
                token : true,
            })
        }
        this.setState({
            finish : true,
        })
        
    }

    render(){
        if(!this.state.finish){
            return null;
        }

        if(this.state.token){
            return <this.props.component props={this.props}  />;
        }
        return <Redirect to={{pathname:'/login', state: { from : this.props.location.pathname}}} />;
    }

}

export default ComponentMiddleware;