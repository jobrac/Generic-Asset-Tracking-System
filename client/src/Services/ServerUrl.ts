const server_url = 'http://192.168.0.193:8000/api/';

const prefix={
    auth : 'auth/',
    user : 'users/',
}

const Url = {
    //auth
    'login'     :   server_url+prefix.auth+'login',
    'logout'    :   server_url+prefix.auth+'logout',
    'refresh'   :   server_url+prefix.auth+'refresh',
    'check'     :   server_url+prefix.auth+'check',

    //user
    'user'       : server_url+prefix.user,
}

export default Url;
