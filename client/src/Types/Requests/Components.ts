export interface Show{
    limit           ?:  number,
    offset          ?:  number,
    search          ?:  string,
    order_number    ?:  string,
    sort            ?:  "id"    |   "name"  | "asset_tag"   | "serial" | "model"  |  "model_number" |  "last_checkout" | "category" | "manufacturer" | "notes" | "expected_checkin" | "order_number" | "companyName" | "location" | "image" | "status_label" | "assigned_to" | "created_at" | "purchase_date" | "purchase_cost",
    order           ?:  "desc" | "asc",
    expand          ?:  string,
}

export interface Create{
    name            :   string
}

export interface Get{
    id              :   number,
}