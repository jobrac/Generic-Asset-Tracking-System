import { TableDisplay } from '../Actions/Types';

const initialState:any  = {
    assets: {
                id                  : {name : 'ID',                 show : true},
                name                : {name : 'Asset Name',         show : true},
                company             : {name : 'Company',            show : true},
                status_label        : {name : 'Status',             show : true},
                location            : {name : 'Location',           show : true},
                checkin_counter     : {name : 'Checkins',           show : true},
                checkout_counter    : {name : 'Checkouts',          show : true},

                //toggleble
                asset_tag           : {name : 'Asset Tag',          show : false},
                serial              : {name : 'Serial',             show : false},
                model               : {name : 'Model',              show : false},
                model_number        : {name : 'Model Number',       show : false},
                eol                 : {name : 'EOL',                show : false},
                category            : {name : 'Category',           show : false},
                manufacturer        : {name : 'Manufacturer',       show : false},
                supplier            : {name : 'Supplier',           show : false},
                notes               : {name : 'Notes',              show : false},
                order_number        : {name : 'Order Number',       show : false},
                rtd_location        : {name : 'Default Location',   show : false},
                image               : {name : 'Device Image',       show : false},
                assigned_to         : {name : 'Assigned To',        show : false},
                warranty_months     : {name : 'Warranty',           show : false},
                warranty_expires    : {name : 'Warranty Expires',   show : false},
                created_at          : {name : 'Created At',         show : false},
                updated_at          : {name : 'Updated At',         show : false},
                last_audit_date     : {name : 'Last Audit',         show : false},
                next_audit_date     : {name : 'Next Audit',         show : false},
                deleted_at          : {name : 'Deleted At',         show : false},
                purchase_date       : {name : 'Purchase Date',      show : false},
                last_checkout       : {name : 'Last Checkout',      show : false},
                expected_checkin    : {name : 'Expected Checkin',   show : false},
                purchase_cost       : {name : 'Cost',               show : false},
                requests_counter    : {name : 'Requests',           show : false},
                user_can_checkout   : {name : 'Checkin/Checkout',   show : false},
            },
};

export default function(state = initialState, action:any) {
	switch (action.type) {
    	case TableDisplay.assets:
			return {
                ...state,
                assets :{
                    ...state.assets,
                    [action.payload.name] : {
                        ...state.assets[action.payload.name],
                        show : action.payload.show,
                    }
                }
			};
    	default:
      		return state;
 	}
};