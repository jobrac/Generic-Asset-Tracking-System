export interface Show{
    deleted     ?:      boolean,
    search      ?:      string,
    offset      ?:      number,
    limit       ?:      number,
    order       ?:      "asc"|"desc",
    sort        ?:      "id"|"name"|"url"|"image"|"support_url"|"support_phone"|"support_email"|"assets_count"|"licenses_count"|"consumables_count"|"accessories_count"|"created_at"|"updated_at"|"deleted_at"|"available_actions",   
}

export interface Get{
    id           :      number, 
}

export interface Delete{
    id           :      number, 
}


/**
 * Lacking parameters to be updated
 */
export interface Create{
    name         :      string
}

export interface Update{
    id           :      number,
    name         :      string
}