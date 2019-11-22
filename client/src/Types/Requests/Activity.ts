export interface Show{
    search      ?:      string,
    target_type ?:      string,
    target_id   ?:      number,
    item_type   ?:      string,
    item_id     ?:      number,
    action_type ?:      string,
    upload      ?:      string,
    sort        ?:      "id"|"created_at"|"target_id"|"user_id"|"action_type"|"note",
    order       ?:      "desc"|"asc",
    offset      ?:      number,
    limit       ?:      number
}