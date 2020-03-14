import React, { useEffect } from 'react';
import {Backdrop, Container, SwipeableDrawer } from '@material-ui/core';
import {Dashboard,Laptop, Assignment, Mouse, BatteryFull, Keyboard, AssignmentInd, SaveAlt, Settings, Print, PlaylistAddCheck} from '@material-ui/icons';
import Topbar from './Topbar';
import SidebarDesktop from './SidebarDesktop';
import './NavigationStyle.scss';
import {useSelector,useDispatch} from 'react-redux';
import {Token} from 'Services';
import SidebarMobile from './SidebarMobile';
import SidebarList from './SidebarList';
import { withRouter } from 'react-router';
import { LoggedIn } from 'Redux/Actions'


const menu_title = "Asset Management";
const logo = process.env.REACT_APP_INDEKS;

const Navigation = (props:any) => {
	
	
	const [ sidebar , setSidebar ] = React.useState(false);
	const [ sidebarProps, setSidebarProps ] = React.useState({});
	const [ swipe, setSwipe ] = React.useState(false);
	const [ width, setWidth ] = React.useState( window.innerWidth );
	const [ search, setSearch ] = React.useState( false );
	const [ user, setUser ] = React.useState(null);
	const reduxUser = useSelector( (state:any) => state.UserAccount);
	const dispatch = useDispatch();
	const sidebar_properties = useSelector((state:any) => state.Route.nav);

	

	useEffect(()=>{

		//subscribe to window event listener 
		window.addEventListener('resize', updateBrowserWidth);

		let sidebars:any = {};
		sidebar_properties.forEach((value:any) =>{
			if(value.props){
				sidebars[value.name] = false;
			}
		});

		setSidebarProps(sidebars);
		
		
		//clean it up when unmounted
		return () => {
			window.removeEventListener('resize', updateBrowserWidth);
		}
	},[]);
	

	//functions ----------------------------------------
	const updateBrowserWidth = () =>{
		setWidth( window.innerWidth );
	}

	const toggleUser = (event: React.MouseEvent<HTMLElement>):void => {
		setUser(user ? null : event.currentTarget);
	}

	const toggleSidebar = (a?:boolean):void =>{
		if(search){
			toggleSearch(false);
		}
		setSidebar(a === undefined ? !sidebar:a);
	}

	const toggleSearch = (a?:boolean):void=>{
		if(sidebar){
			toggleSidebar(false);
		}
		setSearch(a === undefined ?!search:a);
	}

	const swipeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
		if ( event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}
		setSwipe(!swipe);
	};

	const logout = () =>{
		Token.remove();
		props.history.push('/login');
		dispatch(LoggedIn(false));
		// window.location.reload();
	}


	//map sidebar properties
	// const sidebar_list = () => {

	// 	let list = sidebar_properties;
	// 	return(
	// 		<List>
	// 			{list.map((text, index) => (
	// 				<React.Fragment key={index} >
	// 					<ListItem button onClick={()=>{
							
	// 						if(!sidebar){
	// 							toggleSidebar();
	// 						}

	// 						if(!text.props){
	// 							console.log('This is for the url');
	// 						}else{
								
	// 							setSidebarProps({
	// 								[text.name] : !sidebarProps[text.name],
	// 							});
							
	// 						}

	// 					}}>
	// 						{
	// 							(!text.props) ? 
	// 								<React.Fragment>
	// 									<ListItemIcon>{<text.icon />}</ListItemIcon>
	// 									<ListItemText>{text.name}</ListItemText>
	// 								</React.Fragment>
	// 							: 
	// 								<React.Fragment>
	// 									<ListItemIcon>{<text.icon />}</ListItemIcon>
	// 									<ListItemText>{text.name}</ListItemText>
	// 									{sidebarProps[text.name] ? <ExpandLess /> : <ExpandMore />}
	// 								</React.Fragment>

	// 						}
	// 					</ListItem>

	// 					{
	// 						(text.props) ? 
	// 							<Collapse in={sidebarProps[text.name]} timeout="auto" unmountOnExit className={!sidebar ? "hide-sidebar" : ""}>
	// 								<List component="div" disablePadding>
	// 									{
	// 										text.props.map((value,key)=>(
	// 											<ListItem button key={key} className="nestedSidebar">
	// 												<ListItemIcon><ArrowRightAlt /></ListItemIcon>
	// 												<ListItemText >
	// 													{value.name}
	// 												</ListItemText>								
	// 											</ListItem>
	// 										))
	// 									}
	// 								</List>
	// 							</Collapse>
	// 							: ''
	// 					}
	// 				</React.Fragment>
	// 			))}
	// 		</List>
	// 	);
	// }

	return(
		<div>
			<SwipeableDrawer
				open={swipe}
		        onClose={swipeDrawer}
		        onOpen={swipeDrawer}
			>
		    	<SidebarMobile
					logo 		= {process.env.REACT_APP_LOGO}
					menu_title	= {menu_title}
					sidebar_list= {
						<SidebarList
							sidebar 			= {sidebar}
							sidebar_properties 	= {sidebar_properties}
							sidebarProps 		= {sidebarProps}
							setSidebarProps 	= {setSidebarProps}
							toggleSidebar		= {toggleSidebar}
						/>
					}
				/>
		    </SwipeableDrawer>
						
		
			<Topbar 
				state 			= {{width,sidebar,user,search}}
				logo  			= {logo}
				menu_title 		= {menu_title}
				user 			= {reduxUser}
				toggleSearch	= {toggleSearch}
				toggleSidebar	= {toggleSidebar}
				toggleUser		= {toggleUser}
				swipeDrawer		= {swipeDrawer}
				logout			= {logout}
			/>
		
			<SidebarDesktop
				state			= {{sidebar}}
				sidebar_list	= {
					<SidebarList
						sidebar 			= {sidebar}
						sidebar_properties 	= {sidebar_properties}
						sidebarProps 		= {sidebarProps}
						setSidebarProps 	= {setSidebarProps}
						toggleSidebar		= {toggleSidebar}
					/>
				}
				toggleSidebar	= {toggleSidebar}
			/>
		
			{/* <div className="container-body"> */}
				{/* <Backdrop open={sidebar} onClick={ () => toggleSidebar()} className="backdrop-desktop"/>
				<Backdrop open={search} onClick={ () => toggleSearch()} className="backdrop-search"/> */}
			{/* </div> */}
		</div>
	)
}

