import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Points = (props) => (
    <div>
        <CircularProgressbar 
            value={props.points} 
            maxValue = {4}
            text={'Points'} /> Redeem!
            
    </div>
    
)