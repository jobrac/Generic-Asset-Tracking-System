export interface Show{
    limit           ?:  number,
    offset          ?:  number,
    search          ?:  string,
    order_number    ?:  string,
    sort            ?:  "id"|"name"|"company"|"manufacturer"|"product_key"|"order_number"|"purchase_date"|"purchase_cost"|"notes"|"expiration_date"|"seats"|"free_seats_count"|"license_name"|"license_email"|"maintained"|"supplier"|"created_at"|"updated_at"|"user_can_checkout"|"available_actions",
    order           ?:  "asc"|"desc",
    expand          ?:  string
}

export interface Create{
    name            :   string,
    seats           :   number,
    company_id      ?:  number,
    expiration_date ?:  string,
    license_email   ?:  string,
    license_name    ?:  string,
    maintained      ?:  boolean,
    manufacturer_id ?:  number,
    notes           ?:  string,
    order_number    ?:  string,
    purchase_cost   ?:  number,
    purchase_date   ?:  string,
    purchase_order  ?:  string,
    reassignable    ?:  boolean,
    serial          ?:  string,
    supplier_id     ?:  number,
    termination_date?:  string,
}

export interface Get{
    id              :   number,
}

export interface Update{
    id              :   number,
    name            :   string,
    seats           :   number,
    company_id      ?:  number,
    expiration_date ?:  string,
    license_email   ?:  string,
    license_name    ?:  string,
    maintained      ?:  boolean,
    manufacturer_id ?:  number,
    notes           ?:  string,
    order_number    ?:  string,
    purchase_cost   ?:  number,
    purchase_date   ?:  string,
    purchase_order  ?:  string,
    reassignable    ?:  boolean,
    serial          ?:  string,
    supplier_id     ?:  number,
    termination_date?:  string,
}

export interface Delete{
    id              :   number
}