export default withRouter(Navigation);





//Do not touch below if you dont want to fuck-up !!!
// class Navigation extends React.Component<any,any>{
// 	constructor(props:any){
// 		super(props);

// 		this.state = {
// 			sidebar 	 : false,
// 			sidebarProps : {},
// 			swipe	     : false,
// 			width 		 : window.innerWidth,
// 			search 		 : false,
// 			user		 : null,
// 		}

// 		this.toggleSidebar 		= this.toggleSidebar.bind(this);
// 		this.sidebar_list 		= this.sidebar_list.bind(this);
// 		this.swipeDrawer 		= this.swipeDrawer.bind(this);
// 		this.updateBrowserWidth = this.updateBrowserWidth.bind(this);
// 		this.toggleSearch 		= this.toggleSearch.bind(this);
// 		this.toggleUser			= this.toggleUser.bind(this);
// 	}


// 	//update browser width in state when chages occurs
// 	updateBrowserWidth(){
// 		this.setState({
// 			width : window.innerWidth,
// 		});
// 	}


	
// 	componentDidMount(){
// 		//add native window listener
// 		window.addEventListener('resize', this.updateBrowserWidth)

// 		sidebar_properties.forEach((value) =>{
// 			if(value.props){
// 				this.setState({
// 					sidebarProps : {
// 						...this.state.sidebarProps,
// 						[value.name] : false,
// 					},
// 				})
// 			}
// 		})
// 	}

// 	componentWillUnmount(){
// 		//remove native listener when component is unmounting
// 		window.removeEventListener('resize', this.updateBrowserWidth);
// 	}

// 	toggleUser(event: React.MouseEvent<HTMLElement>):void{
// 		this.setState({
// 			user : this.state.user ? null: event.currentTarget,
// 		})
// 	}
	
// 	toggleSidebar():void{
		
