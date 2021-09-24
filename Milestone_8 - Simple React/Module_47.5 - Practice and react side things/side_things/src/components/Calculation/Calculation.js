import React from 'react';
import { add } from '../Functions/Function';

const Calculation = () => {
    const first = 10;
    const second = 20;
    const sum = add(first,second)
    return (
        <div>
            <h1>Summetion : {sum} </h1>
        </div>
    );
};

export default Calculation;