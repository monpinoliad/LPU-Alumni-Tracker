import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <div className="Contents">
                <section className="wrapper">
                    <div className="wrapper__container">
                        <h1>Newsfeed</h1>
                        <div className="wrapper__container--post">
                            <div className="wrapper__container--post__profile">
                                <div className="wrapper__container--post__profile--image"></div>
                                <div className="wrapper__container--post__profile--information">
                                    <h1>Sholomon Pinoliad</h1>
                                    <h2>Full-stack Web Developer</h2>
                                    <span>24 mins</span>
                                </div>
                            </div>
                            <div className="options">
                                <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="wrapper__container--post__content">
                                <p>
                                    It's not a common thing to see women in tech, and have the desire to build a community in Indonesia. Shout-out to our newest addition to #Google #Developer Group Cloud Jakarta chapter, Tiffany Adriana in hosting her first Cloud Next Extended event, and happy to see Prasetyo Andy Wicaksono and Yuandra Ismiraldi back in action. It's really nice to see the journey of Andri Suranta Ginting from being a Developer Student Club lead, to joining us in building an even larger tech community. 😊
                                    <br /><br />
                                    We have a lively discussion during Q&A session with startups and young engineers about topics ranging from AI/ML to Data discovery tools. Thank you to the awesome speakers for such an insightful session Jerome Poudevigne Ralph Vincent Regalado Albert Widiatmoko Renata Clara Kumala Stewart Jingga Imre Nagi Yuandra Ismiraldi!
                                    <br /><br />
                                    #nextextended19 #gdgcloudjakarta
                                </p>
                            </div>
                            <div className="wrapper__container--post__comment">
                                <h1>Comments</h1>
                                <input
                                    type="text"
                                    className="comment-area"
                                    placeholder="Add a comment..."
                                />
                                <button className="comment-btn">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="wrapper__container--post__comment--contents">
                                    <div className="comment">
                                        <div className="comment__image"></div>
                                        <div className="comment__content">
                                            <div className="comment__content--options">
                                                <i className="fas fa-caret-down"></i>
                                            </div>
                                            <div className="comment__content--profile">
                                                <h1>Sholomon Pinoliad</h1>
                                                <span>25 mins</span>
                                            </div>
                                            <p>
                                                Hello world
                                            </p>
                                            <div className="comment__content--interactions">
                                                <i className="fas fa-heart"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wrapper">
                    <div className="wrapper__container">
                        <h1>Newsfeed</h1>
                        <div className="wrapper__container--post">
                            <div className="wrapper__container--post__profile">
                                <div className="wrapper__container--post__profile--image"></div>
                                <div className="wrapper__container--post__profile--information">
                                    <h1>Sholomon Pinoliad</h1>
                                    <h2>Full-stack Web Developer</h2>
                                    <span>24 mins</span>
                                </div>
                            </div>
                            <div className="options">
                                <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="wrapper__container--post__content">
                                <p>
                                    It's not a common thing to see women in tech, and have the desire to build a community in Indonesia. Shout-out to our newest addition to #Google #Developer Group Cloud Jakarta chapter, Tiffany Adriana in hosting her first Cloud Next Extended event, and happy to see Prasetyo Andy Wicaksono and Yuandra Ismiraldi back in action. It's really nice to see the journey of Andri Suranta Ginting from being a Developer Student Club lead, to joining us in building an even larger tech community. 😊
                                    <br /><br />
                                    We have a lively discussion during Q&A session with startups and young engineers about topics ranging from AI/ML to Data discovery tools. Thank you to the awesome speakers for such an insightful session Jerome Poudevigne Ralph Vincent Regalado Albert Widiatmoko Renata Clara Kumala Stewart Jingga Imre Nagi Yuandra Ismiraldi!
                                    <br /><br />
                                    #nextextended19 #gdgcloudjakarta
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contents;