// 		if(this.state.search){
// 			this.toggleSearch();
// 		}

// 		this.setState({
// 			sidebar : !this.state.sidebar,
// 		});
// 	}

// 	toggleSearch():void{

// 		if(this.state.sidebar){
// 			this.toggleSidebar();
// 		}

// 		this.setState({
// 			search : !this.state.search,
// 		})
// 	}

// 	swipeDrawer(event: React.KeyboardEvent | React.MouseEvent){
// 		if ( event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
// 			return;
// 		}
	
// 		this.setState({
// 			swipe : !this.state.swipe,
// 		});
// 	};

// 	sidebar_list(){
// 		let list = sidebar_properties;

// 		return(
// 			<List>
// 				{list.map((text, index) => (
// 					<React.Fragment key={index} >
// 						<ListItem button onClick={()=>{
// 							if(!this.state.sidebar){
// 								this.toggleSidebar();
// 							}

// 							if(!text.props){
// 								console.log('This is for the url');
// 							}else{
								
// 								this.setState({
// 									sidebarProps : {
// 										[text.name] : !this.state.sidebarProps[text.name]
// 									}
// 								});

								
// 							}
// 						}}>
// 							{
// 								(!text.props) ? 
// 									<React.Fragment>
// 										<ListItemIcon>{<text.icon />}</ListItemIcon>
// 										<ListItemText>{text.name}</ListItemText>
// 									</React.Fragment>
// 								: 
// 									<React.Fragment>
// 										<ListItemIcon>{<text.icon />}</ListItemIcon>
// 										<ListItemText>{text.name}</ListItemText>
// 										{this.state.sidebarProps[text.name] ? <ExpandLess /> : <ExpandMore />}
// 									</React.Fragment>

// 							}
// 						</ListItem>

// 						{
// 							(text.props) ? 
// 								<Collapse in={this.state.sidebarProps[text.name]} timeout="auto" unmountOnExit className={!this.state.sidebar ? "hide-sidebar" : ""}>
// 									<List component="div" disablePadding>
// 										{
// 											text.props.map((value,key)=>(
// 												<ListItem button key={key} className="nestedSidebar">
// 													<ListItemIcon><ArrowRightAlt /></ListItemIcon>
// 													<ListItemText >
// 														{value.name}
// 													</ListItemText>								
// 												</ListItem>
// 											))
// 										}
// 									</List>
// 								</Collapse>
// 								: ''
// 						}
						
// 					</React.Fragment>
// 				))}
// 			</List>
// 		);
// 	}


// 	logout(){
// 		Token.remove();
// 		window.location.reload();
// 	}


// 	render(){
// 		return(
// 			<div>
// 				<SwipeableDrawer
//         			open={this.state.swipe}
//         			onClose={this.swipeDrawer}
//         			onOpen={this.swipeDrawer}
//       			>
//         			<SidebarMobile
// 						logo 		= {logo}
// 						menu_title	= {menu_title}
// 						sidebar_list= {this.sidebar_list}
// 					/>
//       			</SwipeableDrawer>
				
// 				{/* <this.topbar /> */}

// 				<Topbar 
// 					state 			= {this.state}
// 					logo  			= {logo}
// 					menu_title 		= {menu_title}
// 					user 			= {this.props.user}
// 					toggleSearch	= {this.toggleSearch}
// 					toggleSidebar	= {this.toggleSidebar}
// 					toggleUser		= {this.toggleUser}
// 					swipeDrawer		= {this.swipeDrawer}
// 					logout			= {this.logout}
// 				/>

// 				<SidebarDesktop
// 					state			= {this.state}
// 					sidebar_list	= {this.sidebar_list}
// 					toggleSidebar	= {this.toggleSidebar}
// 				/>

// 				<div className="container-body">
// 					<Backdrop open={this.state.sidebar} onClick={this.toggleSidebar} className="backdrop-desktop"/>
// 					<Backdrop open={this.state.search} onClick={this.toggleSearch} className="backdrop-search"/>
// 					<Container maxWidth="xl">
// 						{this.props.children}
// 					</Container>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = (state:any) =>({
// 	user : state.UserAccount.data
// })

// export default connect(mapStateToProps)(Navigation);