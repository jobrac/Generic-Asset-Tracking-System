import React from 'react';
import {Backdrop, Container, Collapse, SwipeableDrawer, ListItemText, ListItemIcon, ListItem, Divider, List, Drawer } from '@material-ui/core';
import {Dashboard,Laptop, Assignment, Mouse, BatteryFull, Keyboard, AssignmentInd, SaveAlt, Settings, Print, PlaylistAddCheck,ExpandLess, ExpandMore, ArrowRightAlt} from '@material-ui/icons';
import Topbar from './Topbar';
import './NavigationStyle.scss';
import {connect} from 'react-redux';
import {Token} from 'Services';

//constant setup for navigations
const menu_title = "Asset Management";
const logo = "/img/apsoft-logo.png";
const sidebar_properties = [
	{
		name : "Dashboard",
		icon : Dashboard,
		url  : "/" 
	},{
		name : "Assets",
		icon : Laptop,
		props: [
			{name : "List All", 		url  : "/assets"},
			{name : "Bulk Checkout", 	url : "/assets/bulkcheckout"},
			{name : "Requested", 		url : "/assets/requested"},
			{name : "Deleted", 			url : "/assets/deleted"},
			{name : "Asset Maintenance",url : "/assets/maintenace"},
			{name : "Bulk Audit", 		url : "/assets/bulkaudit"},
		]
	},{
		name : "Licenses",
		icon : Assignment,
		url  : '/licenses',
	},{
		name : "Accessories",
		icon :  Mouse,
		url  : "/accessories", 
	},{
		name : "Consumables",
		icon : BatteryFull,
		url  : "/consumables",
	},{
		name : "Components",
		icon : Keyboard,
		url  : "/components",
	},{
		name : "Users",
		icon : AssignmentInd,
		url  : "/users",
	},{
		name : "Imports",
		icon : SaveAlt,
		url  : "/imports",
	},{
		name : "Settings",
		icon : Settings,
		url  : "/settings",
		props: [
			{name : "List All", 		url  : "/assets"},
			{name : "Bulk Checkout", 	url : "/assets/bulkcheckout"},
			{name : "Requested", 		url : "/assets/requested"},
			{name : "Deleted", 			url : "/assets/deleted"},
			{name : "Asset Maintenance",url : "/assets/maintenace"},
			{name : "Bulk Audit", 		url : "/assets/bulkaudit"},
		]
	},{
		name : "Reports",
		icon : Print,
		url  : "/reports",
	},{
		name : "Requestable",
		icon : PlaylistAddCheck,
		url  : "/requestables", 
	}
]
















//Do not touch below if you dont want to fuck-up !!!
class Navigation extends React.Component<any,any>{
	constructor(props:any){
		super(props);

		this.state = {
			sidebar 	 : false,
			sidebarProps : {},
			swipe	     : false,
			width 		 : window.innerWidth,
			search 		 : false,
			user		 : null,
		}

		this.toggleSidebar 		= this.toggleSidebar.bind(this);
		// this.topbar 			= this.topbar.bind(this);
		this.sidebar_desktop 	= this.sidebar_desktop.bind(this);
		this.sidebar_list 		= this.sidebar_list.bind(this);
		this.sidebar_mobile 	= this.sidebar_mobile.bind(this);
		this.swipeDrawer 		= this.swipeDrawer.bind(this);
		this.updateBrowserWidth = this.updateBrowserWidth.bind(this);
		this.toggleSearch 		= this.toggleSearch.bind(this);
		this.toggleUser			= this.toggleUser.bind(this);
	}


	//update browser width in state when chages occurs
	updateBrowserWidth(){
		this.setState({
			width : window.innerWidth,
		});
	}


	
	componentDidMount(){
		//add native window listener
		window.addEventListener('resize', this.updateBrowserWidth)

		sidebar_properties.forEach((value) =>{
			if(value.props){
				this.setState({
					sidebarProps : {
						...this.state.sidebarProps,
						[value.name] : false,
					},
				})
			}
		})
	}

	componentWillUnmount(){
		//remove native listener when component is unmounting
		window.removeEventListener('resize', this.updateBrowserWidth);
	}

	toggleUser(event: React.MouseEvent<HTMLElement>):void{
		this.setState({
			user : this.state.user ? null: event.currentTarget,
		})
	}
	
