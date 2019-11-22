export interface Show{
    limit ?: number,
    offset ?: number,
    search ?: string,
    sort ?: "id"|"asset"|"title"|"location"|"notes"|"supplier"|"cost"|"asset_maintenance_type"|"start_date"|"asset_maintenance_time"|"completion_date"|"user_id"|"created_at"|"updated_at"|"available_actions",
    order ?: "desc"|"asc",
    asset_id ?: number 
}

export interface Create{
    name : string,
    address ?: string,
    address2 ?: string,
    state : string,
    country : string,
    zip : string
}