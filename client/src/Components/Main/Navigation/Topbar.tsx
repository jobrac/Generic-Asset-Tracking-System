import React from 'react';
import {InputBase, IconButton, Typography,CssBaseline, Toolbar, AppBar, Button, Avatar, Popover, Badge, Card, CardContent, CardActions, CardHeader, List, ListItem, ListItemIcon, ListItemText, Divider, LinearProgress } from '@material-ui/core';
import {Assignment, Search, ArrowDropDown,AssignmentReturned, Edit, ExitToApp, Notifications} from '@material-ui/icons';
import './NavigationStyle.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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

    //for notification popover
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return(
        <React.Fragment>
            <CssBaseline />
            
            <AppBar position="fixed" className="appbar" >
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
                        <img className="navigation-logo" src={props.logo} alt={props.menu_title} />
                        <div className="title-navigation">
                            {props.menu_title}
                        </div>
                    </Typography>
                        <div className={ props.state.search ? "search search-toggles" : "search" }>
                            <div className="search-icon">
                                <Search />
                            </div>
                            <InputBase
                                className="search-input"
                                name="search"
                                placeholder="Lookup for assets..."
                                inputProps={{ 'aria-label': 'search' }}
                                onFocus={ () => props.toggleSearch() }
                                autoComplete = "off"
                            />

                        </div>

                        
                        <div className="add-new-top-bar">
                            {/* <Button
                                color = "primary"
                                variant = "contained"
                                className = "menu-max-add"
                            >
                                Add New
                            </Button> */}
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                className = "menu-min-add"
                                onClick={handleClick}
                                // onClick={handleClick}
                            >
                                <Badge badgeContent={4} color="primary">
                                    <Notifications style={{font:'white'}} />
                                </Badge>
                            </IconButton>

                            <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'center',
                            // }}
                            >
                               <Card >
                                   <CardHeader
                                        title ="You have 0 items below or almost below minimum quantity levels"
                                        className="notification-header"
                                   />
                                    <CardContent className="notification-content">
                                    <List>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Inbox"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                            <div className="list-remaining">
                                                20 Remaining
                                            </div>
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText 
                                                primary="Drafts"
                                                secondary = {
                                                    <Typography component="div">
                                                        <LinearProgress variant="determinate" value={90} />
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                    </CardContent>
                                    <CardActions className="notification-footer">
                                        <Button color="primary" variant="contained" size="small">View All</Button>
                                    </CardActions>
                                </Card>
                            </Popover>

{/* 
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                className = "menu-min-add"
                                // onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton> */}
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
                            // }e
                            
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