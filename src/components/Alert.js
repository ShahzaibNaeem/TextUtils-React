import React from 'react'

export default function Alert(props) {         //For Capitalizing first letter Function
    const Capitalize=(strc)=>{
        let b=strc.toLowerCase();
        return  b.charAt(0).toUpperCase()+b.slice(1);
    }
  return (
        <div style={{height:'50px'}}>
       {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
            <strong>{Capitalize(props.alert.head)}</strong> {props.alert.message}
        </div>}               
        </div>
  )
}
