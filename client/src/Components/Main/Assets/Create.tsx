import React from 'react';
import { Paper, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, FormControlLabel, Checkbox, Button } from '@material-ui/core';
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



type inputAsync = "company" | "model" | "status" | "supplier" | "locations";


const Create = (props:any) =>{

    const dispatch = useDispatch();
    const [input,setInput] = React.useState({
        company_id      : null,
        asset_tag       : '',
        model_id        : null,
        status_id          : null,
        serial          : '',
        name            : '',
        purchase_date   : moment(new Date()).format("L"),
        supplier_id        : null,
        order_number    : '',
        purchase_cost   : '',
        warranty_months : null,
        notes           : '',
        rtd_location_id : null,
        requestable     : 0,
        image           : '',
    });

    console.log(input);    

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
        // dispatch(companies(fetched.companies.config));
        dispatch(Breadcrumbs([]));
    },[])



    return (
        <div className="create-asset">
            <div className="title">Create Asset</div>
            <Paper className="content col-md-8 offset-md-2">
                <form>
                    <div className=" row col-12">
                        <div className="col-4 table-title">Company</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"company")}
                                defaultOptions
                                onChange = {(value:any) => setInput({...input,company_id:value.value})}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
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
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Model</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"model")}
                                defaultOptions
                                onChange = {(value:any) => setInput({...input,model_id:value.value})}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
                            />
                        </div>
                    </div>
                    <div className=" row col-12 mt-1">
                        <div className="col-4 table-title">Status</div>
                        <div className="col-8">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={(inputValue) => loadOptions(inputValue,"status")}
                                defaultOptions
                                onChange = {(value:any) => setInput({...input,status_id:value.value})}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
                            />
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
                                    onChange={(value)=>setInput({...input,purchase_date:moment(value).format("L")})}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
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
                                onChange = {(value:any) => setInput({...input,supplier_id:value.value})}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
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
                                    type="number"
                                />
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
                                    type="number"
                                />
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
                                onChange = {(value:any) => setInput({...input,rtd_location_id:value.value})}
                                className="asset-create-async-select"
                                classNamePrefix="asset-create-async-select"
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
                                    />
                                }
                                label="Secondary"
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
                        <Button variant="contained">Save</Button> &nbsp;&nbsp;
                        <Button variant="contained" onClick={() =>props.history.goBack()}>Cancel</Button>
                    </div>
                </form>           
            </Paper>
        </div>
    )
}



export default withRouter(Create);