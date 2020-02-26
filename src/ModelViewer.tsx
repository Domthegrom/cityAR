import React, { useEffect } from 'react'
import '@google/model-viewer';

export function ModelViewer() {
    useEffect(() => {
        const model = document.createElement('model-viewer');
        model.src = "https://cdn.glitch.com/21710700-a398-4f93-9a6c-eb0810904e74/industrial_lamp.gltf?v=1569485480008";
        model.ar = true
        model.autoRotate = true
        model.arScale = 'fixed'
        model.iosSrc = "https://cdn.glitch.com/21710700-a398-4f93-9a6c-eb0810904e74/industrial_floor_lamp.usdz?v=1569485305204"
        model.maxFieldOfView = '20deg'
        model.title = "Some Lamp"
        const modelDiv = document.getElementById('model')
        modelDiv?.appendChild(model)
    }, [])
    return (
        <div>
        <div id="model"></div>
        <div style={{color: 'black'}}>HTML</div>
        </div>
    )
}