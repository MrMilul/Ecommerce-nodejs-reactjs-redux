import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.status} alert-dismissible fade show`} role="alert">
       {props.status ==  "danger" ? <strong>Holy guacamole!</strong>  : ''}  {props.message}
        <div>{props.children}</div>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    )
}
