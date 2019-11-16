
/**
 * List locations
 */
export interface Show{
    
    /**
     * Number of results to return
     */
    limit   ?:   number,

    /**
     * Offset to use when retrieving results (useful in pagination)
     */
    offset  ?:   number,

    /**
     * Search string
     */
    search  ?:   string,

    /**
     * Field to order by
     */
    sort    ?:   "id"  |  "name"  |   "address"  |   "address2"  |   "city"  |   "state"  |  "country"   |   "zip"  |    "assigned_assets_count"     |   "assets_count"  |   "users_count"   |   "currency"  |   "created_at"    |   "updated_at",
    
    /**
     * Sort order (asc or desc)
     */
    order   ?:   "asc"   |   "desc"
}


/**
 * Create a new location
 */
export interface Create{
    name    :   string,
    address ?:  string,
    address2?:  string,
    state   ?:  string,
    country ?:  string,
    zip     ?:  string,
}

/**
 * Get location details by id
 */

export interface Get{
    id  : number
}

/**
 * Update location
 */

 export interface Update{
     id         :   number,
     name       ?:  string,
     address    ?:  string,
     address2   ?:  string,
     state      ?:  string,
     country    ?:  string
 }

 /**
  * Deletes a location
  */

  export interface Delete{
    id      : number,
  }