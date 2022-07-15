// import shadow from './img/radial-shadow-2.png';
// import sarah from './models/sarah.glb';
import jake from './models/scene.glb';
import mall from './img/shopping.jpeg';

const Shopping = () => {
    return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
    <a-scene 
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: false"
      vr-mode-ui="enabled: false"
      renderer="colorManagement: true; logarithmicDepthBuffer: true"
      // stats
    >
    <a-asset>
      <img id="backgroundImage" src="./img/shopping.jpeg" crossOrigin="anonymous" alt="backgroundImage" />
      <a-mixin
        id="spin"
        animation__spin="property: object3D.rotation.y; to: 360; loop: true; easing: linear; dur: 10000">
      </a-mixin>
    </a-asset>

    <a-sky src={mall} rotation="0 0 10"></a-sky>
    
    {/* <a-entity
      id="background"
      position="0 0 0"
      geometry="primitive: sphere; radius: 10000"
      material="src:#backgroundImage; shader: flat;"
      scale="100 100 100"
      visible="true" 
      class="raycastable">
    </a-entity> */}

    <a-light 
      type="directional" 
      color="#fff" 
      intensity="0.2" 
      position="-1 2 1"
      rotation="0 -70 0">
    </a-light>

    <a-light 
      type="ambient" 
      color="#fff">
    </a-light>

    <a-camera position="0 0 230"></a-camera> 

    <a-gltf-model 
      src={jake}
      mixin="spin" 
      position="20 -80 -270" 
      rotation="0 0 0" 
      scale="250 250 250">
    </a-gltf-model>

    {/* <a-entity>
      <a-gltf-model 
          src={sarah} 
          mixin="spin"
          position="-10 -150 80" 
          rotation="0 50 0" 
          scale="50 50 50">
      </a-gltf-model>
      <a-image 
            src={shadow} 
            rotation="-90 0 0" 
            scale="100 100 100"
            position="-150 -155 0">
        </a-image>
    </a-entity> */}

    {/* <a-entity>
      <a-gltf-model 
          src={jake}
          mixin="spin" 
          position="20 -130 -260" 
          rotation="0 0 0" 
          scale="250 250 250">
      </a-gltf-model>
      <a-image 
        src={shadow} 
        rotation="-90 0 0" 
        scale="1000 1000 1000"
        position="20 -130 -260">
      </a-image>
    </a-entity> */}

    </a-scene>
    </div>
    );
};

export default Shopping;