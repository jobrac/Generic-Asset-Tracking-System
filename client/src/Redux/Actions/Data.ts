import {
    Hardware, Companies,Locations,Accessories,Consumables,
    Components,Users,StatusLabels,Models,Licenses,Categories,
    Manufacturers,Fieldsets,Maintenances,Activity,Suppliers
} from './Types';
import { Requests } from 'Services';

// interface Data{
//     config  :   any,
//     data    :   any
// }

export const hardware = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : Hardware,
            payload : {
                config : config,
                data   : {},
            }
        })

        const a = await Requests.Assets.show(config);
        if(a.status === 200){
            dispatch({
                type    : Hardware,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const companies = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : Companies,
            payload : {
                config : config,
                data   : {}
            }
        });

        const a = await Requests.Companies.show(config);
        if(a.status === 200){
            dispatch({
                type    : Companies,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const locations = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : Locations,
            payload : {
                config : config,
                data   : {}
            }
        });

        const a = await Requests.Locations.show(config);
        if(a.status === 200){
            dispatch({
                type    : Locations,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const accessories = (config:any) => {
    return async(dispatch:any) => {
        dispatch({
            type    : Accessories,
            payload : {
                config : config,
                data   : {}
            }

        });
        const a = await Requests.Accessories.show(config);
        if(a.status === 200){
            dispatch({
                type    : Accessories,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const consumables = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : Consumables,
            payload : {
                config : config,
                data   : {},
            }
        });

        const a = await Requests.Consumables.show(config);
        if(a.status === 200){
            dispatch({
                type    : Consumables,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const components = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Components,
            payload : {
                config : config,
                data   : {},
            }
        });

        const a = await Requests.Components.show(config);
        if(a.status === 200){
            dispatch({
                type    : Components,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const users = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Users,
            payload : {
                config : config,
                data   : {},
            }
        });

        const a = await Requests.User.show(config);
        if(a.status === 200){
            dispatch({
                type    : Users,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const statusLabels = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : StatusLabels,
            payload : {
                config : config,
                data   : {},
            }
        });

        const a = await Requests.StatusLabels.show(config);
        if(a.status === 200){
            dispatch({
                type    : StatusLabels,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const models = (config:any) => {
    return async (dispatch:any) => {

        dispatch({
            type    : Models,
            payload : {
                config : config,
                data   : {},
            }
        });

        const a = await Requests.Models.show(config);
        if(a.status === 200){
            dispatch({
                type    : Models,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const licenses = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Licenses,
            payload : {
                config : config,
                data   : {},
            }
        });
        const a = await Requests.Licenses.show(config);
        if(a.status === 200){
            dispatch({
                type    : Licenses,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const categories = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Categories,
            payload : {
                config : config,
                data   : {},
            }
        });
        const a = await Requests.Categories.show(config);
        if(a.status === 200){
            dispatch({
                type    : Categories,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const manufacturers = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Manufacturers,
            payload : {
                config : config,
                data   : {}
            }
        });
        const a = await Requests.Manufacturers.show(config);
        if(a.status === 200){
            dispatch({
                type    : Manufacturers,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const fieldsets = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Fieldsets,
            payload : {
                config : config,
                data   : {}
            }
        });
        const a = await Requests.Fieldsets.show();
        if(a.status === 200){
            dispatch({
                type    : Fieldsets,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const maintenances = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Maintenances,
            payload : {
                config : config,
                data   : {}
            }
        });
        const a = await Requests.Maintenances.show(config);
        if(a.status === 200){
            dispatch({
                type    : Maintenances,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const activity = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Activity,
            payload : {
                config : config,
                data   : {},
            }
        });
        const a = await Requests.Activity.show(config);
        if(a.status === 200){
            dispatch({
                type    : Activity,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}

export const suppliers = (config:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    : Suppliers,
            payload : {
                config : config,
                data   : {},
            }
        });
        const a = await Requests.Suppliers.show(config);
        if(a.status === 200){
            dispatch({
                type    : Suppliers,
                payload : {
                    config : config,
                    data   : a.data,
                }
            });
        }
    }
}