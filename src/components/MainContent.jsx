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
            <section className="about">
                <h2>About</h2>
                <p>
                    I am a fullstack developer width a particular interest in making things
                    simple and automating daily tasks. I try to keep up with security and 
                    best practices, and am always looking for new things to learn.
                </p>
            </section>
            <section className="interests">
                <h2>Interests</h2>
                <p>
                    Anime fan, graduate of St. Petersburg University of Anime Arts. 
                    Reader. Internet fanatic. English learner. Coffee fanatic.
                </p>
            </section>
        </main>
    )
}