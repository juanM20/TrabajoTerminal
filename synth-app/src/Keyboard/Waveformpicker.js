import React from 'react';
import './keyboard-styles.css';

function Waveformpicker() {
    
    return (    
        <div className="right">
            <span>Current waveform: </span>
            <select name="waveform" id="" defaultValue="Sine">
                <option value="sine">Sine</option>
                <option value="square">square</option>
                <option value="sawtooth">sawtooth</option>
                <option value="triangle">triangle</option>
                <option value="custom">custom</option>
            </select>
        </div>
    )
}

export default Waveformpicker;