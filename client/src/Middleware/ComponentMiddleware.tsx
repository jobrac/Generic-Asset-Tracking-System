import React from 'react';
import {Token, Requests} from 'Services';
import { Redirect } from 'react-router';
import {connect} from 'react-redux'; // for connecting redux;
import { UserAccount as User } from 'Redux/Actions';
import jwt_decode from 'jwt-decode';

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

            const id:any = jwt_decode(Token.get());
            const user:Requests.Format = await Requests.User.get(id.sub);

            if(user.status === 200){
                this.props.User(user.data);
                this.setState({
                    finish : true,
                    token : true,
                })
            }
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

export default connect(null,{User})(ComponentMiddleware);