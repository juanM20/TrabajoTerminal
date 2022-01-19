import {React, useRef, useEffect} from 'react';

function Canvas(props) {

    const canvasRef = useRef(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function draw(ctx) {

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(100, 100, 100, 100);
        
    }

    useEffect(() => {
        
        const canvas = canvasRef.current;

        if(canvas.getContext) {

            const context = canvas.getContext('2d');
       
            const render = () => {
                draw(context);
            }
            render(); 
        }

    },[draw])

    
    return <canvas ref={canvasRef} {...props}></canvas>
}

export default Canvas;