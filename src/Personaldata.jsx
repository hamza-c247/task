import React from 'react'

function Personaldata(props) {
    return (
        <div className='data'>
            <h5>{props.title}</h5>
            <p>{props.body}</p>
            
        </div>
    )
}

export default Personaldata
