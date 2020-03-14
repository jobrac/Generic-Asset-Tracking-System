// import {StaticMethods, Format} from './StaticMethods';
// import Token from "../Token";
// import Url from '../ServerUrl';
// import axios from 'axios';
// import {Get,Show,Create,Update, Delete,GetByAssetTag,GetBySerialNumber,Checkout,Checkin,Audit} from 'Types/Requests/Assets';

// class Assets extends StaticMethods{

//     static async show(data?:Show){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "GET",
//             url     :   Url.hardware,
//             headers :   header,
//             params  :   data,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.show,data);
//         });

//         return format;
//     }

//     static async get(data:Get){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "GET",
//             url     :   Url.hardware+data.id,
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.get,data);
//         });

//         return format;
//     }

//     static async update(data:Update){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "PUT",
//             url     :   Url.hardware+data.id,
//             headers :   header,
//             params    :   data
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.update,data);
//         });

//         return format;
//     }

//     static async patch(data:Update){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "PATCH",
//             url     :   Url.hardware+data.id,
//             headers :   header,
//             params    :   data
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.patch,data);
//         });

//         return format;
//     }

//     static async add(data:Create){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware,
//             headers :   header,
//             params    :   data
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.add,data);
//         });

//         return format;
//     }

//     static async asset(data:GetByAssetTag){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "GET",
//             url     :   Url.hardware+'bytag/'+data.asset_tag,
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.asset,data);
//         });

//         return format;
//     }

//     static async serial(data:GetBySerialNumber){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "GET",
//             url     :   Url.hardware+'byserial/'+data.serial,
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.serial,data);
//         });
        
//         return format;
//     }

//     static async delete(data:[]){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "delete",
//             url     :   Url.hardware+'batchdelete',
//             headers :   header,
//             params  :   {
//                 id : data
//             }
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.delete,data);
//         });

//         return format;
//     }

//     static async checkout(data:Checkout){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware+data.id+'/checkout',
//             headers :   header,
//             params    :   data
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.checkout,data);
//         });

//         return format;
//     }

//     static async checkin(data:Checkin){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware+data.id+'/checkin',
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.checkin,data);
//         });

//         return format;
//     }

//     static async audit(data:Audit){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware+'audit',
//             headers :   header,
//             params    :   data
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.audit,data);
//         });

//         return format;
//     }

//     static async auditDue(){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware+'audit/due',
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.auditDue);
//         });

//         return format;
//     }

//     static async auditOverDue(){
//         let format:Format = {
//             network_error : false,
//             status        : 0,
//             data          : '',
//         }

//         const header = super.header(Token.get());    

//         await axios({
//             method  :   "POST",
//             url     :   Url.hardware+'audit/overdue',
//             headers :   header,
//         }).then( response => {
//             format.status = response.status;
//             format.data = response.data;
//         }).catch( async (error) =>{
//             format = await this.Error(error,this.auditOverDue);
//         });

//         return format;
//     }






//     /**
//      * Callback for token error
//      * 
//      */
//     public static async Error(error:any,callback:Function,params?:any){

//         let format:Format = {
//             network_error : false,
//             status : 0,
//             data : '',
//         }

//         if(!error.response){
//             format.network_error = true;
//             return format;
//         }

//         if(error.response.status === 401){
//             if(!Token.exist()){
//                 return format;
//             }

//             let a = await this.refresh();
            
//             if(a.network_error){
//                 format.network_error = true;
//                 return format;
//             }

//             if(a.status === 200){                
//                 Token.save(a.data.token);

//                 if(params === null ){
//                     console.log('called without parameter');
//                     return callback();
//                 }
//                 console.log('called with parameter of '+params);
//                 return callback(params);
//             }
//         }

//         return {
//             network_error : false,
//             status        : error.response.status,
//             data          : error.response.data,
//         }
//     }

// }

// export default Assets;


import React from 'react';
import WithRouterInnerRef from '../WithRouterInnerRef'
import {request, Format} from './StaticMethods';
import Token from "../Token";
import Url from '../ServerUrl';
import {useSnackbar} from 'notistack';
// import axios from 'axios';
import {Get,Show,Create,Update, Delete,GetByAssetTag,GetBySerialNumber,Checkout,Checkin,Audit} from 'Types/Requests/Assets';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';


const Assets = (props:any):any => {
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = (key:any) => (
        <Button variant="text" color="inherit" onClick={ () => closeSnackbar(key)}>
            <Close />
        </Button>
    );
    
    const processData = (data:Format) =>{
        if(data.network_error){
            enqueueSnackbar('Something went wrong, please try again later!!!',{
                variant:"error",
                anchorOrigin:{
                    vertical:'top', 
                    horizontal:'right'
                },
                action:action
            });
        }else{
            return data;
        }
    }

    React.useImperativeHandle(props.request,()=>({

        show : async (data?:Show) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware,
                method  : 'GET',
                params  : true,
                data    : data,
            })
            return processData(format);
        },

        get : async (data:Get) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+data.id,
                method  : 'GET',
                params  : false,
            })
            return processData(format);
        },

        update : async (data:Update) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+data.id,
                method  : 'PUT',
                params  : true,
                data    : data,
            })
            return processData(format);
        },

        patch : async (data:Update) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+data.id,
                method  : 'PATCH',
                params  : true,
                data    : data,
            })
            return processData(format);
        },

        add : async (data:Create) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware,
                method  : 'POST',
                params  : true,
                data    : data,
            })
            return processData(format);
        },
        
        asset : async (data:GetByAssetTag) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'bytag/'+data.asset_tag,
                method  : 'GET',
                params  : false,
            })
            return processData(format);
        },

        serial : async (data:GetBySerialNumber) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'byserial/'+data.serial,
                method  : 'GET',
                params  : false,
            })
            return processData(format);
        },

        delete : async (data:[]) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'batchdelete',
                method  : 'DELETE',
                params  : true,
                data    : {
                    id  : data,
                }
            })
            return processData(format);
        },

        checkout : async (data:Checkout) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+data.id+'/checkout',
                method  : 'POST',
                params  : true,
                data    : data
            })
            return processData(format);
        },

        checkin : async (data:Checkin) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+data.id+'/checkin',
                method  : 'POST',
                params  : false,
            })
            return processData(format);
        },

        audit : async (data:Audit) => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'audit',
                method  : 'POST',
                params  : true,
                data    : data
            })
            return processData(format);
        },

        auditDue : async () => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'audit/due',
                method  : 'POST',
                params  : false,
            })
            return processData(format);
        },

        auditOverDue : async () => {
            
            const token = Token.get();
            let format:Format = {
                network_error : false,
                status        : 0,
                data          : '',
            }   
            if(token === '' || token === null){
                props.history.push('/login');
                return;
            }
            format = await request({
                url     : Url.hardware+'audit/overdue',
                method  : 'POST',
                params  : false,
            })
            return processData(format);
        },
    
    }));

    

    return null;
}

export default WithRouterInnerRef(Assets);