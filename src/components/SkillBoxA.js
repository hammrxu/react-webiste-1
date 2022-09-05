import React, { useState } from "react";
import './SkillBox.css';

function SkillBoxA() {
    const [close, setClick] = useState(false);
    return (
        <div className="swatch-wrap">
            <div onClick={() => setClick(!close)} className={close ? "swatch swatch-close" : "swatch swatch-active"}>
                <div style={{ backgroundColor: "#4C3549" }}>ES6</div>
                <div style={{ backgroundColor: "#883955" }}>Jquery</div>
                <div style={{ backgroundColor: "#4C3549" }}>Boot strap</div>
                <div style={{ backgroundColor: "#883955" }}>React</div>
                <div style={{ backgroundColor: "#4C3549" }}>CSS3</div>
                <div style={{ backgroundColor: "#883955" }}>Less</div>

            </div >
        </div>
    );
}

export default SkillBoxA;
