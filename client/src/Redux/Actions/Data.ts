import {
    Hardware, Companies,Locations,Accessories,Consumables,
    Components,Users,StatusLabels,Models,Licenses,Categories,
    Manufacturers,Fieldsets,Maintenances,Activity
} from './Types';

interface Data{
    config  :   any,
    data    :   any
}

export const hardware = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Hardware,
            payload : data
        });
    }
}

export const companies = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Companies,
            payload : data
        });
    }
}

export const locations = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Locations,
            payload : data
        });
    }
}

export const accessories = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Accessories,
            payload : data
        });
    }
}

export const consumables = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Consumables,
            payload : data
        });
    }
}

export const components = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Components,
            payload : data
        });
    }
}

export const users = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Users,
            payload : data
        });
    }
}

export const statusLabels = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : StatusLabels,
            payload : data
        });
    }
}

export const models = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Models,
            payload : data
        });
    }
}

export const licenses = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Licenses,
            payload : data
        });
    }
}

export const categories = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Categories,
            payload : data
        });
    }
}

export const manufacturers = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Manufacturers,
            payload : data
        });
    }
}

export const fieldsets = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Fieldsets,
            payload : data
        });
    }
}

export const maintenances = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Maintenances,
            payload : data
        });
    }
}

export const activity = (data:Data) => {
    return (dispatch:any) => {
        dispatch({
            type    : Activity,
            payload : data
        });
    }
}