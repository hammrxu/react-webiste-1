import React from 'react'
import './SwitchLabel.css';

// used inside Navbar component
const SwitchLabel = ({ isOn, handleToggle, onColor }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            &nbsp;<label
                style={{ background: isOn && onColor }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default SwitchLabel;
