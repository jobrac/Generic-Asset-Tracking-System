import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {
    hardware, companies,locations,accessories,consumables,
    components,users,statusLabels,models,licenses,categories,
    manufacturers,fieldsets,maintenances,activity
} from 'Redux/Actions';

let datas = {};

const Fetcher = ():any => {

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.Data);
    const [loaded,setLoaded] = React.useState(false);
    React.useEffect(()=>{
        datas = data;

        if(!loaded){
            repeater();
            setLoaded(true);
        }

        // let interval;

        // if(!interval){
        //     repeater(data);
        // }
        // if(timer === 0){
        //     repeater();
        //     setTimer(1);
        // }else{
        //     setTimer(timer+1);
            // let interval = setInterval(()=>{
            //     repeater();
            // },5000);
        // }
        
    },[data]);


    const repeater = () => {
        const caller = (data:any) =>{
            dispatch(hardware(data.hardware.config));
            dispatch(companies(data.companies.config));
            dispatch(locations(data.locations.config));
            dispatch(accessories(data.accessories.config));
            dispatch(consumables(data.consumables.config));
            dispatch(components(data.components.config));
            dispatch(statusLabels(data.statusLabels.config));
            dispatch(users(data.users.config));
            dispatch(models(data.models.config));
            dispatch(licenses(data.licenses.config));
            dispatch(categories(data.categories.config));
            dispatch(manufacturers(data.manufacturers.config));
            dispatch(fieldsets(data.fieldsets.config));
            dispatch(maintenances(data.maintenances.config));
            dispatch(activity(data.activity.config));
        }

        caller(datas);
        setInterval(()=>{
            caller(datas);
        },60000);
    }
    return null;
}

export default Fetcher;