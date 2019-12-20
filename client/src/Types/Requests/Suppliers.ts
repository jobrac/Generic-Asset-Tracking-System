export interface Show{
    limit   ?:  number,
    offset  ?:  number,
    search  ?:  string,
    sort    ?:  'id' | 'name' | 'address' | 'phone' | 'contact' | 'fax' | 'email' | 'image' | 'assets_count' | 'licenses_count' | 'accessories_count',
    order   ?:  "asc"   | "desc"
}

export interface Create{
    name        ?:  string,
    address     ?:  string,
    address2    ?:  string
    city        ?:  string,
    state       ?:  string,
    country     ?:  string,
    zip         ?:  string,
    phone       ?:  string,
    fax         ?:  string,
    email       ?:  string,
    contact     ?:  string,
    url         ?:  string
    notes       ?:  string,
}

export interface Get{
     id     :   number
}

export interface Update{
    id              :   number,
    name        ?:  string,
    address     ?:  string,
    address2    ?:  string
    city        ?:  string,
    state       ?:  string,
    country     ?:  string,
    zip         ?:  string,
    phone       ?:  string,
    fax         ?:  string,
    email       ?:  string,
    contact     ?:  string,
    url         ?:  string
    notes       ?:  string,
}

export interface Delete{
    id              :   number,
}