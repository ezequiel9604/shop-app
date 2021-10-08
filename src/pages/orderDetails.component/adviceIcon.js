import React from 'react';

function AdviceIcon(props) {
    return (
        <div className="advice-icon">
            <span className="material-icons-outlined">{props.icon}</span>
            <div className="tooltip">
            Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
            Dignissimos eius velit deleniti, dolores ullam, soluta et quasi
            deserunt dolor.
            </div>
        </div>
    );
}

export default AdviceIcon;