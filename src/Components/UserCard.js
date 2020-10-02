import React from 'react'

export default function UserCard(props) {
    return (
        <>
            <div className="user-card">
                <div className="user-card-content-wrap">
                    <div className="avatar-wrap">
                        <img src={props.imageUrl} alt="user avatar"></img>
                    </div>
                    <div className="user-card-text-wrap">
                        <h3>{props.name}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
