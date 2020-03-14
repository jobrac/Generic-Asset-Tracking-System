import React from 'react'
import {Drawer} from '@material-ui/core';


interface Props{
    
    state           :   {
		sidebar		: boolean
	},
    sidebar_list    :   any,

    toggleSidebar(a:boolean) :   void,
}

let timeout:any = null;

const SidebarDesktop = (props:Props) => {
	const [active,setActive] = React.useState(false);

	const mouseOver = (event:any) => {
		if(event.type === "mouseleave"){
			clearTimeout(timeout);
			setActive(false);
			props.toggleSidebar(false)
			return;
		}
		timeout = setTimeout(() => props.toggleSidebar(true) ,500);
		setActive(true);
		return;
	}

    return(
        <Drawer
        	variant="permanent"
        	className={props.state.sidebar ? "sidebar-open" : "sidebar-close"}
			open={props.state.sidebar}
			// onMouseOver = {mouseOver}
			// onMouseEnter={()=> setTimeout(setTimeout(() => props.toggleSidebar(true) ,2000))}
			// onMouseLeave={()=> props.toggleSidebar(false)}
			onMouseEnter = {(mouseOver)}
			onMouseLeave = {mouseOver}
		  >
        	{props.sidebar_list}
      	</Drawer>
    );
}

export default SidebarDesktop;
