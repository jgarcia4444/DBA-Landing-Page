import React from 'react';
// import dailyQuote from './imgs/dailyQuote.png'
import chloe from './imgs/Chloe.jpg';
import download from './imgs/download.svg';
import favoritesView from './imgs/favoritesView.png';
import homeScreen from './imgs/homeScreen.png';
import searchQuote from './imgs/searchQuote.png';
// Test
const Main = () => {
    const screenshots = [favoritesView, homeScreen , searchQuote]
    return (
        <div className="main">
            <div className="row">
                <div className="half-col">
                <div className="intro-container">
                    <h4 id="intro-header">
                        An Inspirational Quote Generator
                    </h4>
                    <p className="intro">
                    This app was created to inspire users to dream big and believe in themselves so they can achieve their goals. Self-confidence and peer support can empower people to think, grow and be powerful and through the social media sharing options on this app users can help spread the motivation - get empowered and empower others!
                    </p>
                </div>
                    
                </div>
            </div>
            <div className="row">
            <h2>Download for iOS</h2>
                <a href="https://apps.apple.com/us/app/dream-believe-achieve/id1531356264">
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
                    Chloe Simone Hiller is an energetic and hard-working young lady that is making quite a positive impact in the world. She began competing in pageants as a pre-teen and created the #GirlsDreamBelieveandAchieve movement as a result of overcoming poor self-esteem in her middle school years. As a titleholder, Chloe has won several local and state titles and uses her pageant platform to empower others by volunteering in the community and maintaining a strong social media presence. She is currently the producer for her high school's daily news network program and plans to attend a four-year university to obtain a bachelor's degree in Broadcast Journalism. Chloe is also an aspiring model who has appeared in numerous model magazines and fashion shows. Check out Chloe's website at <a id="website-link" rel="noopener noreferrer" target="_blank" href="https://www.teamchloe.com/">teamchloe.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;