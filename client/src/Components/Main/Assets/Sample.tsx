import React from 'react';
import {withRouter} from 'react-router-dom';


const withRouterInnerRef = (WrappedComponent:any) => {

    const InnerComponentWithRef = (props:any) => {
        const {forwardRef, ...rest} = props;
        return <WrappedComponent {...rest} ref={forwardRef} />;
    }

    const ComponentWithRef = withRouter(InnerComponentWithRef);

    return React.forwardRef((props:any,ref:any)=>{
        return <ComponentWithRef {...props} forwardRef={ref} />;
    })

}



const Samples = (props:any)=>{

    console.log(props);

    React.useImperativeHandle(props.refs,()=>({
        async getAlert(){
            return 'sds';
        }
    }));

    return "";
}

export default withRouterInnerRef(Samples);