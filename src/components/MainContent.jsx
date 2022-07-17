import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Page() {
    return (
        <main>
            <h1 className="main--h1">Kirill Romaniukk</h1>
            <h3 className="main--h3">FullStack developer</h3>
            <p className="main--small">kirillromaniuk.website</p    >
            <button className="main--btn">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Email</p>
            </button>
        </main>
    )
}