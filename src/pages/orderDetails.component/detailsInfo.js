import React from 'react';

function DetailsInfo(props) {
    return (
        <div style={props.wider? {width:'100%'}:{}}>
        <p>
            <label>{props.title}: </label>
            {props.info}
        </p>
        </div>
    );
}

export default DetailsInfo;