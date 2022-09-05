import './FeaturedSection.css';
import React, { useState } from 'react';

function FeaturedSection() {
    const [feature_hover1, setHover1] = useState(false);
    const [feature_hover2, setHover2] = useState(false);
    const [feature_hover3, setHover3] = useState(false);
    const [feature_hover4, setHover4] = useState(false);
    return (

        <div className="landing-header featured-section row">
            <div className="mt-5 mb-4 container my-container">
                <div className="mb-4 row">
                    <div className="col">
                        <h1 className="font-weight-bold dark-blue">Featured Work</h1>
                    </div>
                </div>
                <div className="row card-row" style={{ opacity: 1 }}>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/"
                    >
                        <div style={{ opacity: 1 }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(180, 20, 25, 0.8), rgba(180, 20, 25, 0.2)), url("./images/img-1.jpg")',
                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
                                onMouseOver={() => setHover1(true)}
                                onMouseOut={() => setHover1(!true)}
                            >
                                <p
                                    className="font-weight-regular"
                                    style={{
                                        paddingBottom: 0,
                                        marginBottom: "0.5em",
                                        paddingTop: "0.5em",
                                        lineHeight: "1em",
                                        color: "#EAEAEA"
                                    }}
                                >
                                    WordPress: Toronto International Student

                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Web Manager
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: feature_hover1 ? "translateY(20px) translateZ(0px)" : "none",
                                        opacity: feature_hover1 ? 1 : 0,
                                        padding: 10,
                                        borderRadius: 4,
                                        backgroundColor: feature_hover1 ? "rgba(0, 0, 0, .2)" : ""
                                    }}
                                >
                                    Volunteering in a student facing non profit organization as a web manager.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/"
                    >
                        <div style={{ opacity: 1 }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(1, 49, 138, 0.8), rgba(1, 49, 138, 0.2)), url("./images/img-2.png")',

                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
                                onMouseOver={() => setHover2(true)}
                                onMouseOut={() => setHover2(!true)}
                            >
                                <p
                                    className="font-weight-regular"
                                    style={{
                                        paddingBottom: 0,
                                        marginBottom: "0.5em",
                                        paddingTop: "0.5em",
                                        lineHeight: "1em",
                                        color: "#EAEAEA"
                                    }}
                                >
                                    JQeury/PHP/MySql: WTCBC Church
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Front-End Dev
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: feature_hover2 ? "translateY(20px) translateZ(0px)" : "none",
                                        opacity: feature_hover2 ? 1 : 0,
                                        padding: 10,
                                        borderRadius: 4,
                                        backgroundColor: feature_hover2 ? "rgba(0, 0, 0, .2)" : ""
                                    }}
                                >
                                    Created a web-based tool in PHP/Jquery/Mysql for the organization to schedule/assign service to helper for avoiding conflicts
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/"
                    >
                        <div style={{ opacity: 1 }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(179, 123, 45, 0.8), rgba(179, 123, 45, 0.2)), url("./images/img-3.png")',

                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
                                onMouseOver={() => setHover3(true)}
                                onMouseOut={() => setHover3(!true)}
                            >
                                <p
                                    className="font-weight-regular"
                                    style={{
                                        paddingBottom: 0,
                                        marginBottom: "0.5em",
                                        paddingTop: "0.5em",
                                        lineHeight: "1em",
                                        color: "#EAEAEA"
                                    }}
                                >
                                    JQeury/PHP: Freelance Work Experience
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Front-End Dev
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: feature_hover3 ? "translateY(20px) translateZ(0px)" : "none",
                                        opacity: feature_hover3 ? 1 : 0,
                                        padding: 10,
                                        borderRadius: 4,
                                        backgroundColor: feature_hover3 ? "rgba(0, 0, 0, .2)" : ""
                                    }}
                                >
                                    Building the map query, file+image upload,navigation in MVC environment
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/"
                    >
                        <div style={{ opacity: 1 }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(30, 9, 59, 0.8), rgba(30, 9, 59, 0.2)), url("./images/img-4.jpg")',

                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
                                onMouseOver={() => setHover4(true)}
                                onMouseOut={() => setHover4(!true)}
                            >
                                <p
                                    className="font-weight-regular"
                                    style={{
                                        paddingBottom: 0,
                                        marginBottom: "0.5em",
                                        paddingTop: "0.5em",
                                        lineHeight: "1em",
                                        color: "#EAEAEA"
                                    }}
                                >
                                    Coming Soon..........
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Coming Soon
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: feature_hover4 ? "translateY(20px) translateZ(0px)" : "none",
                                        opacity: feature_hover4 ? 1 : 0,
                                        padding: 10,
                                        borderRadius: 4,
                                        backgroundColor: feature_hover4 ? "rgba(0, 0, 0, .2)" : ""
                                    }}
                                >

                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div >
        </div >



    );
}

export default FeaturedSection;