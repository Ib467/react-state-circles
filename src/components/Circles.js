import React, {useState} from 'react';
import styles from './Circles.module.css'

function Circles() {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const box = {
            color,
        };

        setBoxes([...boxes, box])
        setColor("");
    }


    return (
        <div> 
            <div>
                <article>Hello!</article>
            </div>

            <form onSubmit = {handleSubmit} className='circles'>
            <div>
                <label><h1>Enter a Color!</h1></label>
                <input 
                    className={styles.circles_input}
                    value = {color}
                    onChange = {event => setColor(event.target.value)}
                />
            </div>
            <button className={styles.button}>Submit</button>
            </form>
        {boxes.map((box, idx) => (
        <div className={styles.box}  key={idx} style={{background: box.color}}></div>
        ))}
        </div>
        
        );
}



export default Circles; 