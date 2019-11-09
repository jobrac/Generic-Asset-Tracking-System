import React from 'react'
import {Drawer} from '@material-ui/core';


interface Props{
    
    state           :   {
		sidebar		: boolean
	},
    sidebar_list    :   any,

    toggleSidebar() :   void,
}


const SidebarDesktop = (props:Props) => {

    return(
        <Drawer
        	variant="permanent"
        	className={props.state.sidebar ? "sidebar-open" : "sidebar-close"}
			open={props.state.sidebar}
			// onMouseEnter={()=> props.toggleSidebar()}
			// onMouseLeave={()=> props.toggleSidebar()}
      	>
        	{props.sidebar_list}
      	</Drawer>
    );
}

export default SidebarDesktop;
