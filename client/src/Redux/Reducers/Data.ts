import {
    Hardware, Companies,Locations,Accessories,Consumables,
    Components,Users,StatusLabels,Models,Licenses,Categories,
    Manufacturers,Fieldsets,Maintenances, Activity,Suppliers
} from '../Actions/Types';

const initialState = {
    hardware        :   {        
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    companies       :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    locations       :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    accessories     :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    consumables     :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    components      :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    users           :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    statusLabels    :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    models          :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    licenses        :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    categories      :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    manufacturers   :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    fieldsets       :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    maintenances    :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    activity        :   {
        config      :   {
            limit   : 10,
        },
        data        :   {},
    },
    suppliers        :   {
        config       :   {
            limit    : 10,
        },
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
        case Suppliers:
            return{
                ...state,
                suppliers : {
                    config : action.payload.config,
                    data   : action.payload.data,
                }
            }
        
    	default:
      		return state;
 	}
};