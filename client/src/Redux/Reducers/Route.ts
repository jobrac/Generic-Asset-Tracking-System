import { Route, Nav} from '../Actions/Types';
import {LoginMiddleware,ComponentMiddleware} from 'Middleware';
import {
	Home,
	Login,
	Assets,
	Licenses,
	Accessories,
	Consumables,
	Components,
	Users,
	Models,
	Categories,
	Departments,
	StatusLabels,
	CustomFields,
	Suppliers,
	Manufacturers,
	Depreciations,
	Locations,
	Companies,
	AccountAssets,
	AccountRequests
} from 'Components';
import { Dashboard, Laptop, Assignment, Mouse, BatteryFull, Keyboard, AssignmentInd, SaveAlt, Settings, Print, PlaylistAddCheck } from '@material-ui/icons';

const initialState = {
    list : [
		{
			name 		: 'login',
			exact 		: true,
			strict  	: true,
			path  		: '/login',
			middleware  : LoginMiddleware,
			component	: Login
		},{
			name		: 'home',
			exact		: true,
			strict		: true,
			path  		: '/',
			middleware 	: ComponentMiddleware,
			component 	: Home
		}
		,{
			name 		: 'assets',
			exact 		: false,
			strict 		: false,
			path 		: '/assets',
			middleware 	: ComponentMiddleware,
			component 	: Assets,
		},{
			name 		: 'licenses',
			exact 		: false,
			strict 		: false,
			path 		: '/licenses',
			middleware 	: ComponentMiddleware,
			component 	: Licenses,
		},{
			name 		: 'accessories',
			exact 		: false,
			strict 		: false,
			path 		: '/accessories',
			middleware 	: ComponentMiddleware,
			component 	: Accessories,
		},{
			name 		: 'consumables',
			exact 		: false,
			strict 		: false,
			path 		: '/consumables',
			middleware 	: ComponentMiddleware,
			component 	: Consumables,
		},{
			name 		: 'components',
			exact 		: false,
			strict 		: false,
			path 		: '/components',
			middleware 	: ComponentMiddleware,
			component 	: Components,
		},{
			name 		: 'users',
			exact 		: false,
			strict 		: false,
			path 		: '/users',
			middleware 	: ComponentMiddleware,
			component 	: Users,
		},{
			name 		: 'models',
			exact 		: false,
			strict 		: false,
			path 		: '/models',
			middleware 	: ComponentMiddleware,
			component 	: Models,
		},{
			name 		: 'categories',
			exact 		: false,
			strict 		: false,
			path 		: '/categories',
			middleware 	: ComponentMiddleware,
			component 	: Categories,
		},{
			name 		: 'departments',
			exact 		: false,
			strict 		: false,
			path 		: '/departments',
			middleware 	: ComponentMiddleware,
			component 	: Departments,
		},{
			name 		: 'status_labels',
			exact 		: false,
			strict 		: false,
			path 		: '/status-labels',
			middleware 	: ComponentMiddleware,
			component 	: StatusLabels,
		},{
			name 		: 'custom_fields',
			exact 		: false,
			strict 		: false,
			path 		: '/custom-fields',
			middleware 	: ComponentMiddleware,
			component 	: CustomFields,
		},{
			name 		: 'suppliers',
			exact 		: false,
			strict 		: false,
			path 		: '/suppliers',
			middleware 	: ComponentMiddleware,
			component 	: Suppliers,
		},{
			name 		: 'manufacturers',
			exact 		: false,
			strict 		: false,
			path 		: '/manufacturers',
			middleware 	: ComponentMiddleware,
			component 	: Manufacturers,
		},{
			name 		: 'depreciations',
			exact 		: false,
			strict 		: false,
			path 		: '/depreciations',
			middleware 	: ComponentMiddleware,
			component 	: Depreciations,
		},{
			name 		: 'locations',
			exact 		: false,
			strict 		: false,
			path 		: '/locations',
			middleware 	: ComponentMiddleware,
			component 	: Locations,
		},{
			name 		: 'companies',
			exact 		: false,
			strict 		: false,
			path 		: '/companies',
			middleware 	: ComponentMiddleware,
			component 	: Companies,
		},{
			name 		: 'account_assets',
			exact 		: false,
			strict 		: false,
			path 		: '/account/assets',
			middleware 	: ComponentMiddleware,
			component 	: AccountAssets,
		},{
			name 		: 'account_requests',
			exact 		: false,
			strict 		: false,
			path 		: '/accounto/requests',
			middleware 	: ComponentMiddleware,
			component 	: AccountRequests,
		}
	],
	nav : [
		{
			name : "Dashboard",
			icon : Dashboard,
			url  : "/" 
		},{
			name : "Assets",
			icon : Laptop,
			props: [
				{name : "List All", 		url  : "/assets"},
				{name : "Bulk Checkout", 	url : "/assets/bulk-checkout"},
				{name : "Requested", 		url : "/assets/requested"},
				{name : "Deleted", 			url : "/assets/deleted"},
				{name : "Asset Maintenance",url : "/assets/maintenace"},
				{name : "Bulk Audit", 		url : "/assets/bulk-audit"},
			]
		},{
			name : "Licenses",
			icon : Assignment,
			url  : '/licenses',
		},{
			name : "Accessories",
			icon :  Mouse,
			url  : "/accessories", 
		},{
			name : "Consumables",
			icon : BatteryFull,
			url  : "/consumables",
		},{
			name : "Components",
			icon : Keyboard,
			url  : "/components",
		},{
			name : "Users",
			icon : AssignmentInd,
			url  : "/users",
		},{
			name : "Imports",
			icon : SaveAlt,
			url  : "/imports",
		},{
			name : "Settings",
			icon : Settings,
			props: [
				{name : "Custom Fields", 		url  : "/custom-fields"},
				{name : "Status Labels", 		url : "/status-labels"},
				{name : "Assets Models", 		url : "/models"},
				{name : "Categories", 			url : "/categories"},
				{name : "Manufacturies",		url : "/manufacturers"},
				{name : "Suppliers", 			url : "/suppliers"},
				{name : "Departments", 			url : "/departments"},
				{name : "Locations", 			url : "/locations"},
				{name : "Companies", 			url : "/companies"},
				{name : "Deprecation", 			url : "/depreciations"},
			]
		},{
			name : "Reports",
			icon : Print,
			props:[
				{name:"Activity Reports",		url : "/reports/activity"},
				{name:"Audit Logs",				url : "/reports/logs"},
				{name:"Depreciation Report",	url : "/reports/depreciations"},
				{name:"License Report",			url : "/reports/licenses"},
				{name:"Asset Maintenance",		url : "/reports/asset-maintenance"},
				{name:"Unacceptable Assets",	url : "/reports/asset-unacceptable"},
				{name:"Accessory Report", 		url : "/reports/accessories"}
			]
		},{
			name : "Requestable",
			icon : PlaylistAddCheck,
			url  : "/requestables", 
		}
	],
};

export default function(state = initialState, action:any) {
	switch (action.type) {
		case Route:
      		return {
				...state,
        		list : action.payload,
			}
		case Nav:
			return{
				...state,
				nav : action.payload,
			}
    	default:
      		return state;
 	}
}
