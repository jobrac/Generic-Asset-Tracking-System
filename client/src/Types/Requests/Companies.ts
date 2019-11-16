export interface Show{
    search ?: string
}

export interface Create{
    name    :   string 
}

export interface Get{
    id      :   number
}

export interface Update{
    name    :   string,
    id      :   number
}

export interface Delete{
    id      :   number
}