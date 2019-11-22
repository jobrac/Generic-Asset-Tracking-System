import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {
    hardware, companies,locations,accessories,consumables,
    components,users,statusLabels,models,licenses,categories,
    manufacturers,fieldsets,maintenances,activity
} from 'Redux/Actions';
import { Requests } from 'Services';
import { statement } from '@babel/template';

const Fetcher = ():any => {

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.Data);

    React.useEffect(()=>{

        repeater();
        setInterval(()=>{
            repeater();
        },5000);
    },[])


    const repeater = async () => {
        await Hardware();
        await Companies();
        await Locations();
        await Accessories();
        await Consumables();
        await Components();
        await Users();
        await StatusLabels();
        await Models();
        await Licenses();
        await Categories();
        await Manufacturers();
        await Fielsets();
        await Maintenances();
        await Activity();
    }

    const Hardware = async () => {
        const a = await Requests.Assets.show();

        if(a.status === 200){
            dispatch(hardware({config:data.hardware.config,data:a.data}));
        }
        
    }

    const Companies = async () => {
        const a = await Requests.Companies.show();
        if(a.status === 200){
            dispatch(companies({config:data.companies.config,data:a.data}));
        }
    }

    const Locations = async () => {
        const a = await Requests.Locations.show();
        if(a.status === 200){
            dispatch(locations({config:data.locations.config,data:a.data}));
        }
    }

    const Accessories = async () => {
        const a = await Requests.Accessories.show();
        if(a.status === 200){
            dispatch(accessories({config:data.accessories.config,data:a.data}));
        }
    }

    const Consumables = async () => {
        const a = await Requests.Consumables.show();
        if(a.status === 200){
            dispatch(consumables({config:data.consumables.config,data:a.data}));
        }
    }

    const Components = async () => {
        const a = await Requests.Components.show();
        if(a.status === 200){
            dispatch(components({config:data.components.config,data:a.data}));
        }
    }

    const Users = async () => {
        const a = await Requests.User.show();
        if(a.status === 200){
            dispatch(users({config:data.users.config,data:a.data}));
        }
    }

    const StatusLabels = async () => {
        const a = await Requests.StatusLabels.show();
        if(a.status === 200){
            dispatch(statusLabels({config:data.statusLabels.config,data:a.data}));
        }
    }

    const Models = async () => {
        const a = await Requests.Models.show();
        if(a.status === 200){
            dispatch(models({config:data.models.config,data:a.data}));
        }
    }

    const Licenses = async () => {
        const a = await Requests.Licenses.show();
        if(a.status === 200){
            dispatch(licenses({config:data.licenses.config,data:a.data}));
        }
    }

    const Categories = async () => {
        const a = await Requests.Categories.show();
        if(a.status === 200){
            dispatch(categories({config:data.categories.config,data:a.data}));
        }
    }

    const Manufacturers = async () => {
        const a = await Requests.Manufacturers.show();
        if(a.status === 200){
            dispatch(manufacturers({config:data.manufacturers.config,data:a.data}));
        }
    }

    const Fielsets = async () => {
        const a = await Requests.Fieldsets.show();
        if(a.status === 200){
            dispatch(fieldsets({config:data.fieldsets.config,data:a.data}));
        }
    }

    const Maintenances = async () => {
        const a = await Requests.Maintenances.show();
        if(a.status === 200){
            dispatch(maintenances({config:data.maintenances.config,data:a.data}));
        }
    }

    const Activity = async () => {
        const a = await Requests.Activity.show();
        if(a.status === 200){
            dispatch(activity({config:data.activity.config,data:a.data}));
        }
    }


    return null;
}

export default Fetcher;