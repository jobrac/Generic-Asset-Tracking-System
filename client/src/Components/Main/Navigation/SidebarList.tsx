import React from 'react';
import {Collapse, ListItemText, ListItemIcon, ListItem, List } from '@material-ui/core';
import {ExpandLess, ExpandMore, ArrowRightAlt} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import { withRouter } from 'react-router';


interface props{
    sidebar_properties : any,
    sidebar            : boolean,
    sidebarProps       : any,



    //functions
    setSidebarProps(sidebar:any): void;
    toggleSidebar()             : void;
}
const SidebarList = (props:any) => {

    //state
    const control = useSelector((state:any)=>state.Stat.control);
        
    let list = props.sidebar_properties;
    return(
        <List className="sidebar-list">
            {list.map((text:any, index:number) => (
                <React.Fragment key={index}>
                    <ListItem className={control === text.name ? "active-nav" : ""} button onClick={()=>{
                        
                        if(!props.sidebar){
                            props.toggleSidebar();
                        }

                        if(!text.props){
                            if(props.location.pathname !== text.url){
                                props.history.push(text.url);
                            }
                        }else{
                            
                            props.setSidebarProps({
                                [text.name] : !props.sidebarProps[text.name],
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
                                    {props.sidebarProps[text.name] ? <ExpandLess /> : <ExpandMore />}
                                </React.Fragment>

                        }
                    </ListItem>

                    {
                        (text.props) ? 
                            <Collapse in={props.sidebarProps[text.name]} timeout="auto" unmountOnExit className={!props.sidebar ? "hide-sidebar" : ""}>
                                <List component="div" disablePadding>
                                    {
                                        text.props.map((value:any,key:number)=>(
                                            <ListItem button key={key} className="nestedSidebar" onClick={()=>{
                                                if(props.location.pathname !== value.url){
                                                    props.history.push(value.url);
                                                }
                                            }}>
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

export default withRouter(SidebarList);