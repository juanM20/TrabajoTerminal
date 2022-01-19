import React from 'react';

import './keyboard-styles.css';
import SettingsBar from './Settingsbar';
import WaveformPicker from './Waveformpicker';

function Keyboard() {
    
    return (
        <div className="container">
            <div className="keyboard"></div>
            <SettingsBar></SettingsBar>
            <WaveformPicker></WaveformPicker>
        </div>
    )
}

export default Keyboard;