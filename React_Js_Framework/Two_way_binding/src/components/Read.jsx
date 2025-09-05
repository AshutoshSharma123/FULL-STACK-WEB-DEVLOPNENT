import React from 'react'
import { useState } from 'react'

const Read = (props) => {



    const users = props.users
    const renderUser = users.map((user, index) => {
        return <p key={index}>{user.name}</p>
    })
    return (
        <div>
            <ol>{renderUser}</ol>
        </div>
    )
}

export default Read