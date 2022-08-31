import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FeaturedSection.css';

function FeaturedSection() {
    return (
        // <Container mt={5} mb={4}>
        //     <Row className="mb-4">
        //         <Col>
        //             <h2 className="font-weight-bold dark-blue">
        //                 Selected Work</h2>
        //         </Col>
        //     </Row>
        //     <Row style={{ opacity: 1, transform: "none" }}>
        //         {/*  */}
        //         <a className="col-lg-3 col-md-6 col-sm-12" href="/w/adobejam">
        //             <div >
        //                 <div className="dynamic-cards mb-3"
        //                 >
        //                     <p>Airbnb &amp; Adobe Design Challenge</p>
        //                     <h3 className="font-weight-medium" >Product Designer</h3>
        //                     <p className="font-weight-light text-card" >
        //                         Spending 48 hours to solve how users can stay connected during the pandemic
        //                     </p>
        //                 </div>
        //             </div>
        //         </a>
        //         <a className="col-lg-3 col-md-6 col-sm-12" href="/w/kpmg">
        //             <div >
        //                 <div className="dynamic-cards mb-3" >
        //                     <p className="font-weight-regular">KPMG Ideation Challenge</p>
        //                     <h3 className="font-weight-medium" >Regional Champions</h3>
        //                     <p className="font-weight-light text-card" >Representing Ontario on the national stage to answer the question: How might we give back time?</p>
        //                 </div>
        //             </div>
        //         </a>
        //         <a className="col-lg-3 col-md-6 col-sm-12" href="/w/casecom">
        //             <div >
        //                 <div className="dynamic-cards mb-3" >
        //                     <p className="font-weight-regular" >CaseCom</p>
        //                     <h3 className="font-weight-medium" >Co-Founder</h3>
        //                     <p className="font-weight-light text-card" >Building the future of online case competitions</p>
        //                 </div>
        //             </div>
        //         </a>
        //         <a className="col-lg-3 col-md-6 col-sm-12" href="/w/hackwestern7">
        //             <div >
        //                 <div className="dynamic-cards mb-3" >
        //                     <p className="font-weight-regular" >Hack Western 7 - Make Anything, Anywhere
        //                     </p>
        //                     <h3 className="font-weight-medium" >Product Lead</h3>
        //                     <p className="font-weight-light text-card" >Leading one of Canada's largest hackathons and the journey to their first virtual event
        //                     </p>
        //                 </div>
        //             </div>
        //         </a>
        //     </Row>
        // </Container >
        <div className="landing-header featured-section row">
            <div className="mt-5 mb-4 container">
                <div className="mb-4 row">
                    <div className="col">
                        <h1 className="font-weight-bold dark-blue">Selected Work</h1>
                    </div>
                </div>
                <div className="row" style={{ opacity: 1, transform: "none" }}>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/w/adobejam"
                    >
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(180, 20, 25, 0.8), rgba(180, 20, 25, 0.2)), url("https://doixzan7hf4ti.cloudfront.net/logos/airbnb.png")',
                                    transform: "none",
                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
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
                                    Airbnb &amp; Adobe Design Challenge
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Product Designer
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: "translateY(20px) translateZ(0px)",
                                        opacity: 0,
                                        padding: 10,
                                        borderRadius: 4
                                    }}
                                >
                                    Spending 48 hours to solve how users can stay connected during the
                                    pandemic
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/w/kpmg"
                    >
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(1, 49, 138, 0.8), rgba(1, 49, 138, 0.2)), url("https://doixzan7hf4ti.cloudfront.net/logos/kpmglogo.png")',
                                    transform: "none",
                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
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
                                    KPMG Ideation Challenge
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Regional Champions
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: "translateY(20px) translateZ(0px)",
                                        opacity: 0,
                                        padding: 10,
                                        borderRadius: 4
                                    }}
                                >
                                    Representing Ontario on the national stage to answer the question:
                                    How might we give back time?
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/w/casecom"
                    >
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(179, 123, 45, 0.8), rgba(179, 123, 45, 0.2)), url("https://doixzan7hf4ti.cloudfront.net/logos/casecomlogo.png")',
                                    transform: "none",
                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
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
                                    CaseCom
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Co-Founder
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: "translateY(20px) translateZ(0px)",
                                        opacity: 0,
                                        padding: 10,
                                        borderRadius: 4
                                    }}
                                >
                                    Building the future of online case competitions
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        style={{ textDecoration: "none" }}
                        className="col-lg-3 col-md-6 col-sm-12"
                        href="/w/hackwestern7"
                    >
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="dynamic-cards mb-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(30, 9, 59, 0.8), rgba(30, 9, 59, 0.2)), url("https://doixzan7hf4ti.cloudfront.net/logos/hw7logo.png")',
                                    transform: "none",
                                    boxShadow: "grey 0px 0px 5px 0px",
                                    borderRadius: 8
                                }}
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
                                    Hack Western 7 - Make Anything, Anywhere
                                </p>
                                <h3
                                    className="font-weight-medium"
                                    style={{ paddingTop: 0, lineHeight: "1em" }}
                                >
                                    Product Lead
                                </h3>
                                <p
                                    className="font-weight-light text-card"
                                    style={{
                                        transform: "translateY(20px) translateZ(0px)",
                                        opacity: 0,
                                        padding: 10,
                                        borderRadius: 4
                                    }}
                                >
                                    Leading one of Canada’s largest hackathons and the journey to
                                    their first virtual event
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>



    );
}

export default FeaturedSection;
