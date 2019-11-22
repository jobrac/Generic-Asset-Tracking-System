import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Chart from 'react-google-charts';
import { Requests } from 'Services';
// import {useSelector} from 'react-redux';

const AssetStatus = () =>{

    // const hardware = useSelector((state:any)=>state.Data.hardware.data);

    const [asset, setAsset] = React.useState([['Status', 'Asset Status']]);

    React.useEffect( () => {
        countStatus();
    },[])


    const countStatus = async () =>{
        let a = await Requests.StatusLabels.asset();

        if( a.status === 200){
            let b = asset;

            a.data.labels.forEach((element:any) => {
                b.push(element);
            });

            setAsset(b);
        }
    }

    
    
    return(
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
                data={asset}
                options={{
                    // title: 'Assets by Status',
                    // Just add this option
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </Paper>
    )    
}

export default AssetStatus;