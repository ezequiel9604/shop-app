import React from 'react';

function TrackOrder(props) {

    function renderingRoad(status){
        if(status==='received'){
            return (
                <div className="road">
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#ffcc00" }}></div>
                <div style={{ backgroundColor: "#0099ff" }}></div>
                <div style={{ backgroundColor: "#00cc99" }}></div>
                </div>
            );
        }else if(status==='onitsway'){
            return (
                <div className="road">
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#ffcc00" }}></div>
                <div style={{ backgroundColor: "#0099ff" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                </div>
            );
        } else if(status==='gettingout'){
            return (
                <div className="road">
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#ffcc00" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                </div>
            );
        } else if(status==='canceled'){
            return (
                <div className="road">
                <div style={{ backgroundColor: "#ff0066" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                <div style={{ backgroundColor: "#dddddd" }}></div>
                </div>
            );
        }
    }

    return (
        <div className="track-road">
        {renderingRoad(props.status)}
        <div className="labels">
            <div style={{ textAlign: "left" }}>Cancelado</div>
            <div style={{ textAlign: "center" }}>De salida</div>
            <div style={{ textAlign: "center" }}>En camino</div>
            <div style={{ textAlign: "right" }}>Recibido</div>
        </div>
        </div>
    );
}

export default TrackOrder;