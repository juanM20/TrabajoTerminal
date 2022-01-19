import React from 'react';
import './keyboard-styles.css';

function Settingsbar() {

    return(
        <div className="settingsBar">
            <div className="left">
                <span>Volume: </span>
                <input type="range" min="0.0" max="1.0" step="0.01" defaultValue="0.5" list="volumes" name="volume"/>
                <datalist id="volumes">
                    <option value="0.0" label="Mute" />
                    <option value="1.0" label="100%" />
                </datalist>
            </div>
        </div>
    )
}

export default Settingsbar; 