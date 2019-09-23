import React from 'react';
import {Card, CardHeader, CardContent, Avatar, TextField, Button, CircularProgress, Container} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons';
import './LoginStyle.scss';
import {Requests,Token} from 'Services';
import { Redirect } from 'react-router';
import jwt_decode from 'jwt-decode';

const logo = process.env.REACT_APP_LOGO;


const Login = (props:any) => {
    
    const [ redirect, setRedirect ] = React.useState('');
    const [ submit, setSubmit ] = React.useState(false);
    const [ credentials, setCredentials ] = React.useState({username : '',password : '',});
    const [ error, setError ] = React.useState({status   : false,message  : ''});

    const update_input_text = (event:any) => {
        setCredentials({
            ...credentials,
            [event.target.name] : event.target.value,
        });
    }

    const submitForm = async (event:any) => {
    
        event.preventDefault();
        setSubmit(true);
        setError({status:true,message:''});

        const a:any = await Requests.Auth.login({
            username : credentials.username,
            password : credentials.password,
        });

        if(!a.network_error){
            switch(a.status){
                case 401 :
                    setCredentials({
                        ...credentials,
                        password : "",
                    })
                    setError({
                        status : true,
                        message: "Credentials does not exist!!",
                    })
                    setSubmit(false);

                    break;
                case 200 :

                    Token.save(a.data.token);

                    const jwt:any = jwt_decode(Token.get()); // get id of current user using JWT payload
                    const user =await Requests.User.get(jwt.sub);
                    checkUser(user);
                    break;
                default :
                    setSubmit(false);
                    setError({
                        status : true,
                        message:  "Something wrong with the server, please try again later!!!!",
                    })
                    break;
            }
        }else{
            setSubmit(false);
            setError({
                status : true,
                message : "Something wrong with the server. <br /> Please contact Administrator!!!!"
            })
        }

        return;
    }


    const checkUser = (user:Requests.Format):any => {

        if(user.status === 200){
            if(!user.data.activated){
                setSubmit(false);
                setError({
                    status : true,
                    message: "The account is not authorized to log in. <br /> Please contact Administator"
                });

                Token.remove();
                return;
            }

            const returnUrl = props.location.state;
            
            if(!returnUrl){
                setRedirect('/');
                return;
            }
            setRedirect(returnUrl.from);
            return;
        }
        setSubmit(false);
        setError({
            status : true,
            message : "Something went wrong.!!!<br /> Please contact Administator!!!"
        })
        Token.remove();
        return;
    }

    if(redirect!== ''){
        return <Redirect to={{pathname:redirect}}/>;
    }

    return(
        <Container maxWidth="lg">
            <div className="logo-login">
                <img src={logo} alt="logo" />
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
                    <form onSubmit={submitForm}>
                        <TextField
                            className="username-login"
                            label="Username"
                            type="text"
                            name="username"
                            autoComplete="username"
                            margin="normal"
                            variant="outlined"
                            disabled={submit}
                            onChange={update_input_text}
                            value={credentials.username}
                            error = {error.status}
                            required
                        />

                        <TextField
                            className="password-login"
                            label="Password"
                            type="password"
                            name="password"
                            margin="normal"
                            variant="outlined"
                            disabled={submit}
                            onChange={update_input_text}
                            value={credentials.password}
                            error = {error.status}
                            helperText = {error.status ? <b dangerouslySetInnerHTML={{__html:error.message}}></b> : '' }
                            required
                        />
                        <div className="submit-login">
                            <Button variant="contained" color="primary" disabled={submit} type="submit">
                                Submit
                                { 
                                    submit 
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

export default Login;