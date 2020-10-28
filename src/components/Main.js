import React from 'react';
import dailyQuote from './imgs/dailyQuote.PNG';
import searchQuote from './imgs/searchQuote.PNG';
import randomQuote from './imgs/randomQuote.PNG';
import chloe from './imgs/Chloe.png';
import download from './imgs/download.svg';

const Main = () => {
    const screenshots = [dailyQuote, searchQuote, randomQuote]
    return (
        <div className="main">
            <div className="row">
                <div className="half-col">
                <div className="intro-container">
                    <h4 id="intro-header">
                        An Inspirational Quote Genrator
                    </h4>
                    <p className="intro">
                        This app is meant to inspire others and motivate them to become what they want to be. Sometimes you need to read some wisdom from generations past to really see the whole picture. Hopefully these quotes can help inspire someone to achieve their dreams. Through the social media sharing options on this app users can help spread the motivation to aspire to be more to their friends and extended network.
                    </p>
                </div>
                    
                </div>
            </div>
            <div className="row">
            <h2>Download for iOS</h2>
                <a href="https://apps.apple.com/us/app/blood-pressure-numbers/id1534661419">
                    <img id="download" src={download} alt="download on the app store"/>
                </a>
            </div>
            <hr />
            <div className="row">
                <h3 id="screenshot-title">The App</h3>
                {screenshots.map(img => <img className="screenshot" src={img} alt="app screen shot" /> )}
            </div>
            <hr />
            <div className="row">
                
                <div className="bio-card">
                    <h3 id="chloe-title">The Designer</h3>
                    <img src={chloe} alt="Chloe in her pageant gown." id="chloe-pagaent" />
                    <p id="chloe-bio">
                    Chloe Simone Hiller is an energetic and hard working young lady that is making quite a positive impact in the world. #GirlsDreamBelieveandAchieve is a movement that she created to set the tone for how self-confidence and peer support can empower young girls to think, grow and be powerful. Chloe's future plans include attending a four-year university to obtain a bachelor's degree in Broadcast Journalism. She is the studio floor director for her high school's daily news network and podcasts.  An aspiring supermodel that is already creating a buzz on the runway as a five feet ten inch teen phenomenon, Chloe has appeared in numerous model magazines and fashion shows across the Valley of the Sun; she is currently a model ambassador for Arizona locally loved business Glam Squad Couture. Chloe is also a tap dancer, competitive volleyball player and has a keen eye for art and photography. Check out Chloe's website at <a id="website-link" rel="noopener noreferrer" target="_blank" href="https://www.teamchloe.com/">teamchloe.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;