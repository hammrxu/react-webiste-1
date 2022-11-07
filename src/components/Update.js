import React from "react";
import './Update.css';

function Update() {
    return (
        <>
            <div className='alert-container my-container'>
                <div role="alert" className="fade alert alert-primary show">
                    <div className="alert-heading h4">Update</div>
                    <p>Currently, I am Open and searching for a React Developer job and welcome any other opportunities like Software Engineer. Check out at&nbsp;<a className="alert-link" href={process.env.REACT_APP_MY_RESUME_LINK} target="_blank" rel="noreferrer">My RESUME</a>
                        !
                    </p>
                </div>
            </div>
        </>
    );
}

export default Update;
