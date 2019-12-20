/**
 * Return a listing of assets
 */
export interface Show{
    
    /**
     * Specify the number of results you wish to return. 
     * Defaults to 50, but we have it set to 2 by default so the API explorer doesn't scroll forever.
     */
    limit           ?:       number,
    
    /**
     * Offset to use
     */
    offset          ?:       number,

    /**
     * A text string to search the assets data for
     */
    search          ?:       string,

    /**
     * Return only assets associated with a specific order number
     */
    order_number    ?:       string,

    /**
     * Specify the column name you wish to sort by
     */
    sort            ?:       "id" | "name" | "asset_tag" | "serial" | "model" | "model_number" | "last_checkout" | "category" | "manufacturer" | "notes" | "expected_checkin" | "order_number" | "companyName" | "location" | "image" | "status_label" | "assigned_to" | "created_at" | "purchase_date" | "purchase_cost",
    
    /**
     * Specify the order (asc or desc) you wish to order by on your sort column
     */
    order           ?:       "desc"  | "asc",

    /**
     * Optionally restrict asset results to this asset model ID
     */
    model_id        ?:       number,

    /**
     * Optionally restrict asset results to this status label ID
     */
    category_id     ?:       number,

    /**
     * Optionally restrict asset results to this asset model ID
     */
    manufacturer_id ?:       number,

    /**
     * Optionally restrict asset results to this company ID
     */
    company_id      ?:       number,

    /**
     * Optionally restrict asset results to this location ID
     */
    location_id     ?:       number,

    /**
     * Optionally restrict asset results to one of these status types: RTD, Deployed, Undeployable, Deleted, Archived, Requestable
     */
    status          ?:       "RTD" | "Deployed" | "Undeployable" | "Deleted" | "Archived" | "Requestable" | "Pending",

    /**
     * Optionally restrict asset results to this status label ID
     */
    status_id       ?:       number
}


/**
 * Creates a new asset
 */
export interface Create{

    /**
     * The asset tag of the asset. If auto-incrementing is enabled in the settings, this is not required and will be generated.
     */
    asset_tag      :   string,

    /**
     * The id of the related status label
     */
    status_id      :   number,

    /**
     * The id of the related asset model
     */
    model_id       :   number,

    /**
     * Asset name
     */
    name           ?:   string
}

/**
 * Get the details of a specific asset
 */
export interface Get{

    /**
     * The id (not the asset tag) of the asset you'd like to query
     */
    id      :   number,
}


/**
 * Get the details of a specific asset by asset tag
 */
export interface GetByAssetTag{

    /**
     * The asset_tag (not the ID) of the asset you'd like to query
     */
    asset_tag   : string,
}


/**
 * Get the details of a specific asset by serial number
 */
export interface GetBySerialNumber{

    /**
     * The serial number (not the ID) of the asset you'd like to query
     */
    serial     :    number,
}

// /**
//  * Updates a specific asset
//  */
// export interface Update{

//     /**
//      * The id of the asset you'd like to query
//      */
//     id          :    number
// }


/**
 * Updates a specific asset
 */
export interface Update{
    /**
     * The id of the asset you'd like to query
     */
    id              :  number,

    /**
     * Unique asset tag of the asset
     */
    asset_tag       ?:  string,

    /**
     * Asset notes
     */
    notes           ?:  string,

    /**
     * The id of the corresponding status label
     */
    status_id       ?:  number,

    /**
     * The id of the associated asset model id
     */
    model_id        ?:  number,

    /**
     * Date the asset was last checked out
     */
    last_checkout   ?:  string,

    /**
     * The id of the user the asset is currently checked out to
     */
    assigned_to     ?:  number,

    /**
     * The id of an associated company id
     */
    company_id      ?:  number,

    /**
     * Serial number of the asset
     */
    serial          ?:  string,

    /**
     * Order number for the asset
     */
    order_number    ?:  string,

    /**
     * Number of months for the asset warranty
     */
    warranty_months ?:  number,

    /**
     * Purchase cost of the asset, without a currency symbol
     */
    purchase_cost   ?:  number,

    /**
     * Date of asset purchase
     */
    purchase_date   ?:  string,

    /**
     * Whether or not the asset can be requested by users with the permission to request assets
     */
    requestable     ?:  boolean,

    /**
     * Whether or not the asset is archived. Archived assets cannot be checked out and do not show up in the deployable asset screens
     */
    archived        ?:  boolean,

    /**
     * The id that corresponds to the location where the asset is usually located when not checked out
     */
    rtd_location_id ?:  number,

    /**
     * Asset name
     */
    name            ?:  string,
}


/**
 * Deletes a specific asset
 */

export interface Delete{

    /**
     * The id of the asset to delete
     */
    id : number
}

/**
 * Checkout an asset
 */

 export interface Checkout{

    /**
     * Assset id
     */
    id : number,

    /**
     * The assigned user field is required when none of assigned asset / assigned location are present.
     */
    assigned_user : number,

    /**
     * The assigned asset field is required when none of assigned user / assigned location are present.
     */
    assigned_asset : number,

    /**
     * The assigned location field is required when none of assigned user / assigned asset are present.
     */
    checkout_to_type : number
}

export interface Checkin{

    /**
     * Asset id
     */
    id : number,
}

/**
 * Mark an asset audited
 */
export interface Audit{

    /**
     * The asset tag of the asset you wish to audit
     */
    asset_tag   :  number,
    location    ?: number
}