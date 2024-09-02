import { useState } from "react";
import image from '../octopus-128x128.png';

function FunctionMethod() {
    // Set initial state to 'image'
    const [data, setData] = useState('');

    const handleData = () => {
         
        setData('image');
    };

    return (
        <div className="Method">
            <h1>FunctionMethod Testing</h1>
            <button data-testid='btn1' onClick={handleData}>Click</button>
            {data === 'image' && <div><img src={image} alt="Octopus" /></div>}
        </div>
    );
}

export default FunctionMethod;
