import {React, useRef, useEffect} from 'react';

function Canvas(props) {

    const canvasRef = useRef(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function draw(ctx, framecount) {

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(framecount*0.05)**2, 0, 2*Math.PI);
        ctx.fill();
    }

    useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
        
    },[draw])

    
    return <canvas ref={canvasRef} {...props}></canvas>
}

export default Canvas;