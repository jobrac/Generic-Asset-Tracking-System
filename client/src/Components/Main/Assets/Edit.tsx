/**
 * sdsds
 */

import React from 'react';
import { Paper, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, FormControlLabel, Checkbox, Button, FormHelperText, Typography } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AsyncSelect from 'react-select/async';
import { Requests} from 'Services';
import {Breadcrumbs} from 'Redux/Actions';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import Url from 'Services/ServerUrl';
import Uploader from 'Components/Utilities/Uploader';
import { useSnackbar } from 'notistack';
import { Close } from '@material-ui/icons';
import { valueContainerCSS } from 'react-select/src/components/containers';
// import {Update} from 'Types/Requests/Assets';



type inputAsync = "company" | "model" | "status" | "supplier" | "locations";


const Edit = (props:any) =>{

    const id = parseInt(props.match.params.id,10);
    const assets:any = React.useRef();

    const  initialError = {
        company_id      : {status      : false,message     : ''},
        asset_tag       : {status      : false,message     : ''},
        model_id        : {status      : false,message     : ''},
        status_id       : {status      : false,message     : ''},
        serial          : {status      : false,message     : ''},
        name            : {status      : false,message     : ''},
        purchase_date   : {status      : false,message     : ''},
        supplier_id     : {status      : false,message     : ''},
        order_number    : {status      : false,message     : ''},
        purchase_cost   : {status      : false,message     : ''},
        warranty_months : {status      : false,message     : ''},
        notes           : {status      : false,message     : ''},
        rtd_location_id : {status      : false,message     : ''},
        requestable     : {status      : false,message     : ''},
        image           : {status      : false,message     : ''},
    };

    const initialInput:any = {
        id              : id,
        company_id      : null,
        asset_tag       : '',
        model_id        : null,
        status_id       : null,
        serial          : '',
        name            : '',
        purchase_date   : moment(new Date()).format("YYYY-MM-DD"),
        supplier_id     : null,
        order_number    : '',
        purchase_cost   : null,
        warranty_months : null,
        notes           : '',
        rtd_location_id : null,
        requestable     : 0,
        image           : '',
    }
    const dispatch = useDispatch();
    const [input,setInput] = React.useState(initialInput);
    const [error,setError] = React.useState(initialError);
    const [submit, setSubmit] = React.useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [data,setData] = React.useState();
    
    const [asyncValue,setAsyncValue] = React.useState({
        company_id         :   {},
        model_id           :   {},
        status_id          :   {},
        supplier_id        :   {},
        rtd_location_id    :   {},
    });


    React.useEffect(()=>{
        checkId();
    },[]);


    const checkId = async() => {
        // const {data} = await Requests.Assets.get({id});
        const {data} = await assets.current.get({id});

        // console.log(data);

        if(data.status || data.status === 'error' ){
            props.history.push('/not-found');
        }

        //fill the data
        if(data){
            setAsyncValue({
                ...asyncValue,
                company_id      : data.company      ? {value : data.company.id,label:data.company.name} : null,
                model_id        : data.model        ? {value : data.model.id,label:data.model.name} : null,
                status_id       : data.status_label ? {value : data.status_label.id,label:data.status_label.name} : null,
                supplier_id     : data.supplier     ? {value : data.supplier.id,label:data.supplier.name} : null,
                rtd_location_id : data.rtd_location ? {value : data.rtd_location.id,label:data.rtd_location.name} : null,
            })

            setInput({
                ...input,
                company_id     : data.company ? data.company.id : null,
                asset_tag      : data.asset_tag,
                model_id       : data.model ? data.model.id : null,
                status_id      : data.status_label ? data.status_label.id : null,
                serial         : data.serial,
                name           : data.name,
                purchase_date  : data.purchase_date ? data.purchase_date.date : null,
                supplier_id    : data.supplier ? data.supplier.id : null,
                order_number   : data.order_number,
                purchase_cost  : Boolean(parseFloat(data.purchase_cost)) ? parseFloat(data.purchase_cost) : null,
                warranty_months: Boolean(parseInt(data.warranty_months)) ? parseInt(data.warranty_months) : null,
                notes          : data.notes,
                rtd_location_id: data.rtd_location ? data.rtd_location.id : null,
            })
        }
        setData(data);
    }

    const handleAsyncValue = (value:any,option:any) =>{
        setAsyncValue({
            ...asyncValue,
            [option.name]: value
        });
        setInput({
            ...input,
            [option.name]: value ? value.value : null
        })
    }

    
    const action = (key:any) => (
        <Button variant="text" onClick={ () => closeSnackbar(key)}>
            <Close />
        </Button>
    );

    const [sample, setSample] = React.useState({});

    const loadOptions = async (inputValue:any,inputAsync:inputAsync) => {

        switch(inputAsync){
            case "company" :
                let company = await Requests.Companies.show({search:inputValue});
                return company.data.rows.map((value:any)=>{
                    return{
                        value : value.id,
                        label : value.name,
                    }
                });

            case "model" : 
                let model = await Requests.Models.show({search:inputValue});
                return model.data.rows.map((value:any)=>{
                    return{
                        value : value.id,
                        label : value.name,
                    }
                });
            case "status" : 
                let status = await Requests.StatusLabels.show({search:inputValue});
                return status.data.rows.map((value:any)=>{
                    return{
                        value : value.id,
                        label : value.name,
                    }
                });
            case "supplier" : 
                let supplier = await Requests.Suppliers.show({search:inputValue});
                return supplier.data.rows.map((value:any)=>{
                    return{
                        value : value.id,
                        label : value.name,
                    }
                });
            case "locations" : 
                let locations = await Requests.Locations.show({search:inputValue});
                return locations.data.rows.map((value:any)=>{
                    return{
                        value : value.id,
                        label : value.name,
                    }
                });
        }

        
    };

    React.useEffect(()=>{
        dispatch(Breadcrumbs([]));
    },[]);

    const submitForm = async (event:React.FormEvent) => {
        
        event.preventDefault();
        setSubmit(true);

        if(input.model_id === null){
            let a = initialError;
            a['model_id'] = {status      : true,message     : 'The model field is required'};
            setError(a);
            setSubmit(false);
            return;
        }
        if(input.asset_tag === ''){
            let a = initialError;
            a['asset_tag'] = {status      : true,message     : 'The asset tag field is required'};
            setError(a);
            setSubmit(false);
            return;
        }
        if(input.status_id === null){
            let a = initialError;
            a['status_id'] = {status      : true,message     : 'The status field is required'};
            setError(a);
            setSubmit(false);
            return;
        }

        setError(initialError);

        // let a = await Requests.Assets.update(input);
        let a = await assets.current.update(input);


        switch(a.data.status){
            case "error"    :
                processError(a.data.messages);
                return; 
            case "success"  :
                setSubmit(false);
                setInput(initialInput);
                enqueueSnackbar('Successfully added',{variant:"success" ,anchorOrigin:{vertical:'top', horizontal:'right'} ,action});
                props.history.goBack();
                return;
            default:
                enqueueSnackbar('Something went wrong, please reload !',{variant:"error" ,anchorOrigin:{vertical:'bottom', horizontal:'center'},
                    action : () => (
                        <Button variant="text" onClick={ () => window.location.reload()}>
                            Reload
                        </Button>
                    ),
                });
                return;

        }
    }

    const processError = (data:any) =>{
        let a:any = error;
        Object.keys(data).forEach((value)=>{
            a[value] = {status      : true,message     : data[value][0]};
        });        
        
        setSubmit(false);
        setError(a);
    }

    return (
        <div className="create-asset">
            <Requests.Assets request={assets} />
            <Paper className="content col-md-8 offset-md-2 paper">
                <Typography variant="h6" className="title bg-primary">Update Assets</Typography>
                <form onSubmit={submitForm} className="mt-4">
                    <div className=" row col-12">
                        <div className="col-4 table-title">Company</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"company")}
                                defaultOptions
                                onChange = {handleAsyncValue}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
                                isDisabled={submit}
                                value = {asyncValue.company_id}
                                name="company_id"
                                isClearable
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                    <div className="col-4 table-title">Asset Tag</div>
                        <div className="col-8">
                            <TextField 
                                className="asset-create-input" 
                                value={input.asset_tag} 
                                onChange = {({target}) => setInput({...input,asset_tag:target.value})}  
                                variant="outlined"
                                error={error.asset_tag.status}
                                helperText={error.asset_tag.message}
                                disabled = {submit}
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Model</div>
                        <div className="col-8">
                            <div className={error.model_id.status ? "error-async-input-search active" : 'error-async-input-search'} >
                                <AsyncSelect
                                    cacheOptions
                                    loadOptions={(inputValue) => loadOptions(inputValue,"model")}
                                    defaultOptions
                                    onChange = {handleAsyncValue}
                                    className="asset-create-async-select"
                                    classNamePrefix="asset-create-async-select"
                                    name = "model_id"
                                    value = {asyncValue.model_id}
                                    isDisabled={submit}
                                    isClearable
                                />
                                <p className="message">{error.model_id.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Status</div>
                        <div className="col-8">
                            <div className={error.status_id.status ? "error-async-input-search active" : 'error-async-input-search'} >
                                <AsyncSelect
                                    cacheOptions
                                    loadOptions={(inputValue) => loadOptions(inputValue,"status")}
                                    defaultOptions
                                    onChange = {handleAsyncValue}
                                    className="asset-create-async-select"
                                    classNamePrefix="asset-create-async-select"
                                    isDisabled={submit}
                                    name="status_id"
                                    value={asyncValue.status_id}
                                    isClearable
                                />
                                <p className="message">{error.status_id.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Serial</div>
                        <div className="col-8">
                            <TextField 
                                className="asset-create-input" 
                                variant="outlined"
                                value={input.serial} 
                                onChange = {({target}) => setInput({...input,serial:target.value})}
                                disabled={submit}
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Asset Name</div>
                        <div className="col-8">
                            <TextField 
                                className="asset-create-input" 
                                variant="outlined"
                                value={input.name} 
                                onChange = {({target}) => setInput({...input,name:target.value})}
                                disabled={submit}
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Purchase Date</div>
                        <div className="col-8 asset-create-date">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    // label="Date picker inline"
                                    value={input.purchase_date}
                                    onChange={(value)=>setInput({...input,purchase_date:moment(value).format("YYYY-MM-DD")})}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    disabled = {submit}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Supplier</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"supplier")}
                                defaultOptions
                                onChange = {handleAsyncValue}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
                                isDisabled = {submit}
                                name =  "supplier_id"
                                value = {asyncValue.supplier_id}
                                isClearable
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Order Number</div>
                        <div className="col-8">
                            <TextField 
                                className="asset-create-input" 
                                variant="outlined"
                                value = {input.order_number}
                                onChange = {({target}) => setInput({...input,order_number:target.value})}
                                disabled = {submit}
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Purchase Cost</div>
                        <div className="col-8">
                            <FormControl variant="outlined" className="asset-create-number">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    // value={values.weight}
                                    // onChange={handleChange('weight')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    labelWidth={0}
                                    value = {input.purchase_cost}
                                    onChange = {({target}) => setInput({...input,purchase_cost:target.value})}
                                    // type="number"
                                    disabled = {submit}
                                    error = {error.purchase_cost.status}
                                />
                                <FormHelperText style={{whiteSpace:"nowrap"}} hidden={!error.purchase_cost.status} error={error.purchase_cost.status}>{error.purchase_cost.message}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Warranty</div>
                        <div className="col-8">
                            <FormControl variant="outlined" className="asset-create-number">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    // value={values.weight}
                                    // onChange={handleChange('weight')}
                                    endAdornment={<InputAdornment position="end">mos.</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    labelWidth={0}
                                    value = {input.warranty_months}
                                    onChange = {({target}) => setInput({...input,warranty_months:target.value})}
                                    // type="number"
                                    disabled = {submit}
                                    error = {error.warranty_months.status}
                                />
                                    <FormHelperText style={{whiteSpace:"nowrap"}} hidden={!error.warranty_months.status} error={error.warranty_months.status}>{error.warranty_months.message}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Notes</div>
                        <div className="col-8">
                            <TextareaAutosize 
                                rows={5} 
                                className="asset-create-textarea" 
                                value = {input.notes}
                                onChange = {({target}) => setInput({...input,notes:target.value})}
                                disabled = {submit}
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Default Location</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"locations")}
                                defaultOptions
                                onChange = {handleAsyncValue}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
                                isDisabled = {submit}
                                name = "rtd_location_id"
                                value = {asyncValue.rtd_location_id}
                                isClearable
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title"> </div>
                        <div className="col-8">
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                        checked={input.requestable ? true : false}
                                        onChange={({target}) => setInput({...input,requestable:parseInt(target.value,10) === 0 ? 1 : 0})} 
                                        value={input.requestable}
                                        disabled = {submit}
                                    />
                                }
                                label="Requestable"
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Upload Image</div>
                        <div className="col-8">
                            <Uploader 
                                url = {Url.upload}
                                accept = ".png, .jpg, .jpeg, "
                                state = {{
                                    url : input.image,
                                    setUrl : (a:string) => setInput({...input,image:a}) 
                                }}
                                maxSize = {10000000}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="col-12 text-right">
                        <Button variant="contained" disabled = {submit} onClick={() =>props.history.goBack()}>Cancel</Button>&nbsp;&nbsp;
                        <Button variant="contained" disabled = {submit} type="submit">Update</Button>
                    </div>
                </form>           
            </Paper>
        </div>
    )
}



export default withRouter(Edit);