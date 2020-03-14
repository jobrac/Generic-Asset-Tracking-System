import React from 'react';
import * as Component from 'Components';
import {useSelector} from 'react-redux';
// import Fetcher from 'Services/Fetcher';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';


const Header=(props:any) => {
	const status = useSelector((state:any) => state.Stat);


	return (
        status.loggedIn ? 
        	<React.Fragment>    
            	{/* <Fetcher /> */}
                <Component.Navigation />
                {
                	status.breadcrumbs.length !== 0  ?
                    	status.breadcrumbs.length === 1 ?
                        	<Breadcrumbs separator="›" aria-label="breadcrumb">
                            	<Typography color="textPrimary">{status.breadcrumbs[0].name}</Typography>
                            </Breadcrumbs>
                       	:
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
	                        {
	                        	status.breadcrumbs.slice(0,-1).map((value:any,key:any)=>(
	                            	<Link color="inherit" href={value.url} key={key}>
	                                	{value.name}
	                                </Link>
	                            ))
	                        }
	                        <Typography color="textPrimary">{status.breadcrumbs.slice(-1)[0].name}</Typography>
                       	</Breadcrumbs>
                    :  ''
                }
        	</React.Fragment>     
    	: null
    )
}

export default Header;