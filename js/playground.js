const createScene =  () => {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    const dynamicTexture = new BABYLON.DynamicTexture("dynamicTexture", {width:512, height:256}, scene);
    dynamicTexture.drawText("Babilu", null, null, "bold 44px Arial", "white", "transparent");
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
    boxMaterial.diffuseTexture = dynamicTexture;
    box.material = boxMaterial;

    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3 }, scene);
    sphere.position.y = 1;
   
    const sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3 }, scene);
    sphere2.position.y = -1;

    const sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3 }, scene);
    sphere3.position.x = -1;
    sphere3.material = new BABYLON.StandardMaterial("material", scene);
    sphere3.material.diffuseColor = new BABYLON.Color3(0, 0, 1); // Blue color


    const pyramid = BABYLON.MeshBuilder.CreatePolyhedron("pyramid", { type: 1, size: 0.5 }, scene);
    pyramid.position.x = 1;
    pyramid.material = new BABYLON.StandardMaterial("pyramidMaterial", scene);
    pyramid.material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red color

return scene;
}