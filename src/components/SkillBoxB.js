import React, { useState } from "react";
import './SkillBox.css';

function SkillBoxB() {
    const [close, setClick] = useState(false);
    return (
        <div className="swatch-wrap">
            <div onClick={() => setClick(!close)} className={close ? "swatch swatch-close" : "swatch swatch-active"}>
                <div style={{ backgroundColor: "#588157" }}>HTML </div>
                <div style={{ backgroundColor: "#A3B18A" }}>Word Press</div>
                <div style={{ backgroundColor: "#588157" }}>Git</div>
                <div style={{ backgroundColor: "#A3B18A" }}>AWS S3</div>
                <div style={{ backgroundColor: "#588157" }}>AWS EC2</div>
                <div style={{ backgroundColor: "#A3B18A" }}>AWS Cloud Front </div>
            </div >
        </div>
    );
}

export default SkillBoxB;
