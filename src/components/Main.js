import React, { Component } from 'react';
import dailyQuote from './imgs/dailyQuote.PNG';
import searchQuote from './imgs/searchQuote.PNG';
import randomQuote from './imgs/randomQuote.PNG';

const Main = (props) => {
    const screenshots = [dailyQuote, searchQuote, randomQuote]
    return (
        <div className="main">
            <div className="row">
                <div className="half-col">
                    <p className="intro">
                        <h4>
                            An Inspirational Quote Genrator
                        </h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit provident blanditiis obcaecati veritatis, ducimus sit tenetur culpa maxime incidunt pariatur nostrum, sed voluptas enim natus possimus consectetur rem, labore totam!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit provident blanditiis obcaecati veritatis, ducimus sit tenetur culpa maxime incidunt pariatur nostrum, sed voluptas enim natus possimus consectetur rem, labore totam!
                    </p>
                </div>
            </div>
            <div className="row">
                <h3 id="screenshot-title">The App</h3>
                {screenshots.map(img => <img className="screenshot" src={img} alt="app screen shot" /> )}
            </div>
        </div>
    );
}

export default Main;