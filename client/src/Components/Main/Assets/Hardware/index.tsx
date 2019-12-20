import React from 'react';
import {Breadcrumbs,Control,setTableDisplay} from 'Redux/Actions';
import {useSelector,useDispatch} from 'react-redux'
import { List as Lists, Paper, FormControl, InputLabel, Select, MenuItem, InputBase, Button, Popper, Grow, ClickAwayListener, MenuList, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { List, CloudDownload, YoutubeSearchedFor, Edit, Delete} from '@material-ui/icons';
import { Route, withRouter, Redirect } from 'react-router';
import All from './All';
import Undeployable from './Undeployable';
import Pending from './Pending';
import Requestable from './Requestable';
import RTD from './RTD';
import Archived from './Archived';
import Deleted from './Deleted';
import Deployed from './Deployed';
import AddIcon from '@material-ui/icons/Add';
import { Requests } from 'Services';
import {Show} from 'Types/Requests/Assets';
import {hardware} from 'Redux/Actions';


const Hardware = (props:any) => {
    //global state
    const tableDisplay = useSelector((state:any)=>state.TableDisplay.assets);
    const asset = useSelector((state:any) =>state.Data.hardware);

    const params:Show = {
        limit : 10,
        offset: 0,
        // status:"Deleted"
    }
    const [config,setConfig] = React.useState(params);

    const [check,setCheck] = React.useState([
        {id:0,checked:false,value:{}},
        {id:1,checked:false,value:{}},
        {id:2,checked:false,value:{}},
        {id:3,checked:false,value:{}},
        {id:4,checked:false,value:{}},
        {id:5,checked:false,value:{}},
        {id:6,checked:false,value:{}},
        {id:7,checked:false,value:{}},
        {id:8,checked:false,value:{}},
        {id:9,checked:false,value:{}},
        {id:10,checked:false,value:{}},
    ]);
    const [showAction,setShowAction] = React.useState({
        delete:false,
        edit : false,
    });
    const [deleteModal,setDeleteModal] = React.useState(false);
    const [deleteData,setDeleteData] = React.useState([]);


    const dispatch = useDispatch();
    const inputLabel = React.useRef(null);

    const downloadOption = ["CSV","MS-EXCEL","MS-WORD","PDF"]; //for download option
    const categoryOption =[
        {name: "All ",url:"/assets/hardware"},
        {name: "Pending ",url:"/assets/hardware/pending"},
        {name: "Ready To Deploy (RTD) ",url:"/assets/hardware/rtd"},
        {name: "Undeployable ",url:"/assets/hardware/undeployable"},
        {name: "Deployed ",url:"/assets/hardware/deployed"},
        {name: "Requestable ",url:"/assets/hardware/requested"},
        {name: "Archived ",url:"/assets/hardware/archived"},
        {name: "Deleted ",url:"/assets/hardware/deleted"},

        // {name: "Overdue for Audit ",url:"/assets/hardware/auditoverdue"},
    ] //for category

    //display menu
    const [displayMenu, setDisplayMenu] = React.useState(false);
    const [displayDownload, setDisplayDownload] = React.useState(false);
    const menuRef = React.useRef<HTMLButtonElement>(null);
    const downloadRef = React.useRef(null);

    React.useEffect(()=>{
        dispatch(Control("Assets"));
        dispatch(Breadcrumbs([
            {name:'Home',url:'/'},
            {name:'Assets',url:'/assets'},
        ]));

        //for sticky table header top
        window.addEventListener('scroll', scroll, true);

        return () =>{
            window.removeEventListener('scroll', scroll);
        }
    },[]);


    const scroll = () => {
        
        let scrollY = window.scrollY;
        let selector:any = window.document.getElementsByClassName('sticky-table-asset');
        const changeAll = (style:string) => {
            for(var i = 0;i<selector.length;i++){
                selector[i].style.top = style;
            }
        }

        if(scrollY > 150){
            changeAll(scrollY - 155 + 'px');
        }else{
            changeAll('0px');
        }
    }

    const handleToggle = (funct:Function,param:boolean) => {
        funct(param);
    };


    const handleClose = (ref:any,funct:Function,event:any) => {

        if (ref.current && ref.current.contains(event.target as HTMLElement)) {
          return;
        }
        
        funct(false);
    };

    const handleListKeyDown = (event: any,funct:Function) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            funct(false);
        }
    }


    const checkIt = (event:any,values?:any) => { 
        let value = event.target.value;
        if(value === 'all'){ 

            if(check[0].checked){
                let a:any = check;
                
                
                Object.keys(a).forEach((value:any) => {
                    a[value].checked = false;
                });
                setCheck([...a]);
                setShowAction({
                    ...showAction,
                    delete:false,
                    edit:false
                });
            }else{
                let a:any = check;
                Object.keys(a).forEach((value:any) => {
                    a[value].checked = true;
                });
                asset.data.rows.forEach((element:any,key:any) => {
                    a[key+1].value = element;
                });


                setShowAction({
                    ...showAction,
                    delete:true,
                    edit:false
                });

                
                setCheck([...a]);
            }
            return;
        }else{
            let a:any = check;

            if(a[parseInt(event.target.value, 10)].checked){
                if(a[0].checked)
                    a[0].checked = false;
                a[parseInt(event.target.value, 10)].checked = false;
                a[parseInt(event.target.value, 10)].value = values;
            

            }else{
                a[parseInt(event.target.value, 10)].checked = true;
                a[parseInt(event.target.value, 10)].value = values;            
            }
            setCheck([...a]);

            let po = a.filter((value:any)=> value.checked).length;

            if(po){
                if(po > 1){
                    setShowAction({
                        ...showAction,
                        delete:true,
                        edit:false
                    });
                }else{
                    setShowAction({
                        ...showAction,
                        delete:true,
                        edit:true
                    });
                }
            }else{
                setShowAction({
                    ...showAction,
                    delete:false,
                    edit:false
                });
            }
            return
        }
    }


    type action = "Edit" | "Delete";
    const handleFloatingButton = (action:action) => {
        if(action === "Delete"){
            let a = check.filter((value:any)=>value.checked && value.id !== 0);
            setDeleteData(a);
            setDeleteModal(true);
        }
    }

    const deleteAsset = () =>{
        
        let idHolder:any = [];
        deleteData.forEach(value =>{
            const id = value.value.id;
            if(id){
                idHolder.push(id)
            }
        })

        dispatch(hardware(config));
        setShowAction({delete:false,edit:false});
        setCheck([
            {id:0,checked:false,value:{}},
            {id:1,checked:false,value:{}},
            {id:2,checked:false,value:{}},
            {id:3,checked:false,value:{}},
            {id:4,checked:false,value:{}},
            {id:5,checked:false,value:{}},
            {id:6,checked:false,value:{}},
            {id:7,checked:false,value:{}},
            {id:8,checked:false,value:{}},
            {id:9,checked:false,value:{}},
            {id:10,checked:false,value:{}},
        ])
        setDeleteModal(false);
    }


    return(
        <React.Fragment>
            <Paper className="assets-all">
                <div className="header">
                    <div className="row">
                        <div className="col-xl-6 col-lg-3 col-md-3 col-sm-3">
                            <FormControl variant="outlined" className="category">
                                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                    Status
                                </InputLabel>
                                <Select
                                        // id="demo-simple-select-outlined"
                                        value={props.location.pathname}
                                        onChange={(value)=>props.history.push(value.target.value)}
                                        // labelWidth={labelWidth}
                                    >
                                    {
                                        categoryOption.map((value:any,key:any)=>(
                                            <MenuItem key={key} value={value.url}>{value.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-xl-6 col-lg-9 col-md-9 col-sm-9 row right">
                            <div className="search-asset">
                                <div className="icon">
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    className="input"
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>

                            <div className="buttons">

                                {/* advance search */}
                                <Button variant="outlined" className="advance-search">
                                    <YoutubeSearchedFor />
                                </Button>

                                {/* display menu */}
                                <Button
                                    ref={menuRef}
                                    aria-controls={displayMenu ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={() => handleToggle(setDisplayMenu,!displayMenu)}
                                    variant="outlined"
                                >
                                    <List />
                                </Button>

                                {/* download menu */}
                                <Button
                                    ref={downloadRef}
                                    aria-controls={displayDownload ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={() => handleToggle(setDisplayDownload,!displayDownload)}
                                    variant="outlined"
                                >
                                    <CloudDownload />
                                </Button>

                                {/* popper containers */}
                                <Popper open={displayMenu} anchorEl={menuRef.current} role={undefined} transition disablePortal className="z-index-2000" >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={(event) => handleClose(menuRef,setDisplayMenu,event)}>
                                                    <Lists dense className="list-checkbox">
                                                        {
                                                            Object.keys(tableDisplay).map((value:any,key    :any)=>(
                                                                <ListItem key={key}>
                                                                    <ListItemText
                                                                        primary={tableDisplay[value].name}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Checkbox
                                                                            checked={tableDisplay[value].show}
                                                                            onChange={ (values:any) => dispatch(setTableDisplay({name:value,show:values.target.checked,type:"assets"}))}
                                                                            // value="checkedA"
                                                                            inputProps={{
                                                                                'aria-label': 'primary checkbox',
                                                                            }}
                                                                        />
                                                                    </ListItemSecondaryAction>
                                                                </ListItem>
                                                            ))
                                                        }
                                                    </Lists>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                                
                                <Popper open={displayDownload} anchorEl={downloadRef.current} role={undefined} transition disablePortal className="z-index-2000">
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={(event) => handleClose(downloadRef,setDisplayDownload,event)}>
                                                    <MenuList id="menu-list-grow" onKeyDown={(event:any) => handleListKeyDown(event,setDisplayDownload)}>
                                                        {
                                                            downloadOption.map((value:any,key:number)=>
                                                                <MenuItem key={key} onClick={(event) => handleClose(downloadRef,setDisplayDownload,event)}>{value}</MenuItem>
                                                            )
                                                        }
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>


                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <Route>
                    <Route exact path="/assets/hardware" render  =   { (props) => 
                        <All {...props} state={{
                                check,
                                setCheck,
                                setShowAction,
                                showAction,
                                checkIt,
                                config,
                                setConfig
                            }} /> } 
                    />
                    <Route exact path="/assets/hardware/pending" render  =   { (props) => 
                        <Pending {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig   
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/requested" render  =   { (props) => 
                        <Requestable {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/rtd" render  =   { (props) => 
                        <RTD {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/undeployable" render  =   { (props) => 
                        <Undeployable {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/deployed" render  =   { (props) => 
                        <Deployed {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/archived" render  =   { (props) => 
                        <Archived {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />
                    <Route exact path="/assets/hardware/deleted" render  =   { (props) => 
                        <Deleted {...props} state={{
                            check,
                            setCheck,
                            setShowAction,
                            showAction,
                            checkIt,
                            config,
                            setConfig
                        }} /> } 
                    />

                    {/* <Route exact path="/assets/hardware/auditoverdue" component={AuditOverdue} /> */}
                    {/* <Redirect
                        to={{
                            pathname: "/assets/hardware"
                        }}
                    /> */}
                </Route>
                <div className="floater">
                    
                    <Fab color="secondary" aria-label="add" style={{display: showAction.delete ? '' : 'none'}}  onClick={()=>handleFloatingButton("Delete")}>
                        <Delete />
                    </Fab>

                    <Fab color="secondary" aria-label="add" style={{display: showAction.edit ? '' : 'none'}} onClick={()=>handleFloatingButton("Edit")}>
                        <Edit />
                    </Fab>

                    <Fab color="primary" aria-label="add" onClick={()=>props.history.push('/assets/create')}>
                        <AddIcon />
                    </Fab>
                </div>
            </Paper>
            <Dialog
                open={deleteModal}
                onClose={()=>setDeleteModal(!deleteModal)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xs"
                disableBackdropClick
            >
                <DialogTitle id="alert-dialog-title">Delete?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to delete {deleteData.length} item{deleteData.length>1?'s ':' '}!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setDeleteModal(!deleteModal)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>deleteAsset()} color="primary" autoFocus>
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default withRouter(Hardware);