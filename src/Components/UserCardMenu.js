import React from 'react'
import UserCard from './UserCard'
import photo1 from '../images/avatar-woman.png'
import photo2 from '../images/avatar-man.png'

export default function UserCardMenu() {
    return (
        <>
            <div className="user-card-wrap">
                <UserCard
                    imageUrl={photo1}
                    name="Lorem ipsum dolor sit amet"
                    text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nunc consequat quam sem, 
                id facilisis odio tempus eu."/>
                <UserCard
                    imageUrl={photo2}
                    name="Lorem ipsum dolor sit amet"
                    text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nunc consequat quam sem, 
                id facilisis odio tempus eu."/>
            </div>
        </>
    )
}