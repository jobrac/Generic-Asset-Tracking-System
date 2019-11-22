export interface Show{
    limit   ?:  number,
    offset  ?:  number,
    search  ?:  string,
    sort    ?:  "id"|"name"|"type"|"color"|"show_in_nav"|"assets_count"|"notes"|"created_at"|"updated_at"|"available_actions",
    order   ?:  "asc"   | "desc"
}

export interface Create{
    name    :   string,
    type    ?:  "deployable" | "pending" | "archived",
}

export interface Get{
     id     :   number
}

export interface Update{
    id              :   number,
    name            :   string,
    deployable      :   boolean,
    pending         :   boolean,
    archived        :   boolean
}

export interface Delete{
    id              :   number,
}

export interface AssetList{
    id              :   number
}