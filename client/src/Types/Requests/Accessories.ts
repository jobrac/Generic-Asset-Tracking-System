/**
 * Return a listing of accessories
 */

export interface Show{
    limit           ?:   number,
    offset          ?:   number,
    search          ?:   string,
    order_number    ?:   string,
    sort            ?:   "id"    |   "name"  | "asset_tag"   | "serial" | "model"  |  "model_number" |  "last_checkout" | "category" | "manufacturer" | "notes" | "expected_checkin" | "order_number" | "companyName" | "location" | "image" | "status_label" | "assigned_to" | "created_at" | "purchase_date" | "purchase_cost",
    order           ?:   "asc"   |   "desc",
    expand          ?:   string,
}

export interface Create{
    name            :   string,
    qty             :   number,
    order_number    ?:   string,
    purchase_cost   ?:   number,
    purchase_date   ?:   string,
    model_number    ?:   string,
    category_id     :   number,
    company_id      ?:   number,
    location_id     ?:   number,
    manufacturer_id ?:   number,
    supplier_id     ?:   number
}

export interface Get{
    id              :   number
}