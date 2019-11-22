import {
    Hardware, Companies,Locations,Accessories,Consumables,
    Components,Users,StatusLabels,Models,Licenses,Categories,
    Manufacturers,Fieldsets,Maintenances, Activity
} from '../Actions/Types';

const initialState = {
    hardware        :   {
        config      :   {},
        data        :   {},
    },
    companies       :   {
        config      :   {},
        data        :   {},
    },
    locations       :   {
        config      :   {},
        data        :   {},
    },
    accessories     :   {
        config      :   {},
        data        :   {},
    },
    consumables     :   {
        config      :   {},
        data        :   {},
    },
    components      :   {
        config      :   {},
        data        :   {},
    },
    users           :   {
        config      :   {},
        data        :   {},
    },
    statusLabels    :   {
        config      :   {},
        data        :   {},
    },
    models          :   {
        config      :   {},
        data        :   {},
    },
    licenses        :   {
        config      :   {},
        data        :   {},
    },
    categories      :   {
        config      :   {},
        data        :   {},
    },
    manufacturers   :   {
        config      :   {},
        data        :   {},
    },
    fieldsets       :   {
        config      :   {},
        data        :   {},
    },
    maintenances    :   {
        config      :   {},
        data        :   {},
    },
    activity        :   {
        config      :   {},
        data        :   {},
    }
};

export default function(state = initialState, action:any) {
	switch (action.type) {
        case Hardware:
            return{
                ...state,
                hardware : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Companies:
            return{
                ...state,
                companies : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Locations:
            return{
                ...state,
                locations : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Accessories:
            return{
                ...state,
                accessories : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Consumables:
            return{
                ...state,
                consumables : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Components:
            return{
                ...state,
                components : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Users:
            return{
                ...state,
                users : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case StatusLabels:
            return{
                ...state,
                statusLabels : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Models:
            return{
                ...state,
                models : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Licenses:
            return{
                ...state,
                licenses : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            } 
        case Categories:
            return{
                ...state,
                categories : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Manufacturers:
            return{
                ...state,
                manufacturers : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Fieldsets:
            return{
                ...state,
                fieldsets : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Maintenances:
            return{
                ...state,
                maintenances : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        case Activity:
            return{
                ...state,
                activity : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        
    	default:
      		return state;
 	}
};