import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Books() {
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
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>

    );
}

export default Books;
