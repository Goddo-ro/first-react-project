import React from 'react';
import avatar from ".././images/avatar.png";


export default function Header() {
    return (
        <header>
            <img className="avatar" src={process.env.PUBLIC_URL + avatar} alt="me"/>
        </header>
    )
}