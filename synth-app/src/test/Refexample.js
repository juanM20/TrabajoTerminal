import {React, useRef} from 'react';

function Refexample() {
    const inputEl = useRef(null);
    const h1Ref = useRef(null);
    const onButtonClick = () => {

        console.log(h1Ref);
        inputEl.current.focus();
        h1Ref.current.style.color = "red";

    }

    return(
        <div>
            <h1 ref={h1Ref}>Ejemplo</h1>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Enfoca el input</button>
        </div>
    )

}

export default Refexample;