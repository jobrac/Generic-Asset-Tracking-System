import React from 'react';
import {Control,Breadcrumbs} from 'Redux/Actions'
import { Paper, Button} from '@material-ui/core';
import './HomeStyle.scss';
import { Laptop, ArrowForward } from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import Activity from './Activity';
import AssetStatus from './AssetStatus';
import AssetCategory from './AssetCategory';

import {
    hardware,
    accessories as AC,
    consumables as CO,
    licenses as LI
} from 'Redux/Actions';



const Home = () =>{

    const dispatch = useDispatch();
    
    const assets = useSelector((state:any)=>state.Data.hardware);
    const accessories = useSelector((state:any)=>state.Data.accessories);
    const licenses = useSelector((state:any)=>state.Data.licenses);
    const consumables = useSelector((state:any)=>state.Data.consumables);



    React.useEffect(()=>{
        dispatch(Control("Dashboard"));
        dispatch(Breadcrumbs([{name:'Home',url:'/'}]));


        dispatch(hardware({config:assets.config}));
        dispatch(LI(licenses.config));
        dispatch(AC(accessories.config));
        dispatch(CO(consumables.config));
    },[])


    return(
        <div className="home">
            <div className="overview col-md-12 row">
                <div className="col-lg-3 col-md-6 assets">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Assets</div>
                        <div className="total">{assets.data.total ? assets.data.total : 0 }</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 licenses">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Licenses</div>
                        <div className="total">{licenses.data.total ? licenses.data.total : 0 }</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 accessories">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Accessories</div>
                        <div className="total">{accessories.data.total ? accessories.data.total : 0 }</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 consumables">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Consumables</div>
                        <div className="total">{consumables.data.total ? consumables.data.total : 0 }</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
            </div>
            
            <div className="status col-sm-12">
                <Activity />
            </div>

            <div className="activity col-md-12 row">
                <div className="col-lg-6 col-md-6 col-sm-12 asset">
                    <AssetStatus />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 categories">
                    <AssetCategory />
                </div>
            </div>

        </div>
    )
}




export default Home;