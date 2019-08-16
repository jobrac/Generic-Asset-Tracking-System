import React from 'react';
import { Redirect } from 'react-router'
import {Token} from 'Services';
import {Login} from 'Components';

class LoginMiddleware extends React.Component<any,any>{

    constructor(props:any){
        super(props);

        this.state = {
            finish : false,
            token : false,
        }

    }

    async componentDidMount(){
        if (await Token.valid()){
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
            return <Redirect to={{ pathname : '/'}} />;
        }

        return <Login {...this.props} />;
    }
}

export default LoginMiddleware;