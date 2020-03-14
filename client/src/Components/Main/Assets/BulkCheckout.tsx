import React from 'react';
import { Paper, Tabs, Tab, Select, MenuItem, FormControl, TextField, Typography, Button } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useDispatch,useSelector} from 'react-redux';
import {Breadcrumbs} from 'Redux/Actions';
import { Person, Laptop, Navigation } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import moment from 'moment';
import {MuiPickersUtilsProvider,KeyboardDatePicker,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Requests } from 'Services';
import AsyncSelect from 'react-select/async';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // formControl: {
        //     margin: 0,
        //     minWidth: 120,
        // },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

type inputAsync = "user" | "asset" | "location";


interface Request {
    set         : {
        url         : Function,
        params      : {},
        callback    : Function
    }
    // response                       : {},
    callback                       : Function,
}




const BulkCheckout = (props:any) => {

    const user:any = React.useRef();
    const assets:any= React.useRef();

    const [labelWidth] = React.useState(0);
    const dispatch = useDispatch();
    const [asset,setAsset] = React.useState();
    const Requestss:Request = {
        set         :   {
            url     : null,
            params  : null,
            callback: null,
        },
        // response    :   null,
        callback    :   null,
    };
    const [request,setRequest] = React.useState(Requestss);
    const [data,setData] = React.useState({
        checkoutTo      :   "user",
        checkout        :   null,
        checkOutDate    :   null,
        checkInDate     :   null,
        note            : '',
        assets          : [],
    });

    React.useEffect(()=>{
        dispatch(Breadcrumbs([
            {name:'Home',url:'/'},
            {name:'Assets',url:'/assets'},
            {name:'Bulk Checkout', url : '/assets/bulk-checkout'}
        ]));
    },[]);

    const checkAssetUser = async(value:any) =>{

        if( value && data.checkoutTo === "user"){

            console.log(value)
            
            
            // setRequest({
            //     ...request,
            //     set : {
            //         url      : Requests.User.assets,
            //         params   : {id:value.value},
            //         callback : (a:any) => setAsset(a.data.rows)
            //     },
            // });

            // alert(await sampleRef.current.getAlert());
        }else{
            setAsset(null);
        }

    }

    const handleChange = (event:any) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const loadOptions = async(inputValue:any,inputAsync:inputAsync) =>{
        switch(inputAsync){
            case "asset" :
                // let asset = await Requests.Assets.show({search:inputValue});
                let asset = await assets.current.show({search:inputValue});
                return asset.data.rows.map((value:any)=>{
                    return {
                        value : value.id,
                        label : "("+value.asset_tag+") - "+value.model.name,
                    }
                })
            case "location" :
                let location = await Requests.Locations.show({search:inputValue});
                return location.data.rows.map((value:any)=>{
                    return {
                        value : value.id,
                        label : value.name,
                    }
                })
            case "user" :
                // let user = await Requests.User.show({search:inputValue});
                let users = await user.current.show({search:inputValue});
                return users.data.rows.map((value:any)=>{
                    return {
                        value : value.id,
                        label : value.name,
                    }
                })
        }
    };

    return(
        <div className="bulk-checkout mt-5">
            
            <Requests.User request={user} />
            <Requests.Assets request={assets} />

            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 asset mb-4">
                    <Paper className="paper">
                        <Typography variant="h6" className="title bg-primary">Check Assets</Typography>
                        {/* <div className="title">
                            Asset Tag
                        </div> */}
                        <div className="content mt-4">
                            <div className="row col form-asset">
                                <div className="col-4 name">Checkout to</div>
                                <div className="col-8">
                                    <FormControl variant="outlined" className="box-holder" >
                                        <Select
                                            value={data.checkoutTo}
                                            name = "checkoutTo"
                                            onChange={handleChange}
                                            displayEmpty
                                            input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                                        >
                                            <MenuItem value="user">User</MenuItem>
                                            <MenuItem value="asset">Asset</MenuItem>
                                            <MenuItem value="location">Location</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row col form-asset">                                                                        
                                <div className="col-4 name" style={{textTransform:"capitalize"}}>{data.checkoutTo}</div>
                                <div className="col-8">
                                    {                                                                                                                                                                                                                                               
                                        data.checkoutTo === "user" ?
                                            <AsyncSelect
                                                key="user"
                                                cacheOptions                                                                                                                                                                                                                    
                                                loadOptions={(inputValue) => loadOptions(inputValue,"user")}                                                                                                                                                                                                                                                                                                                                    
                                                defaultOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                onChange = {(value:any) => {
                                                    setData({...data,checkout: value ? value.value : null});
                                                    checkAssetUser(value);
                                                }}
                                                classNamePrefix="bulk-order"
                                                // isDisabled={submit}
                                                className="box-holder"
                                                isClearable
                                            />
                                        :   data.checkoutTo === "location" ?
                                            <AsyncSelect
                                                key="location"
                                                // cacheOptions
                                                loadOptions={(inputValue) => loadOptions(inputValue,"location")}
                                                defaultOptions
                                                onChange = {(value:any) => setData({...data,checkout: value ? value.value : null})}
                                                // className="asset-create-async-select"
                                                classNamePrefix="bulk-order"
                                                // isDisabled={submit}
                                                className="box-holder"
                                                isClearable
                                            />
                                        :   
                                            <AsyncSelect
                                                key="asset"
                                                // cacheOptions
                                                loadOptions={(inputValue) => loadOptions(inputValue,"asset")}
                                                defaultOptions
                                                onChange = {(value:any) => setData({...data,checkout: value ? value.value : null})}
                                                // className="asset-create-async-select"
                                                classNamePrefix="bulk-order"
                                                // isDisabled={submit}
                                                className="box-holder"
                                                isClearable
                                            />
                                    }
                                </div>
                            </div>
                            <div className="row col form-asset">
                                <div className="col-4 name">Checkout Date</div>
                                <div className="col-8">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            inputVariant="outlined"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            // label="Date picker inline"
                                            value={data.checkOutDate}
                                            onChange={(value)=>setData({...data,checkOutDate:moment(value).format("YYYY-MM-DD")})}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            className="box-holder"
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <div className="row col form-asset">
                                <div className="col-4 name">Expected Checkin Date</div>
                                <div className="col-8">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            inputVariant="outlined"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            // label="Date picker inline"
                                            value={data.checkInDate}
                                            onChange={(value)=>setData({...data,checkInDate:moment(value).format("YYYY-MM-DD")})}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            minDate = {data.checkOutDate === null ? null : data.checkOutDate }
                                            minDateMessage = "Date should not be before checkout date"
                                            className="box-holder"
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <div className="row col form-asset">
                                <div className="col-4 name">Notes</div>
                                <div className="col-8">
                                    <TextareaAutosize
                                        name="note"
                                        className="textarea box-holder"
                                        onChange={handleChange}
                                        value={data.note}
                                        rows={5}
                                    />
                                </div>
                            </div>
                            <div className="row col form-asset">
                                <div className="col-4 name">Assets</div>
                                <div className="col-8">
                                    <AsyncSelect
                                        cacheOptions
                                        loadOptions={(inputValue) => loadOptions(inputValue,"asset")}
                                        defaultOptions
                                        onChange = {(value:any) => {
                                            let a:any = [];
                                            value.forEach((element:any) => {
                                                a.push(element.value);
                                            });
                                            setData({...data,assets:a});
                                        }}
                                        classNamePrefix="bulk-order"
                                        className="box-holder"
                                        // isDisabled={submit}
                                        isMulti
                                        // isClearable
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-right mt-2">
                            <Button variant="contained" >Cancel</Button>&nbsp;&nbsp;
                            <Button variant="contained" type="submit" >Update</Button>
                        </div>
                    </Paper>
                </div>
                {
                    asset ?
                        <div className="col-xl-4 col-lg-4 col-md-4 asset details">
                            <Paper className="paper">
                                <Typography variant="h6" className="title bg-primary">Currently checked out</Typography>
                               <Table className="mt-4">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Asset Name</TableCell>
                                            <TableCell>Asset Tag</TableCell>
                                            <TableCell>Serial</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            asset.map((value:any,key:any)=>(
                                                <TableRow key={key} hover>
                                                    <TableCell>{value.model.name}</TableCell>
                                                    <TableCell>{value.asset_tag}</TableCell>
                                                    <TableCell>{value.serial}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    : null
                }
            </div>
        </div>
    )
}

export default BulkCheckout;