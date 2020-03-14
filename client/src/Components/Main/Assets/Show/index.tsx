import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Control,Breadcrumbs} from 'Redux/Actions';
import { Paper, Tabs, Tab, Button } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';
import Details from './Details';
import { Requests } from 'Services';

const Show = (props:any) => {

    const id = parseInt(props.match.params.id,10);
    const path = props.location.pathname;
    const assets:any = React.useRef();

    const dispatch = useDispatch();
    const [data,setData]= React.useState();

    React.useEffect(()=>{
        dispatch(Control("Assets"));
        dispatch(Breadcrumbs([
            {name:'Home',url:'/'},
            {name:'Assets',url:'/assets/hardware'},
            {name:id,url:''},

        ]));

        checkId();
    },[]);

    const checkId = async () =>{
        // const {data} = await Requests.Assets.get({id});
        const {data} = await assets.current.get({id});

        if(data.status || data.status === 'error' ){
            props.history.push('/not-found');
        }

        console.log(data);
        setData(data);
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Paper className="show-asset">
            <Requests.Assets request={assets} />
            {/* <Button className="create" variant="contained" color="primary">Create</Button> */}
            <Paper className="header-tab">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant ="scrollable"
                >
                    <Tab label="Details" wrapped onClick={()=>props.history.push('/assets/id/'+id)}/>
                    <Tab label="Licenses" wrapped onClick={()=>props.history.push('/assets/id/'+id+'/licenses')}/>
                    <Tab label="Components" wrapped onClick={()=>props.history.push('/assets/id/'+id+'/components')}/>
                    <Tab label="Assets" wrapped onClick={()=>props.history.push('/assets/id/'+id+'/assets')}/>
                    <Tab label="Maintenances" wrapped onClick={()=>props.history.push('/assets/id/'+id+'/maintenances')}/>
                    <Tab label="History" wrapped onClick={()=>props.history.push('/assets/id/'+id+'/history')}/>
                </Tabs>
            </Paper>

            <div className="content">
                {/* <Details /> */}
                <Route>
                    <Route exact path={'/assets/id/'+id} render={(props) =>  
                        <Details 
                            {...props} 
                            state={{
                                data,
                            }}
                        /> 
                    }/>
                    <Route  exact path={path+'/licenses'} />
                    <Route  exact path={path+'/details'} />
                    <Route  exact path={path+'/components'} />
                    <Route  exact path={path+'/assets'} />
                    <Route  exact path={path+'/maintenance'} />
                    <Route  exact path={path+'/history'} />
                    <Route  exact path={path+'/maintenance'} />
                </Route>
            </div>
        </Paper>
    );
}

export default withRouter(Show);