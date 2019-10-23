import React from 'react';
import './Welcome.css';
import GEEKGIF from '../../image/developer-dribbble.gif';

function Welcome() {
    return (
        <div className="welcome">
            <div className="textDiv">
                <div className="welcomeText">Anthony SBR</div>
                <div className="welcomeTextSmall">Full Stack Web developer <br/>with passion for technology.</div>
                <div className="welcomeTextSmall">"Let's build something <b>Legendary</b>"</div>
            </div>
            <div className="imageBottom">
                <img className="img-fluid" src={GEEKGIF} alt="proggif"/>
            </div>
        </div>
    );
}

export default Welcome;