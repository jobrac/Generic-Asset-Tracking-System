
/**
 * List users
 */
export interface Show{
    /**
     * String to search on (optional)
     */
    search          ?:  string,
    /**
     * Number of records to return (optional)
     */
    limit           ?:  number,
    /**
     * Offset to use when retrieving results (useful in pagination) (optional)
     */
    offset          ?:  number,
    /**
     * Field to order by (optional)
     */
    sort            ?:  string,
    /**
     * Sort order (asc or desc) (optional)
     */
    order           ?:  string,
    /**
     * Pass a group ID to return only users within that group
     */
    group_id        ?:  number,
    /**
     * Pass a company ID to return only users within that company
     */
    company_id      ?:  number,
    /**
     * Pass a department ID to return only users within that department
     */
    department_id   ?:  number,
    /**
     * Pass true to return a list of deleted users
     */
    deleted         ?:  number
}


/**
 * View user details
 */
export interface Get{
    /**
     * User id
     */
    id              :   number
}

/**
 * Partially update a user, passing only the fields you want to modify
 */
export interface Patch{
    /**
     * User id
     */
    id                      :   number,
    first_name              ?:  string,
    last_name               ?:  string,
    username                ?:  string,
    password                ?:  string,
    /**
     * Required if password field is passed, and it must match the password field.
     */
    password_confirmation   ?:  string,
    email                   ?:  string,
    permissions             ?:  string,
    activated               ?:  string,
    phone                   ?:  string,
    jobtitle                ?:  string,
    manager_id              ?:  number,
    employee_num            ?:  string,
    notes                   ?:  string,
    company_id              ?:  number,
    two_factor_enrolled     ?:  boolean,
    two_factor_optin        ?:  boolean,
    department_id           ?:  number,
}


/**
 * Delete a use
 */
export interface Delete{
    /**
     * User ID
     */
    id    : number
}


/**
 * Update the user
 */
export interface Update{
    /**
     * User id
     */
    id                      :   number,
    first_name              ?:  string,
    last_name               ?:  string,
    username                ?:  string,
    password                ?:  string,
    /**
     * Required if password field is passed, and it must match the password field.
     */
    password_confirmation   ?:  string,
    email                   ?:  string,
    permissions             ?:  string,
    activated               ?:  string,
    phone                   ?:  string,
    jobtitle                ?:  string,
    manager_id              ?:  number,
    employee_num            ?:  string,
    notes                   ?:  string,
    company_id              ?:  number,
    two_factor_enrolled     ?:  boolean,
    two_factor_optin        ?:  boolean,
    department_id           ?:  number,
}

/**
 * Get a list of assets checked out to the user
 */
export interface Asset{
    /**
     * User id
     */
    id  : number
}

/**
 * Create new user
 */
export interface Create{
    first_name              :  string,
    last_name               :  string,
    username                :  string,
    password                :  string,
    /**
     * Required if password field is passed, and it must match the password field.
     */
    password_confirmation   :  string,
    email                   ?:  string,
    permissions             ?:  string,
    activated               ?:  string,
    phone                   ?:  string,
    jobtitle                ?:  string,
    manager_id              ?:  number,
    employee_num            ?:  string,
    notes                   ?:  string,
    company_id              ?:  number,
    two_factor_enrolled     ?:  boolean,
    two_factor_optin        ?:  boolean,
    department_id           ?:  number,
}

/**
 * Get a list of assets checked out to the user
 */

 export interface Accessories{
    /**
     * User id
     */
    id     : number
 }