import React from 'react';
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button,} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {useSelector,useDispatch} from 'react-redux';
import moment from 'moment';
import {
    activity as AC
} from 'Redux/Actions';

const Activity = () =>{

    
    const dispatch = useDispatch();
    const activity = useSelector((state:any)=>state.Data.activity.data);
    const row = 20;   //change this respectively

    React.useEffect(()=>{
        dispatch(AC(activity.config));
    },[])


    const skeleton = () => {
        const column = 5; 
        let result:any = [];
        let columnArr = [];


        for(let x = 0;x<column; x++){
            columnArr.push(
                <TableCell key={x}><Skeleton variant="rect"/></TableCell>
            );
        }

        for(let i = 0;i < row;i++ ){
            result.push(
                <TableRow key={i}>
                    {columnArr}
                </TableRow>
            );
        }

        return result;
    }


    return(
        <Paper className="paper">
            <Typography variant="h6" className="title bg-primary">Recent Activity</Typography>
            <div className="col table">
                <Table size="small">
                    <TableHead>
                        <TableRow> 
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Admin</TableCell>
                            <TableCell align="left">Action</TableCell>
                            <TableCell align="left">Item</TableCell>
                            <TableCell align="left">Target</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            activity.total ?
                                activity.rows.slice(0,row).map((value:any,index:any)=>(
                                    <TableRow hover key={index}>
                                        <TableCell align="left">{moment(value.created_at.datetime).format('ll')}</TableCell>
                                        <TableCell align="left">{value.admin.name}</TableCell>
                                        <TableCell align="left">{value.action_type.replace('general.','').replace('_',' ')}</TableCell>
                                        <TableCell align="left"><div dangerouslySetInnerHTML={{ __html: value.item.name}} /></TableCell>
                                        <TableCell align="left"><div dangerouslySetInnerHTML={{ __html:value.target === null ? '' : value.target.name}} /></TableCell>
                                    </TableRow>
                                ))
                            : 
                            skeleton()
                        }
                    </TableBody>
                </Table>
            </div>
                <Button variant="contained" className="sticky-bottom-button" size="small">View All</Button>
        </Paper>
    )
}

export default Activity;