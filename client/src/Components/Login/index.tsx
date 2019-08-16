import React from 'react';
import {Card, CardHeader, CardContent, Avatar, TextField, Button, CircularProgress, Container} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons';
import './LoginStyle.scss';
import {Requests,Token} from 'Services';
import { Redirect } from 'react-router';
import jwt_decode from 'jwt-decode';

class Login extends React.Component<any,any>{

    constructor(props:any){
        super(props);

        this.state = {
            redirect        : '',
            submit          : false,
            credentials     : {
                username    :   '',
                password    :   ''
            },
            error           : {
                status      : false,
                message     : '',
            }
        }

        this.submit = this.submit.bind(this);
        this.update_input_text = this.update_input_text.bind(this);
        this.checkUser = this.checkUser.bind(this);

    }

    render(){
        if(this.state.redirect!== ''){
            return <Redirect to={{pathname:this.state.redirect}}/>;
        }

        return(
            <Container maxWidth="lg">
                <div className="logo-login">
                    <img src='/img/apsoft-logo.png' alt="logo" />
                    <div className="logo-title">
                        asset management system     
                    </div>
                </div>
                <Card className="card-login">
                    <CardHeader
                        className = "header-login"
                        avatar = {
                            <div className="wrap-user-icon">
                                <Avatar className="user-icon-login">
                                    <AccountCircle className="user-icon-login1"/>
                                </Avatar>
                            </div>
                        }
                    />
                    
                    <CardContent className="card-content-login">
                        <form onSubmit={this.submit}>
                            <TextField
                                className="username-login"
                                label="Username"
                                type="text"
                                name="username"
                                autoComplete="username"
                                margin="normal"
                                variant="outlined"
                                disabled={this.state.submit}
                                onChange={this.update_input_text}
                                value={this.state.credentials.username}
                                error = {this.state.error.status}
                                required
                            />

                            <TextField
                                className="password-login"
                                label="Password"
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                disabled={this.state.submit}
                                onChange={this.update_input_text}
                                value={this.state.credentials.password}
                                error = {this.state.error.status}
                                helperText = { this.state.error.status ? <b dangerouslySetInnerHTML={{__html:this.state.error.message}}></b> : '' }
                                required
                            />
                            <div className="submit-login">
                                <Button variant="contained" color="primary" disabled={this.state.submit} type="submit">
                                    Submit
                                    { 
                                        this.state.submit 
                                        ? <CircularProgress />
                                        : ''
                                    }
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    update_input_text(event:any){
        const a = this.state.credentials;

        a[event.target.name] = event.target.value;

        this.setState({
            credentials : a
        });
    }

    async submit(event:any){
    
        event.preventDefault();

        this.setState({
            submit : true,
            error: {
                status : true,
                message : '',
            }
        });

        const credentials = this.state.credentials;


        const a:any = await Requests.Auth.login({
            username : credentials.username,
            password : credentials.password,
        });

        if(!a.network_error){
            switch(a.status){
                case 401 : 
                    credentials['password'] = "";

                    this.setState({
                        submit : false,
                        error : {
                            status : true,
                            message : "Credentials does not exist!!"
                        },
                        credentials : credentials,
                    })
                    break;
                case 200 :

                    Token.save(a.data.token);

                    const jwt:any = jwt_decode(Token.get()); // get id of current user using JWT payload
                    const user =await Requests.User.get(jwt.sub);
                    this.checkUser(user);
                    break;
                default : 
                    this.setState({
                        submit : false,
                        error : {
                            status : true,
                            message : "Something wrong with the server, please try again later!!!!"
                        },
                    })
                    break;
            }
        }else{
            this.setState({
                submit : false,
                error : {
                    status : true,
                    message : "Something wrong with the server. <br /> Please contact Administrator!!!!"
                },
            })
        }

        return;
    }


    checkUser(user:Requests.Format):any{

        if(user.status === 200){
            if(!user.data.activated){
                this.setState({
                    submit : false,
                    error : {
                        status : true,
                        message : "The account is not authorized to log in. <br /> Please contact Administator"
                    },
                });

                Token.remove();
                return;
            }

            const returnUrl = this.props.location.state;
            
            if(returnUrl === undefined || returnUrl === null ){
                this.setState({
                    redirect : '/',
                })
                return;
            }
            
            this.setState({
                redirect : returnUrl.from, 
            })
            return;
        }

        this.setState({
            submit : false,
            error : {
                status : true,
                message : "Something went wrong.!!!<br /> Please contact Administator!!!"
            },
        });

        Token.remove();
        return;

    }

}

export default Login;