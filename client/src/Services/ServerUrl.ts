const server_url = process.env.REACT_APP_API_URL

const prefix={
    auth            :   'auth/',
    user            :   'users/',
    hardware        :   'hardware/',
    companies       :   'companies/',
    locations       :   'locations/',
    accessories     :   'accessories/',
    consumables     :   'consumables/',
    components      :   'components/',
    statuslabels    :   'statuslabels/',
    models          :   'models/',
    licenses        :   'licenses/',
    categories      :   'categories/',
    manufacturers   :   'manufacturers/',
    fields          :   'fields/',
    fieldsets       :   'fieldsets/',
    maintenances    :   'maintenances/',
    reports        :   'reports/',
}

const Url = {
    //auth
    login     :   server_url+prefix.auth+'login',
    logout    :   server_url+prefix.auth+'logout',
    refresh   :   server_url+prefix.auth+'refresh',

    //user
    user        :   server_url+prefix.user,
    hardware    :   server_url+prefix.hardware,
    companies   :   server_url+prefix.companies,
    locations   :   server_url+prefix.locations,
    accessories :   server_url+prefix.accessories,
    consumables :   server_url+prefix.consumables,
    components  :   server_url+prefix.components,
    statuslabels:   server_url+prefix.statuslabels,
    models      :   server_url+prefix.models,
    licenses    :   server_url+prefix.licenses,
    categories  :   server_url+prefix.categories,
    manufacturers:  server_url+prefix.manufacturers,
    fields      :   server_url+prefix.fields,
    fieldsets   :   server_url+prefix.fieldsets,
    maintenances:   server_url+prefix.maintenances,
    reports    :   server_url+prefix.reports
}

export default Url;