	toggleSidebar():void{
		
		if(this.state.search){
			this.toggleSearch();
		}

		this.setState({
			sidebar : !this.state.sidebar,
		});
	}

	toggleSearch():void{

		if(this.state.sidebar){
			this.toggleSidebar();
		}

		this.setState({
			search : !this.state.search,
		})
	}

	swipeDrawer(event: React.KeyboardEvent | React.MouseEvent){
		if ( event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}
	
		this.setState({
			swipe : !this.state.swipe,
		});
	};

	// topbar(){
	// 	return(
	// 		<React.Fragment>
	// 			<CssBaseline />
	// 			<AppBar
	// 				position="fixed"
	// 				className="appbar"
	// 			>
	// 				<Toolbar>

	// 					<IconButton
	// 						color="inherit"
	// 						aria-label="open drawer"
	// 						edge="start"
	// 						className={ this.state.width < 600  ? 
	// 							"hamburger" 
	// 							:
	// 							this.state.sidebar ? "hamburger hamburger--squeeze is-active" : "hamburger"
	// 						} 
	// 						onClick={this.state.width > 600 ? this.toggleSidebar : this.swipeDrawer}
	// 					>	
	// 						<span className="hamburger-box">
	// 							<span className="hamburger-inner"></span>
	// 						</span>
	// 					</IconButton>
	// 					<Typography variant="h6" noWrap>
	// 						<img className="navigation-logo" src={logo} alt={menu_title} />{menu_title}
	// 					</Typography>
	// 						<div className="search">
	// 							<div className="search-icon">
	// 								<Search />
	// 							</div>
	// 							<InputBase
	// 								className="search-input"
	// 								name="search"
	// 								placeholder="Search…"
	// 								inputProps={{ 'aria-label': 'search' }}
	// 								onFocus={ () => this.toggleSearch() }
	// 							/>

	// 						</div>

							
	// 						<div className="user-account">
	// 							<Button
	// 								color = "inherit"
	// 								onClick = {this.toggleUser}
									
	// 							>
	// 								<Avatar 
	// 									alt="Jobel Racines" 
	// 									src="/img/sample.jpg"
	// 									className = "user-avatar"
	// 								/>
	// 								<div className="user-name">
	// 									{this.props.user.first_name}
	// 								</div>

	// 								<ArrowDropDown />
	// 							</Button>
	// 						</div>

	// 						<Popover 
	// 							open={Boolean(this.state.user)} 
	// 							anchorEl={this.state.user}
	// 							onClose={this.toggleUser}
	// 							anchorOrigin={{
	// 								vertical: 'bottom',
	// 								horizontal: 'right',
	// 							}}
	// 							className="user-menu"
	// 							// anchorPosition={
	// 							// 	{
	// 							// 		top : 200,
	// 							// 		left: 400
	// 							// 	}
	// 							// }
								
	// 						>	
	// 							<div className="user-menu-profile">
	// 								<div className="header-user-profile">
	// 									<Avatar 
	// 										alt="Jobel Racines" 
	// 										src="/img/sample.jpg"
	// 										className="header-user-profile-avatar"
	// 									/>

	// 									<div className="header-user-profile-name">
	// 										{this.props.user.first_name+" "+this.props.user.last_name}
	// 									</div>
	// 									<div className="header-user-profile-description">
	// 										{
	// 											this.props.user.email !== null || this.props.user.email !== undefined ?
	// 												this.props.user.email
	// 											: ""
	// 										}
	// 									</div>
	// 								</div>

	// 								<div className="body-user-profile">
	// 									<ul>

	// 										<li>
	// 											<div>Assigned</div>
	// 											<div><AssignmentReturned /></div>
	// 										</li>

	// 										<li>
	// 											<div>Requested</div>
	// 											<div><Assignment /></div>
	// 										</li>

	// 										<li>
	// 											<div>Edit Profile</div>
	// 											<div><Edit /></div>
	// 										</li>

	// 									</ul>
	// 								</div>

	// 								<div className="footer-user-profile">
	// 									<Button
	// 										variant ="outlined"
	// 										color   ="primary"
	// 									>
	// 										<ExitToApp />
	// 										&nbsp;Logout
	// 									</Button>
	// 								</div>
	// 							</div>
									
								
	// 						</Popover>




