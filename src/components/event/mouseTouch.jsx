import React, { useState } from "react";

export function MouseTouch() {

    const [position, setPosition] = useState({ position: '', left: '' })

    function mouseTouchHandle(e) {
        setPosition({position:'absolute',left:e.targetTouch[0].clientX + 'px'});
    }

    return (
        <div>
            <img style={position} src="VikasPhoto2024Compress.jpg" onTouchMove={mouseTouchHandle}></img>
        </div>
    )
}