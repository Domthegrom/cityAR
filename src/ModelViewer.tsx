import React, { useEffect } from 'react'
import '@google/model-viewer';



// src="https://cdn.glitch.com/21710700-a398-4f93-9a6c-eb0810904e74/industrial_lamp.gltf?v=1569485480008"
// ios-src="https://cdn.glitch.com/21710700-a398-4f93-9a6c-eb0810904e74/industrial_floor_lamp.usdz?v=1569485305204"
// alt="Tall Lamp" background-color="#eeeeee" shadow-intensity="1" camera-controls ar magic-leap
// quick-look-browsers="safari chrome" ar-scale="fixed" resizable="false"
// max-field-of-view="90deg"






export function ModelViewer() {
    useEffect(() => {
        const model = document.createElement('model-viewer');
        model.src = "./resources/couch.gltf";
        model.ar = true
        model.autoRotate = true
        model.backgroundColor = '#000000'
        // model.
        const modelDiv = document.getElementById('model')
        modelDiv?.appendChild(model)
    }, [])
    return (
        <div id="model">

        </div>

    )
}