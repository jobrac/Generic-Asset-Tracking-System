import { TableDisplay as TD } from './Types';


// interface Table {
//     id                  ?:  boolean,
//     name                ?:  boolean,
//     asset_tag           ?:  boolean,
//     serial              ?:  boolean,
//     model               ?:  boolean,
//     model_number        ?:  boolean,
//     eol                 ?:  boolean,
//     status_label        ?:  boolean,
//     category            ?:  boolean,
//     manufacturer        ?:  boolean,
//     supplier            ?:  boolean,
//     notes               ?:  boolean,
//     order_number        ?:  boolean,
//     company             ?:  boolean,
//     location            ?:  boolean,
//     rtd_location        ?:  boolean,
//     image               ?:  boolean,
//     assigned            ?:  boolean,
//     warranty_months     ?:  boolean,
//     warranty_expires    ?:  boolean,
//     created_at          ?:  boolean,
//     updated_at          ?:  boolean,
//     last_audit_date     ?:  boolean,
//     next_audit_date     ?:  boolean,
//     deleted_at          ?:  boolean,
//     purchase_date       ?:  boolean,
//     last_checkout       ?:  boolean,
//     expected_checkin    ?:  boolean,
//     purchase_cost       ?:  boolean,
//     checkin_counter     ?:  boolean,
//     checkout_counter    ?:  boolean,
//     requests_counter    ?:  boolean,
//     user_can_checkout   ?:  boolean,
//     custom_fields       ?:  boolean,
//     clone               ?:  boolean,
//     edit                ?:  boolean,
//     delete              ?:  boolean,
// };

type Name = "id"                |
            "name"              |
            "asset_tag"         |
            "serial"            |
            "model"             |
            "model_number"      |
            "eol"               |
            "status_label"      |
            "category"          |
            "manufacturer"      |
            "supplier"          |
            "notes"             |
            "order_number"      |
            "company"           |
            "location"          |
            "rtd_location"      |
            "image"             |
            "assigned"          |
            "warranty_months"   |
            "warranty_expires"  |
            "created_at"        |
            "updated_at"        |
            "last_audit_date"   |
            "next_audit_date"   |
            "deleted_at"        |
            "purchase_date"     |
            "last_checkout"     |
            "expected_checkin"  |
            "purchase_cost"     |
            "checkin_counter"   |
            "checkout_counter"  |
            "requests_counter"  |
            "user_can_checkout" |
            "custom_fields";

type typeControl = "assets" | "licenses" ;

interface Table {
    name    : Name,
    show    : boolean,
    type    : typeControl,
}

export const setTableDisplay = (control:Table) => {

    return (dispatch:any) => {

        // console.log(control);
        dispatch({
            type    : TD[control.type],
            payload : control
        });
    }
}