import React from 'react';
import { TablePagination, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {hardware} from 'Redux/Actions';
import {Show} from 'Types/Requests/Assets';
import Skeleton from '@material-ui/lab/Skeleton';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { withRouter } from 'react-router';

const Requestable = (props:any) => {

    const tableDisplay = useSelector((state:any)=>state.TableDisplay.assets);
    const asset = useSelector((state:any) =>state.Data.hardware);
    const dispatch = useDispatch();

    const rows = [10,20,30,40,50,100];
    const [page,setPage] = React.useState(0);
    const [sort,setSort] = React.useState({
        name :"",
        order:"desc"
    });


    React.useEffect(()=>{
        let a = props.state.config;
        a.status = "Requestable";
        props.state.setConfig(a);

        dispatch(hardware(a));
        props.state.setCheck(
            [
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
            ]
        )
        props.state.setShowAction(false);

        return () => {
            props.state.setConfig({
                limit : 10,
                offset: 0,
            });
        }
    },[]);


    const sortAction = (name:any) => {
        if(sort.name === ""){
            setSort({
                name : name,
                order: "asc",
            })
            let tempConfig = props.state.config;
            tempConfig.sort = name;
            tempConfig.order = "asc";
            props.state.setConfig(tempConfig);

            dispatch(hardware(tempConfig));
        }else{
            setSort({
                name : name,
                order: sort.order === "asc" ? "desc" : "asc",
            })

            let tempConfig = props.state.config;
            tempConfig.sort = name;
            tempConfig.order = sort.order === "asc" ? "asc" : "desc"
            props.state.setConfig(tempConfig);

            dispatch(hardware(tempConfig));
        }
    }

    const sortDisplay = (name:any) => {
        if(sort.name === name){
            if(sort.order === "asc"){
                return <ArrowDropDown />;
            }else{
               return <ArrowDropUp />;
            }
        }
        return "";
    }

    
    const skeleton = () => {
        // const column = 5; 
        let result:any = [];
        let columnArr = [];

        const countTrue = () =>{
            let count = 0;
            Object.keys(tableDisplay).forEach( (value:any)=>{
                if(tableDisplay[value].show){
                    count++;
                }
            })
            return count+1;
        }

        for(let x = 0;x<countTrue(); x++){
            columnArr.push(
                <TableCell key={x}><Skeleton variant="rect"/></TableCell>
            );
        }

        for(let i = 0;i < props.state.config.limit;i++ ){
            result.push(
                <TableRow key={i}>
                    {columnArr}
                </TableRow>
            );
        }

        return result;
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(parseInt(event.target.value) !== props.state.config.limit){
            let tempConfig = props.state.config;
            tempConfig.offset = 0;
            tempConfig.limit = parseInt(event.target.value, 10);
            props.state.setConfig(tempConfig);
            setPage(0);

            dispatch(hardware(tempConfig));

            let holder = [];
            for(var i=0;i<tempConfig.limit+1;i++){
                holder.push({id:i,checked:false,value:{}});
            }

            props.state.setCheck(holder);
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        let tempConfig = props.state.config;
        tempConfig.offset = newPage*tempConfig.limit;
        dispatch(hardware(tempConfig));
        props.state.setConfig(tempConfig);
        
    };

    const setDisplay=(name:string)=>{
        if(tableDisplay[name].show){
            return {display:''};
        }
        return {display:'none'};
    }

    return(
        <React.Fragment>
            <div className="table-asset">
                <div className="pagination-top">
                    <TablePagination
                        rowsPerPageOptions={rows}
                        component="div"
                        count={asset.data.total ? asset.data.total : props.state.config.limit }
                        rowsPerPage={props.state.config.limit}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
                <div className="content">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell className="sticky-table-asset asset-checkbox" style={{zIndex: 1}}>
                                    <Checkbox
                                        size="small"
                                        checked={props.state.check[0].checked}
                                        onChange={props.state.checkIt}
                                        value="all"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                </TableCell>
                                {
                                    Object.keys(tableDisplay).map((value:any,key:any)=>(
                                        <TableCell className="sticky-table-asset pointer" style={tableDisplay[value].show?{display:''}:{display:'none'}} onClick={()=>sortAction(value)}   key={key}>{tableDisplay[value].name} {sortDisplay(value)}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                typeof asset.data.total === 'number' ? 
                                    asset.data.rows.map((values:any,keys:any)=>
                                        <TableRow key={keys} hover className="pointer" onDoubleClick={()=>props.history.push('/assets/id/'+values.id)}>
                                            <TableCell className="asset-checkbox">
                                                <Checkbox
                                                    size="small"
                                                    checked={props.state.check[keys+1].checked}
                                                    onChange={(event)=>props.state.checkIt(event,values)}
                                                    value={keys+1}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                    }}
                                                />
                                            </TableCell>
                                           <TableCell style={setDisplay('id')}>{values.id}</TableCell>
                                           <TableCell style={setDisplay('name')}>{values.name}</TableCell>
                                           <TableCell style={setDisplay('company')}>{values.company}</TableCell>
                                           <TableCell style={setDisplay('status_label')}>{values.status_label.name}</TableCell>
                                           <TableCell style={setDisplay('location')}>{values.location.name}</TableCell>
                                           <TableCell style={setDisplay('checkin_counter')}>{values.checkin_counter}</TableCell>
                                           <TableCell style={setDisplay('checkout_counter')}>{values.checkout_counter}</TableCell>
                                           <TableCell style={setDisplay('asset_tag')}>{values.asset_tag}</TableCell>
                                           <TableCell style={setDisplay('serial')}>{values.serial}</TableCell>
                                           <TableCell style={setDisplay('model')}>{values.model.name}</TableCell>
                                           <TableCell style={setDisplay('model_number')}>{values.model_number}</TableCell>
                                           <TableCell style={setDisplay('eol')}>{values.eol.date}</TableCell>
                                           <TableCell style={setDisplay('category')}>{values.category.name}</TableCell>
                                           <TableCell style={setDisplay('manufacturer')}>{values.manufacturer.name}</TableCell>
                                           <TableCell style={setDisplay('supplier')}>{values.supplier.name}</TableCell>
                                           <TableCell style={setDisplay('notes')}>{values.notes}</TableCell>
                                           <TableCell style={setDisplay('order_number')}>{values.order_number}</TableCell>
                                           <TableCell style={setDisplay('rtd_location')}>{values.rtd_location.name}</TableCell>
                                           <TableCell style={setDisplay('image')}>{values.image}</TableCell>
                                           <TableCell style={setDisplay('assigned_to')}>{values.assigned_to ? values.assigned_to.name : ''}</TableCell>
                                           <TableCell style={setDisplay('warranty_months')}>{values.warranty_months}</TableCell>
                                           <TableCell style={setDisplay('warranty_expires')}>{values.warranty_expires}</TableCell>
                                           <TableCell style={setDisplay('created_at')}>{values.created_at.datetime}</TableCell>
                                           <TableCell style={setDisplay('updated_at')}>{values.updated_at.datetime}</TableCell>
                                           <TableCell style={setDisplay('last_audit_date')}>{values.last_audit_date}</TableCell>
                                           <TableCell style={setDisplay('next_audit_date')}>{values.next_audit_date}</TableCell>
                                           <TableCell style={setDisplay('deleted_at')}>{values.deleted_at}</TableCell>
                                           <TableCell style={setDisplay('purchase_date')}>{values.purchase_date.date}</TableCell>
                                           <TableCell style={setDisplay('last_checkout')}>{values.last_checkout}</TableCell>
                                           <TableCell style={setDisplay('expected_checkin')}>{values.expected_checkin}</TableCell>
                                           <TableCell style={setDisplay('purchase_cost')}>{values.purchase_cost}</TableCell>
                                           <TableCell style={setDisplay('requests_counter')}>{values.requests_counter}</TableCell>
                                           <TableCell style={setDisplay('user_can_checkout')}>{values.user_can_checkout}</TableCell>
                                        </TableRow>
                                    )
                                : 
                                skeleton()
                            }
                            
                        </TableBody>
                    </Table>
                </div>
                <div className="pagination-bottom">
                    <TablePagination
                        rowsPerPageOptions={rows}
                        component="div"
                        count={asset.data.total ? asset.data.total : props.state.config.limit }
                        rowsPerPage={props.state.config.limit}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Requestable);