import React from 'react';
import {InputBase, IconButton, Typography,CssBaseline, Toolbar, AppBar, Button, Avatar, Popover } from '@material-ui/core';
import {Assignment, Search, ArrowDropDown,AssignmentReturned, Edit, ExitToApp} from '@material-ui/icons';
import './NavigationStyle.scss';


interface Props{
    
    state           :   {
        width       :   number,
        sidebar     :   boolean,
        user        :   any,
        search      :   boolean
    },
    logo            :   string,
    menu_title      :   string,
    user            :   any,

    toggleSidebar() :   void,
    toggleSearch()  :   void,
    toggleUser(event:React.MouseEvent<HTMLElement>)             :   void,
    swipeDrawer(event: React.KeyboardEvent | React.MouseEvent)   :   void,
    logout()         :   void, 
}


const Topbar = (props:Props) => {
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className="appbar"
            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={ props.state.width < 600  ? 
                            "hamburger" 
                            :
                            props.state.sidebar ? "hamburger hamburger--squeeze is-active" : "hamburger"
                        } 
                        onClick={props.state.width > 600 ? props.toggleSidebar : props.swipeDrawer}
                    >	
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <img className="navigation-logo" src={props.logo} alt={props.menu_title} />{props.menu_title}
                    </Typography>
                        <div className="search">
                            <div className="search-icon">
                                <Search />
                            </div>
                            <InputBase
                                className="search-input"
                                name="search"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onFocus={ () => props.toggleSearch() }
                            />

                        </div>

                        
                        <div className="user-account">
                            <Button
                                color = "inherit"
                                onClick = {props.toggleUser}
                                
                            >
                                <Avatar 
                                    alt="Jobel Racines" 
                                    src="/img/sample.jpg"
                                    className = "user-avatar"
                                />
                                <div className="user-name">
                                    {props.user.first_name}
                                </div>

                                <ArrowDropDown />
                            </Button>
                        </div>

                        <Popover 
                            open={Boolean(props.state.user)} 
                            anchorEl={props.state.user}
                            onClose={props.toggleUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            className="user-menu"
                            // anchorPosition={
                            // 	{
                            // 		top : 200,
                            // 		left: 400
                            // 	}
                            // }
                            
                        >	
                            <div className="user-menu-profile">
                                <div className="header-user-profile">
                                    <Avatar 
                                        alt="Jobel Racines" 
                                        src="/img/sample.jpg"
                                        className="header-user-profile-avatar"
                                    />

                                    <div className="header-user-profile-name">
                                        {props.user.first_name+" "+props.user.last_name}
                                    </div>
                                    <div className="header-user-profile-description">
                                        {
                                            props.user.email !== null || props.user.email !== undefined ?
                                                props.user.email
                                            : ""
                                        }
                                    </div>
                                </div>

                                <div className="body-user-profile">
                                    <ul>

                                        <li>
                                            <div>Assigned</div>
                                            <div><AssignmentReturned /></div>
                                        </li>

                                        <li>
                                            <div>Requested</div>
                                            <div><Assignment /></div>
                                        </li>

                                        <li>
                                            <div>Edit Profile</div>
                                            <div><Edit /></div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="footer-user-profile">
                                    <Button
                                        variant ="outlined"
                                        color   ="primary"
                                        onClick = {props.logout}
                                    >
                                        <ExitToApp />
                                        &nbsp;Logout
                                    </Button>
                                </div>
                            </div>
                                
                            
                        </Popover>




                        <div className="mobile-search" style={{display: !props.state.search ? 'none' : ''}}>
                            <div className="mobile-search-icon">
                                <Search />
                            </div>
                            <InputBase
                                name="searchBox"
                                id ="searchBox"
                                className="mobile-search-input"
                                placeholder="Search…"
                                autoFocus={props.state.search}
                                inputProps={{ 'aria-label': 'search' }}
                            />

                        </div>


                        <IconButton
                            color="inherit"
                            aria-haspopup="true"
                            edge="end"
                            className="search-toggle"
                            onClick={props.toggleSearch}
                        >
                            <Search />
                        </IconButton>
                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}

export default Topbar;