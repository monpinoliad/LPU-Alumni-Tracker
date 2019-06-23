import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contents from './Contents';

class Feed extends Component {
    render() {
        return (
            <div className="Feed">
                <section className="sidebar">
                    <a href="/">
                        <div className="sidebar__profile">
                            <div className="sidebar__profile--image"></div>
                            <div className="sidebar__profile--information">
                                <h1>Sholomon Pinoliad</h1>
                                <h2>Web Developer</h2>
                            </div>
                        </div>
                    </a>
                    <ul className="sidebar__navigation">
                        <a href="/feed">
                            <li className="active">
                                <i className="fas fa-home"></i> Newsfeed
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <i className="fas fa-user-circle"></i> Profile
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <i className="fas fa-sticky-note"></i> Messages
                            </li>
                        </a>
                    </ul>

                    <ul className="sidebar__bottom-navigation">
                        <a href="/">
                            <li>
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <i className="fas fa-cog"></i> Settings
                            </li>
                        </a>
                    </ul>
                </section>
                <section className="wrapper">
                    <div className="wrapper__container">
                        <div className="wrapper__container--share">
                            <div
                                className="post-area"
                                contenteditable="true"
                                placeholder="Share your story"
                            >
                            </div>
                            <button className="post-btn">Share</button>
                            <a href="/">
                                <i className="fas fa-camera-retro"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <Contents />
                <section className="infobar">
                    <h1>Discover</h1>
                    <ul className="infobar__discover">
                        <a href="/">
                            <li>
                                <h1>#LPUAlumni2019</h1>
                                <h2>200 posts about this</h2>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <h1>#Alumni</h1>
                                <h2>50 posts about this</h2>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <h1>#Laban</h1>
                                <h2>200 posts about this</h2>
                            </li>
                        </a>
                    </ul>
                    <div className="infobar__about">
                        <div className="infobar__about--copy">
                            &copy; Copyright 2019
                        </div>
                        <a href="/">
                            About
                        </a>
                        <a href="/">
                            Terms
                        </a>
                        <a href="/">
                            Cookies
                        </a>
                        <a href="/">
                            Privacy Policy
                        </a>
                        <a href="/">
                            Contact Us
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Feed;

if (document.getElementById('feed')) {
    ReactDOM.render(<Feed />, document.getElementById('feed'));
}
