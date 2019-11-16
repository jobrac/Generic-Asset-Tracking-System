export interface Show{
    limit   ?: number,
    offset  ?: number,
    search  ?: number,
    sort    ?: "id" | "name" | "manufacturer" | "image" | "model_number" | "depreciation" | "asset_count" | "category" | "fieldset" | "eol" | "notes" | "created_at" | "updated_at" | "deleted_at" | "available_actions",
    order   ?: "asc" | "desc"
}

export interface Create{
    /**
     * Model name
     */
    name            :   string,

    /**
     * Part or model number of the model
     */
    model_number    ?:   string,
    category_id     :   number,
    manufacturer_id :   number,

    /**
     * Number of months until this model's assets are considered EOL
     */
    eol             ?:   number,

    /**
     * The ID of an EXISTING custom fieldset
     */
    fieldset_id     ?:   number,
}

export interface Get{
    id      :   number,
}

export interface Update{
    id              :   number,
    name            :   string,
    model_number    ?:   string,
    category_id     :   number,
    manufacturer_id :   number,
    eol             ?:   number,
    fieldset_id     ?:   number
}

export interface Delete{
    id              :   number,
}