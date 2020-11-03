import React from 'react';

function Wrapper({children}){
    const style = {
        border: '2px solid white',
        borderRadius: '20px',
        padding: "16px",
    }
    return(
        <div style = {style}>
            {children}
        </div>
    )
}
export default Wrapper;