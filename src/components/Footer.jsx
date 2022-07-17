import React from "react";
import TwitterIcon from "../images/footer_icons/TwitterIcon.png";
import FacebookIcon from "../images/footer_icons/FacebookIcon.png";
import InstagramIcon from "../images/footer_icons/InstagramIcon.png";
import LinkedinIcon from "../images/footer_icons/LinkedinIcon.png"
import GitHubIcon from "../images/footer_icons/GitHubIcon.png";;


const path = process.env.PUBLIC_URL;


export default function Footer() {
    return (
        <footer>
            <img src={path + TwitterIcon} alt="Twitter" />
            <img src={path + FacebookIcon} alt="Facebook" />
            <img src={path + InstagramIcon} alt="Instagram" />
            <img src={path + LinkedinIcon} alt="Linkedin" />
            <img src={path + GitHubIcon} alt="GitHub" />
        </footer>
    )
}