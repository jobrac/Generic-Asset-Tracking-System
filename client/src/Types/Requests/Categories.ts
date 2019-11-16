export interface Show{
    limit       ?:       number,
    offset      ?:       number,
    search      ?:       string,
    sort        ?:       "id"|"name"|"image"|"category_type"|"asset"|"eula"|"checkin_email"|"require_acceptance"|"assets_count"|"accessories_count"|"consumables_count"|"components_count"|"licenses_count"|"created_at"|"updated_at"|"available_actions",
    order       ?:       "asc"|"desc"
}

export interface Create{
    name            ?:      string,
    category_type   ?:      string,
    use_default_eula:       boolean,
    require_acceptance:     boolean,
    checkin_email   :       boolean
}

export interface Get{
    id              :       number
}

export interface Update{
    id              :       number,
    name            :       string,
    category_type   :       string,
    use_default_eula?:      boolean,
    require_acceptance?:    boolean,
    checkin_email   ?:      boolean
}

export interface Delete{
    id               :       number    
}