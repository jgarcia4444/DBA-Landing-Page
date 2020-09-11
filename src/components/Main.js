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
                <img id="download" src={download} alt="download on the app store"/>
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
                    <div className="left-img">
                        <img src={chloe} alt="Chloe in her pageant gown." id="chloe-pagaent" />
                    </div>
                <div className="right-bio">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit provident blanditiis obcaecati veritatis, ducimus sit tenetur culpa maxime incidunt pariatur nostrum, sed voluptas enim natus possimus consectetur rem, labore totam!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Check out Chloe's personal site <a id="website-link" rel="noopener noreferrer" target="_blank" href="https://www.teamchloe.com/">teamchloe.com</a>
                    </p>
                </div>
            </div>
                
            </div>
        </div>
    );
}

export default Main;