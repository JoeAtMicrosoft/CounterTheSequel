import React from 'react'

export default function Chat(props){
    if (props.sender == "user")
        return(
            <div className="user">{props.message}</div>
        )
    else 
        return(
            <div className="agent">{props.message}</div>
        )

}