	// 						<div className="mobile-search" style={{display: !this.state.search ? 'none' : ''}}>
	// 							<div className="mobile-search-icon">
	// 								<Search />
	// 							</div>
	// 							<InputBase
	// 								name="searchBox"
	// 								id ="searchBox"
	// 								className="mobile-search-input"
	// 								placeholder="Search…"
	// 								autoFocus={this.state.search}
	// 								inputProps={{ 'aria-label': 'search' }}
	// 							/>

	// 						</div>


	// 						<IconButton
	// 							color="inherit"
	// 							aria-haspopup="true"
	// 							edge="end"
	// 							className="search-toggle"
	// 							onClick={this.toggleSearch}
	// 						>
	// 							<Search />
	// 						</IconButton>
	// 				</Toolbar>
					
	// 			</AppBar>
	// 		</React.Fragment>
	// 	)
	// }

	sidebar_list(){
		let list = sidebar_properties;

		return(
			<List>
				{list.map((text, index) => (
					<React.Fragment key={index} >
						<ListItem button onClick={()=>{
							if(!this.state.sidebar){
								this.toggleSidebar();
							}

							if(!text.props){
								console.log('This is for the url');
							}else{
								
								this.setState({
									sidebarProps : {
										[text.name] : !this.state.sidebarProps[text.name]
									}
								});

								
							}
						}}>
							{
								(!text.props) ? 
									<React.Fragment>
										<ListItemIcon>{<text.icon />}</ListItemIcon>
										<ListItemText>{text.name}</ListItemText>
									</React.Fragment>
								: 
									<React.Fragment>
										<ListItemIcon>{<text.icon />}</ListItemIcon>
										<ListItemText>{text.name}</ListItemText>
										{this.state.sidebarProps[text.name] ? <ExpandLess /> : <ExpandMore />}
									</React.Fragment>

							}
						</ListItem>

						{
							(text.props) ? 
								<Collapse in={this.state.sidebarProps[text.name]} timeout="auto" unmountOnExit className={!this.state.sidebar ? "hide-sidebar" : ""}>
									<List component="div" disablePadding>
										{
											text.props.map((value,key)=>(
												<ListItem button key={key} className="nestedSidebar">
													<ListItemIcon><ArrowRightAlt /></ListItemIcon>
													<ListItemText >
														{value.name}
													</ListItemText>								
												</ListItem>
											))
										}
									</List>
								</Collapse>
								: ''
						}
						
					</React.Fragment>
				))}
			</List>
		);
	}

	sidebar_desktop(){
		return(
			<Drawer
        		variant="permanent"
        		className={this.state.sidebar ? "sidebar-open" : "sidebar-close"}
				open={this.state.sidebar}
				onMouseEnter={()=> this.toggleSidebar()}
				// onMouseLeave={()=> this.toggleSidebar()}
      		>
        			<this.sidebar_list />
      		</Drawer>
		);
	}

	sidebar_mobile(){
		return(
			<div
    			className="swipe-list"
      			role="presentation"
    		>
				<div className="mobile-logo">
					<img src={logo} alt={menu_title} />
					<p>{menu_title}</p>
				</div>

				<Divider />
      			<this.sidebar_list />
    		</div>
		);
	}

	logout(){
		Token.remove();
		window.location.reload();
	}


	render(){
		return(
			<div>
				<SwipeableDrawer
        			open={this.state.swipe}
        			onClose={this.swipeDrawer}
        			onOpen={this.swipeDrawer}
      			>
        			<this.sidebar_mobile />
      			</SwipeableDrawer>
				
				{/* <this.topbar /> */}

				<Topbar 
					state 			= {this.state}
					logo  			= {logo}
					menu_title 		= {menu_title}
					user 			= {this.props.user}
					toggleSearch	= {this.toggleSearch}
					toggleSidebar	= {this.toggleSidebar}
					toggleUser		= {this.toggleUser}
					swipeDrawer		= {this.swipeDrawer}
					logout			= {this.logout}
				/>

				<this.sidebar_desktop />

				<div className="container-body">
					<Backdrop open={this.state.sidebar} onClick={this.toggleSidebar} className="backdrop-desktop"/>
					<Backdrop open={this.state.search} onClick={this.toggleSearch} className="backdrop-search"/>
					<Container maxWidth="xl">
						{this.props.children}
					</Container>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state:any) =>({
	user : state.UserAccount.data
})

export default connect(mapStateToProps)(Navigation);