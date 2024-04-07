import React, { useState, useEffect, useRef } from 'react';
import chroma from 'chroma-js';
import { MdDeleteForever } from "react-icons/md";

function Roulette() {
  const canvasRef = useRef(null);
  const spinsRef = useRef(null); // Ref for spins div
  const [options, setOptions] = useState([]);
  const [fillStyles, setFillStyles] = useState([]);
  const [decay, setDecay] = useState(-0.01);
  const [a, setA] = useState(0);
  const [ang, setAng] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false); // State to track if spinning

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height = document.body.offsetHeight;
    canvas.width = document.body.offsetWidth;
    ctx.font = '18px/1.4 sans-serif';

    const drawWheel = () => {
      if (a < 0) return;
    
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(ang + a + rotation);
    
      ctx.beginPath();
    
      const R = Math.min(canvas.height, canvas.width) / 2 - 10;
      const inc = 2 * Math.PI / options.length;
      ctx.arc(0, 0, R, 0, 2 * Math.PI);
      let c, s, m;
    
      fillStyles.forEach((fillStyle, j) => {
        c = Math.cos(j * inc);
        s = Math.sin(j * inc);
        const [r, g, b] = fillStyle;
    
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        ctx.moveTo(0, 0);
        ctx.lineTo(R * c, R * s);
        ctx.lineWidth = '10px';
        ctx.arc(0, 0, R, j * inc, (j + 1) * inc);
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.stroke();
    
        m = ctx.measureText(options[j]);
        ctx.fillStyle = chroma.contrast(fillStyle, 'black') < 4.5 ? 'white' : 'black';
        ctx.fillText(
          options[j],
          R/2 * Math.cos((j + 0.5) * inc) - m.width / 2,
          R/2 * Math.sin((j + 0.5) * inc)
        );
      });
    
      ctx.stroke();
      ctx.restore();
    };
    

    const tick = (ts) => {
      let lastUpdate;
      if (!lastUpdate) lastUpdate = ts;
      if (ts - lastUpdate < 10) {
        return window.requestAnimationFrame(tick);
      }

      lastUpdate = ts;
      setA(prevA => prevA + prevA * decay);
      drawWheel();
      window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
    drawWheel();
    
    return () => {
      // Cleanup
    };
  }, [options, fillStyles, decay, a, ang, rotation]);

  // Function to handle spinning animation
  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomRotation = Math.random() * 360; // Generate random rotation angle
      spinsRef.current.style.setProperty('--rotation', `${randomRotation}deg`); // Set custom property
      
      // Clear existing animation before applying new one
      spinsRef.current.style.animation = '';
  
      setTimeout(() => {
        spinsRef.current.style.animation = `spin ${(Math.random() * 2 + 4).toFixed(1)}s ease-out forwards`;
        setIsSpinning(false);
      }, 50); // Delay the animation start slightly to ensure the clear operation completes
    }
  };
  
  

  const addItem = (value) => {
    setOptions(prevOptions => [...prevOptions, value]);
    setFillStyles(prevFillStyles => [...prevFillStyles, chroma.random().rgb()]);
  };

  const removeItem = (index) => {
    setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
    setFillStyles(prevFillStyles => prevFillStyles.filter((_, i) => i !== index));
  };

  const addAnother = (idx, value = '') => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[idx] = value;
      return newOptions;
    });

    setFillStyles(prevFillStyles => {
      const newFillStyles = [...prevFillStyles];
      newFillStyles[idx] = chroma.random().rgb();
      return newFillStyles;
    });
  };

  return (
    <div>
      <h4> Roulette</h4>
    
      <div className="roulette">
        <div className="item">
          {options.map((value, idx) => (
            <div key={idx}>
              <input className="addlist" value={value} placeholder="add to wheel" onChange={(e) => addAnother(idx, e.target.value)} />
              <button onClick={() => removeItem(idx)}><MdDeleteForever style={{Color:'#882346'}}/></button>
            </div>
          ))}
          <button className="add" onClick={() => addItem('')}>Add a food item</button>
        </div>
        <div className="wheel">
          
          
          <div className="color">
          <button className="spin" onClick={handleSpin} disabled={isSpinning}>Spin</button>
          <div className="arrow"> </div>
            <div className="spins" ref={spinsRef}> {/* Attach spinsRef to spins div */}
              <canvas ref={canvasRef} className="circle" ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roulette;
