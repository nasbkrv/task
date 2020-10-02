import React from 'react'
import globeIcon from '../images/icons-globe.png'
import htmlIcon from '../images/icons-html.png'
import jsIcon from '../images/icons-js.png'
import cssIcon from '../images/icons-css.png'
import wordpressIcon from '../images/icons-wordpress.png'

export default function IconsMenu() {
    return (
        <>
            <div className="icons-wrap">
                    <img src={globeIcon} alt="icon"></img>
                    <img src={htmlIcon} alt="icon"></img>
                    <img src={jsIcon} alt="icon"></img>
                    <img src={cssIcon} alt="icon"></img>
                    <img src={wordpressIcon} alt="icon"></img>
            </div>
        </>
    )
}