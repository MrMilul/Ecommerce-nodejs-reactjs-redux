import React from 'react'

export default function LoadingBox() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <strong>Loading...</strong>
            <div className="spinner-border ml-5" style={{width:"5rem", height:"5rem"}}role="status" aria-hidden="true"></div>
        </div>
    )
}
