import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Container, Collapse } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import './NavigationStyle.scss';
import {
	Dashboard,Laptop, Assignment, Mouse, BatteryFull, Keyboard, AssignmentInd, SaveAlt, Settings, Print, PlaylistAddCheck,
	ExpandLess, ExpandMore
} from '@material-ui/icons';



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
			sidebar : false
		}

		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.topbar = this.topbar.bind(this);
		this.sidebar_desktop = this.sidebar_desktop.bind(this);
		this.sidebar_list = this.sidebar_list.bind(this);

	}

	toggleSidebar(){
		this.setState({
			sidebar : !this.state.sidebar,
		});
	}

	topbar(){
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
							className={this.state.sidebar ? "hamburger hamburger--squeeze is-active" : "hamburger"} 
							onClick={this.toggleSidebar}
						>	
							<span className="hamburger-box">
								<span className="hamburger-inner"></span>
							</span>
						</IconButton>
						<Typography variant="h6" noWrap>
							<img className="navigation-logo" src={logo} alt={menu_title} />{menu_title}
						</Typography>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}

	sidebar_list(){
		let list = sidebar_properties;

		const getStateBool = (state:any) =>{
			
			console.log(state);
			return this.state.state;
		};

		return(
			<List>
				{list.map((text, index) => (
					<React.Fragment key={index} >
						<ListItem button onClick={()=>{
							if(!text.props){
								console.log('Undefined props');
							}else{

								const a = text.name;

								console.log(this.state.a)

								this.setState({
									a : !this.state.a ? true : !this.state.a,
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
										{this.state.open ? <ExpandLess /> : <ExpandMore />}
									</React.Fragment>

							}
						</ListItem>

						{
							(text.props) ? 
								<Collapse in={getStateBool(text.name)} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{/* {
											text.props.map((value,key)=>(
												<ListItem button key={key}>
													<ListItemText >
														{value.name}
													</ListItemText>								
												</ListItem>
											))
										} */}
										asdasdasdasdasd
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
      		>
				<Divider />
        			<this.sidebar_list />
        		<Divider />
      		</Drawer>
		);
	}


	render(){
		return(
			<div>
				<this.topbar />
				<this.sidebar_desktop />

				<div className="container-body">
					<Backdrop open={this.state.sidebar} onClick={this.toggleSidebar}/>
					<Container maxWidth="xl">
						{this.props.children} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

						
					</Container>
				</div>
			</div>
		)
	}
}

export default Navigation;