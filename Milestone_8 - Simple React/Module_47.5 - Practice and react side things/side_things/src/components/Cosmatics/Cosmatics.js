import React from 'react';
import { useState, useEffect } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);
    useEffect(() => {
        fetch('./cosmatic.json')
            .then(res => res.json())
            .then(data => setCosmatics(data));
    },[])

    return (
        <div>
            <h3>Shop my cosmatics</h3>
            {
                cosmatics.map(cosmatic => <Cosmatic
                    key = {cosmatic._id}
                    cosmatic={cosmatic} />)
            }
        </div>
    );
};

export default Cosmatics;