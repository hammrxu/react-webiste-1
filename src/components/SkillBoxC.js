import React, { useState } from "react";
import './SkillBox.css';

function SkillBoxC() {
    const [close, setClick] = useState(false);
    return (
        <div className="swatch-wrap">
            <div onClick={() => setClick(!close)} className={close ? "swatch swatch-close" : "swatch swatch-active"}>
                <div style={{ backgroundColor: "#457B9D" }}>MS Office Suite</div>
                <div style={{ backgroundColor: "#1D3557" }}>VBA</div>
                <div style={{ backgroundColor: "#457B9D" }}>Java</div>
                <div style={{ backgroundColor: "#1D3557" }}>PHP</div>
                <div style={{ backgroundColor: "#457B9D" }}>Python</div>
                <div style={{ backgroundColor: "#1D3557" }}>MySql</div>
            </div >
        </div>
    );
}

export default SkillBoxC;
