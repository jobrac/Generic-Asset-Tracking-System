import React from 'react';
import {useDispatch} from 'react-redux';
import {Control} from 'Redux/Actions'
import { Grid, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button} from '@material-ui/core';
import './HomeStyle.scss';
import { Laptop, Mouse, Assignment, BatteryFull, ArrowForward } from '@material-ui/icons';
import {Chart} from 'react-google-charts';

const Home = (props:any) =>{

    const dispatch = useDispatch();
    const [width,setWidth] = React.useState(window.innerWidth);
    
    React.useEffect(()=>{
        dispatch(Control("Dashboard"));

        window.addEventListener('resize', updateBrowserWidth);
        return () => {
			window.removeEventListener('resize', updateBrowserWidth);
        }
    },[])

    const updateBrowserWidth = () =>{
        setWidth( window.innerWidth );
	}

    return(
        <div className="home">
            <div className="overview col-md-12 row">
                <div className="col-lg-3 col-md-6 assets">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Assets</div>
                        <div className="total">250</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 licenses">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Assets</div>
                        <div className="total">250</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 accessories">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Assets</div>
                        <div className="total">250</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-6 consumables">
                    <Paper className="parent">
                        <Paper className="icon">
                            <Laptop />
                        </Paper>
                        <div className="title">Total Assets</div>
                        <div className="total">250</div>
                        <Button variant="contained" size="small" className="more">see more <ArrowForward/></Button>
                    </Paper>
                </div>
            </div>

            <div className="status col-sm-12">
                <Paper className="paper">
                    <Typography variant="h6" className="title bg-primary">Recent Activity</Typography>
                    <div className="col table">
                        <Table size="small">
                            <TableHead>
                                <TableRow> 
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Admin</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                    <TableCell align="center">Item</TableCell>
                                    <TableCell align="center">Target</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow><TableRow>
                                    <TableCell align="center">asd</TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                    <TableCell align="center">sdsd></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                        <Button variant="contained" className="sticky-bottom-button" size="small">View All</Button>
                </Paper>
            </div>

            <div className="activity col-md-12 row">
                <div className="col-lg-6 col-md-6 col-sm-12 asset">
                    <Paper className="paper">
                    <Typography variant="h6" className="title bg-primary">Assets by Status</Typography>
                        <Chart
                            width={'100%'}
                            height={'366px'}
                            chartType="PieChart"
                            // getChartWrapper ={widths=>{
                            //     widths = width;
                            //     widths.draw();
                            // }}
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                                ['Commute', 2],
                                ['Watch TV', 2],
                                ['Sleep', 7],
                            ]}
                            options={{
                                // title: 'Assets by Status',
                                // Just add this option
                                is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </Paper>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 categories">
                    <Paper className="paper">
                        <Typography variant="h6" className="title bg-primary">Asset Categories</Typography>
                        <div className="col table">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Type</TableCell>
                                        <TableCell align="left">Assets</TableCell>
                                        <TableCell align="left">Licenses</TableCell>
                                        <TableCell align="left">Accessories</TableCell>
                                        <TableCell align="left">Consumables</TableCell>
                                        <TableCell align="left">Components</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                        <TableCell>sdsd</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <Button variant="contained" className="sticky-bottom-button" size="small">View All</Button>
                    </Paper>
                </div>
            </div>

        </div>
    )
}




export default Home;