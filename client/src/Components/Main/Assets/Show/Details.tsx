import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
//@ts-ignore
import ModalImage from "react-modal-image";
import moment from 'moment';

const Details = (props:any) => {


    return(
        <div className="col row details">
            <div className="col-md-8">
                <Table size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.status_label.name
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Serial</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.serial
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Manufacturer</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.manufacturer.name
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.category.name
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Model</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.model.name
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Model No.</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.model_number
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Extended Global Projection</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Purchase Date</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    moment(props.state.data.purchase_date.date).format('LL')
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Purchase Cost</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.purchase_cost
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Order Number</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.order_number
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Supplier</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.supplier  ? props.state.data.supplier.name : ''
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Depreciation</TableCell>
                            <TableCell align="left">sds</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Fully Depreciation</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">EOL Rate</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.eol.data
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Notes</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.notes
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.location ? props.state.data.location.name : ''
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Default Location</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.rtd_location ? props.state.data.rtd_location.name : ''
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Create At</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    moment(props.state.data.created_at.datetime).format('LL')
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Updated At</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    moment(props.state.data.updated_at.datetime).format('LL')
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Checkouts</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.checkout_counter
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Checkins</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.checkin_counter
                            }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Requests</TableCell>
                            <TableCell align="left">{
                                props.state.data === undefined 
                                ? 
                                    <Skeleton variant="text" /> 
                                :
                                    props.state.data.requests_counter
                            }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="col-md-4 col-lg-4">
                <ModalImage
                    small={props.state.data === undefined ? '' : props.state.data.image}
                    large={props.state.data === undefined ? '' : props.state.data.image}
                    alt={props.state.data === undefined ? '' : props.state.data.name}
                />
            </div>
        </div>
    )
}

export default Details;