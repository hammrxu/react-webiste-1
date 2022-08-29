import React from "react";
import { Link } from 'react-router-dom';
import './Brief.css';

function Brief() {
    return (
        <>
            <div className="brief-container w3-animate-bottom">
                <h1>Hello There! <i class="fa fa-cog w3-spin" /></h1>
                <p>My name is <Link to='/' className='brief-my-name'>
                    Peng Xu
                </Link>, a front-end/React Information Technology graduate. My interest is in <strong>Front End Development</strong> and I devoted myself in skill of <strong>React</strong> for web development!</p>
            </div>
        </>
    );
}

export default Brief;
