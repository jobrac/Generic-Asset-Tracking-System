import React from 'react';
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton/Skeleton';
import { Laptop, Assignment, Mouse, Keyboard, BatteryFull } from '@material-ui/icons';
const AssetCategory=() => {

    const categories = useSelector((state:any)=>state.Data.categories.data);
    const row = 20;
    

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
            <Typography variant="h6" className="title bg-primary">Asset Categories</Typography>
            <div className="col table">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left"><Laptop /></TableCell>
                            <TableCell align="left"><Assignment /></TableCell>
                            <TableCell align="left"><Mouse /></TableCell>
                            <TableCell align="left"><BatteryFull /></TableCell>
                            <TableCell align="left"><Keyboard /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            categories.rows ?
                                categories.rows.slice(0,row).map((value:any,index:any)=>(
                                    <TableRow key={index}>
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell style={{textTransform:"capitalize"}}>{value.category_type}</TableCell>
                                        <TableCell align="right">{value.assets_count}</TableCell>
                                        <TableCell align="right">{value.licenses_count}</TableCell>
                                        <TableCell align="right">{value.accessories_count}</TableCell>
                                        <TableCell align="right">{value.consumables_count}</TableCell>
                                        <TableCell align="right">{value.components_count}</TableCell>
                                    </TableRow>
                                ))
                                
                            : skeleton()
                        }   
                        
                        
                    </TableBody>
                </Table>
            </div>
            <Button variant="contained" className="sticky-bottom-button" size="small">View All</Button>
        </Paper>
    )
}

export default AssetCategory;