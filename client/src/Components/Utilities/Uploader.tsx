import React from 'react';
import { Button, IconButton, LinearProgress } from '@material-ui/core';
import "./Uploader.scss";
import { Delete } from '@material-ui/icons';
import tus from 'tus-js-client'
import axios from 'axios';


interface state{
    url : string,
    setUrl(a:string) : void
}

interface Uploader {
    url     :   string,
    accept  :   string,
    state   :   state,
    /**
     * By bytes
     */
    maxSize :   number,
}

type error_type = "drag" | "upload";

let newFileName = '';

const Uploader = (props:Uploader) => {

    const files:any = [];
    const input = React.useRef(null);
    const dragDiv = React.useRef(null);
    const [file, setFile] = React.useState(files);
    const [status,setStatus] = React.useState({
        uploading   : false,
        percent     : 0,
    });
    const [error,setError] = React.useState({
        type    : "",
        message : "",   
    });

    const drapAndDrag = (event:React.DragEvent<HTMLDivElement>) => {
        setError({type:"",message:""});
        event.preventDefault();
        event.persist();

        const data = event.dataTransfer.files;


        // console.log(data);

        switch(event.type){
            case "dragover" :
                dragDiv.current.classList.add("active");
                return;
            case "drop" :
                dragDiv.current.classList.remove("active");
                processFileList(data);
                return;

            default:
                dragDiv.current.classList.remove("active");
                return;                
        }

    }

    const inputButton = (event:any) => {
        event.persist();
        // console.log(event.target.files);
        processFileList(event.target.files);
    };


    const processFileList = (data:any) => {
        

        //check multiple files
        if(data.length > 1 ){   
            setError({type:"drag",message:"Please drop only single file!!"});
            return;
        }

        //check file type
        if(props.accept.search(data[0].name.slice((data[0].name.lastIndexOf(".") - 1 >>> 0) + 1)) < 0){
            setError({type:"drag",message:"File type is not allowed"});
            return;
        }

        //check file size
        if(data[0].size > props.maxSize ){
            setError({type:"drag",message:"File size is too large !!"});
            return;
        }
        setFile(data);

        newFileName = generateRandomFileName(data[0].name);
        uploadToServer(data[0]);
    }

    const uploadToServer = (file:any) => {
        var upload:any = new tus.Upload(file, {
            endpoint: "/api/file/",
            retryDelays: [0, 3000, 5000, 10000, 20000],
            resume : false,
            chunkSize : 1000000,
            metadata: {
                filename: newFileName,
                filetype: file.type
            },
            onError: (error) => {
                setError({
                    type    : "upload",
                    message : "Something went wrong, please try again!"
                });

                setStatus({
                    ...status,
                    uploading : false,
                })
            },
            onProgress: (bytesUploaded, bytesTotal) => {
                setStatus({
                    uploading   :   true,
                    percent     :   parseInt((bytesUploaded / bytesTotal * 100).toFixed(2),10)
                })
            },
            onSuccess: () => {
                props.state.setUrl(newFileName);
                setStatus({
                    ...status,
                    uploading:false
                })
            }
        })
     
        // Start the upload
        upload.start();
    }

    const byteCounter = (a:number) => {
        let num = a/1000000;

        return num.toFixed(2) + " MB";
    }

    const remove = async () => {

        // console.log(newFileName);
        setFile([]);
        setStatus({
            uploading   : false,
            percent     : 0
        })
        setError({
            type : "",
            message : "",
        })
        props.state.setUrl('');
        await axios({
            url:'/api/file/'+newFileName,
            method : "delete",
            headers :{
                'Content-Type' : 'application/json',
                'Accept'       :  'application/json',
            }
        })
    }

    const generateRandomFileName = (name:string) =>{
        //get file extension
        let extension = name.slice((name.lastIndexOf(".") - 1 >>> 0) + 1);

        //generate random string
        let filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+Math.random().toString(36).substring(2, 15);

        //concatenate random string, and file extension and return;
        return filename+extension;
    } 


    return(
        <div className="Uploader">
            <div className="holder" hidden={file.length !== 0}  ref={dragDiv} onDragEnter={drapAndDrag} onDragLeave={drapAndDrag} onDragOver={drapAndDrag} onDrop={drapAndDrag} >
                <Button onClick={()=>input.current.click()} size="small" variant="contained">
                    BROWSE...
                </Button>
                <input type="file" ref={input} accept={props.accept} onChange={inputButton} name="file" />
                <div className="dropNDrag">Or drop files here</div>
                <div className="error-file" hidden={error.type !== "drag"}>{error.message}</div>
            </div>
            <div className="content-list" hidden={file.length === 0}>
               <div className="file-holder" >
                   <div className="file-details">
                        <div className="file-title" title={file.length === 1 ? file[0].name : ""}>{file.length === 1 ? file[0].name : ""}</div>   
                        <div className="file-size">{file.length === 1 ? byteCounter(file[0].size) : ""}</div>
                        <div className="file-status">
                            
                            <LinearProgress 
                                hidden={!status.uploading}
                                variant="determinate"
                                value={status.percent}
                            />
                            
                            {/* <div hidden={ status.percent !== 100 && status.uploading || error.type ===  "upload" } className="success">
                                File successfully Uploaded
                            </div> */}

                            <div hidden={error.type !==  "upload"} className="error">
                                {error.message}
                            </div>
                            
                        </div>
                    </div>
                    <div className="file-action">
                        <IconButton size="small" onClick={()=>remove()}>
                            <Delete />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uploader;