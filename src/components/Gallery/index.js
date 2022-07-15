import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';

import robot from './models/robot2.glb';
import joystickBase from './img/joystick-base.png';
import joystickController from './img/joystick-controller.png';

// import carpet from './img/carpet.jpg';
// import backgroundImage from './img/shanghai_bund.jpeg';
// import marble from './img/marble.jpg';
// import image1 from './img/image01.jpeg';
// import image2 from './img/image02.jpeg';
// import image3 from './img/image03.jpeg';
// import image4 from './img/image04.jpeg';
// import image5 from './img/image05.jpeg';
// import image6 from './img/image06.jpeg';
// import image7 from './img/image07.jpeg';
// import image8 from './img/image08.jpeg';
// import image9 from './img/image09.jpeg';
// import image10 from './img/image10.jpeg';

const AFRAME = window?.AFRAME;

const Gallery = () => {

  const [isWindowAframeReady, setIsWindowAframeReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const watchWindow = setInterval(() => {
      if (AFRAME) {
        setIsWindowAframeReady(true);
        clearInterval(watchWindow);
      };
    }, 500);
  }, []);

  useEffect(() => {
    if (isWindowAframeReady) {
    (async () => {
      await Promise.all([
        addScript(
          'https://londonpark.xyz/extended-wasd-controls.js',
          'extended-wasd-controls' 
        ),
        addScript(
            'https://londonpark.xyz/screen-controls-character-robot2.js',
            'screen-controls-character-robot2'
        ),
        addScript(
            'https://londonpark.xyz/particle.js',
            'particle-system'
        )
      ]);
      setIsInitialized(true);

    })();
  }
  }, [isWindowAframeReady]);

  if (!isInitialized) return <div>Loading...</div>;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>

      <div id="mainUI" onContextMenu={() => false}>
          <div id="regionUI">
              <div id="buttonUI">
              <img src={joystickBase} alt="joystick-base" style={{opacity: 0}}/>
              <div id="joystick">
                  <img src={joystickController} width="48" height="48" alt="joystick-white-ball" />		
              </div>
              </div>
          </div>  
      </div>
    <a-scene
      screen-controls-character 
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: false"
      vr-mode-ui="enabled: false"
      // background="color: #112" // #8108a6 #212021 color="linear-gradient(red, yellow)
      renderer="colorManagement: true; logarithmicDepthBuffer: true"
      // stats
    >
      <a-assets> 
        <img 
          id="carpet" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/d6fef5b9-3ed1-43d4-5431-bed83dcb4200/public" // {carpet} 
          alt="carpet" 
          crossOrigin="anonymous" />
        <img 
          id="floor" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/cb681b61-0f17-4ae9-29e2-44062bc54100/public" // {marble} 
          alt="marble" 
          crossOrigin="anonymous" />
        <img 
          id="image1" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/588261f1-fea5-41af-7329-8484a81dc700/small" // {image1} 
          alt="image1" 
          crossOrigin="anonymous" />
        <img 
          id="image2" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/ca3ccb64-9bc7-418b-68cc-63c04f034a00/small" // {image2} 
          alt="image2" 
          crossOrigin="anonymous" />
        <img 
          id="image3" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/5b3efbfb-5778-4b6e-c949-21a7da4dea00/small" // {image3} 
          alt="image3" 
          crossOrigin="anonymous" />
        <img 
          id="image4" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/bacd78e7-e6e2-48b7-ae8c-221bb751a100/small" // {image4} 
          alt="image4" 
          crossOrigin="anonymous" />
        <img 
          id="image5" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/ce511c38-2396-4178-cc27-6094ff8c6f00/small" // {image5} 
          alt="image5" 
          crossOrigin="anonymous" />
        <img 
          id="image6" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/d6d3ca7a-dbc6-481d-f104-1c9a5b18d100/small" // {image6} 
          alt="image6" 
          crossOrigin="anonymous" />
        <img 
          id="image7" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f080907e-2dca-4ed5-8aea-afad83b2b300/small" // {image7} 
          alt="image7" 
          crossOrigin="anonymous" />
        <img 
          id="image8" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f04725c1-36ae-4303-8bdc-1e09d087ee00/small" // {image8} 
          alt="image8" 
          crossOrigin="anonymous" />
        <img 
          id="image9" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/09909a59-ad00-4997-0154-b59ba565e100/small" // {image9} 
          alt="image9" 
          crossOrigin="anonymous" />
        <img 
          id="image10" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/e417d245-3ca4-4c9a-b95b-333790e6ab00/small" // {image10} 
          alt="image10" 
          crossOrigin="anonymous" />
        <img 
          id="background" 
          src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f1219485-a871-4f7b-0ba9-8f7d4e4c4b00/public" // {backgroundImage} 
          alt="background" 
          crossOrigin="anonymous" />

        <a-mixin
          id="box"
          geometry="primitive: box; depth: 0.125; height: 0.125; width: 0.125">
        </a-mixin>
        <a-mixin
          id="circle"
          geometry="primitive: circle; radius: 0.2; segments: 100; thetaStart: 0; thetaLength: 360">
        </a-mixin>
        <a-mixin
          id="cylinder"
          geometry="primitive: cylinder; radius: 0.2; height: 0.5; segmentsRadial: 50; segmentsHeight: 50; openEnded: true; thetaStart: 0; thetaLength: 360">
        </a-mixin>
        <a-mixin
          id="ring"
          geometry="primitive: ring; radiusInner: 0.3; radiusOuter: 0.5; segmentsTheta: 50">
        </a-mixin>
        <a-mixin id="sphere" geometry="primitive: sphere; radius: 0.1"></a-mixin>
        <a-mixin
          id="torus"
          geometry="primitive: torus; arc: 720; radius: 0.3; radiusTubular: 0.05; segmentsTubular: 10;">
        </a-mixin>
        <a-mixin
          id="torus-knot"
          geometry="primitive: torusKnot; p: 3; q: 7; radius: 0.25; segmentsRadial: 10; radiusTubular: 0.07; segmentsTubular: 32">
        </a-mixin>
        <a-mixin
          id="column"
          geometry="primitive: box; depth: 0.75; height: 1.9; width: 0.75"
          // material="color: #a0a5ad" // color: #FFF; // src: #carpet; // #a0a5ad
          material="src: #floor;"
          position="0 0.6 0">
        </a-mixin>
        <a-mixin
          id="column-bottom"
          geometry="primitive: box; depth: 1; height: 0.1; width: 1;"
          // material="color: #a0a5ad" // color: #FFF // src: #carpet; // #a0a5ad
          material="src: #floor;"
          position="0 0.1 0">
        </a-mixin>
        <a-mixin
          id="column-light"
          light="type: point; intensity: 0.2; distance: 5;" // intensity: 0.5;
          position="0 1.5 0">
        </a-mixin>
        <a-mixin id="object-on-column" position="0 1.2 0"></a-mixin>
        <a-mixin
          id="yoyo"
          animation__yoyo="dir: alternate; loop: true">
        </a-mixin>
        <a-mixin
          id="spin"
          animation__spin="property: object3D.rotation.y; to: 360; loop: true; easing: linear; dur: 10000">
        </a-mixin>
        <a-mixin
          id="spinX"
          mixin="spin"
          animation__spin="property: object3D.rotation.x">
        </a-mixin>
        <a-mixin id="color" material="color: #FFFFC3"></a-mixin>
        <a-mixin id="doubleside" material="side: double"></a-mixin>
      </a-assets>

      {/* <a-camera position="0 1.6 4"></a-camera> */}

      <a-camera
        id="camera" 
        look-controls
        extended-wasd-controls="flyEnabled: true; inputType: joystick;">
      </a-camera>

      {/* <a-sky 
        src="#background"
        rotation="0 180 0">
      </a-sky> */}

      <a-entity
        id="background"
        position="0 1.8 -2.5"
        geometry="primitive: sphere; radius: 5"
        material="src:#background; side: back; shader: flat;"
        scale="100 100 100"
        visible="true" 
        class="raycastable">
      </a-entity>
      
      <a-entity position="0 0.5 -15" particle-system="preset: dust; particleCount: 6000; color: #f0da1a; size:1.5"></a-entity>

      <a-entity light="type: ambient; intensity: 0.7;"></a-entity>

      <a-entity 
        id="dirLight"
        light="type: directional;
        castShadow: true;
        intensity: 1.0;
        shadowCameraVisible: false;
        shadowMapHeight: 2048;
        shadowMapWidth: 2048;
        shadowRadius: 5;
        target: #character;"
        shadow>
      </a-entity>

      <a-gltf-model 
        id="character"
        crossOrigin="anonymous"
        src={robot} // "#main-character"
        position="0 0.2 -12"
        rotation="0 180 0"
        scale="0.25 0.25 0.25"
        shadow="cast: true;">
      </a-gltf-model> 

      {/* #FFFFFF */}
      {/* <a-entity light="type: ambient; color: #a0a5ad"></a-entity>
      <a-entity
        light="type: directional; color: #EEE" // #EEE // #a0a5ad // #dcdfe3
        position="0 1 1">
      </a-entity> */}

      <a-entity 
        geometry="primitive: cylinder; height: 0.2; radius: 30;" // radius: 12;
        material="color: #BABABA; src: #floor; metalness: 0.5; repeat: 100 40; roughness: 0.5" // repeat: 50 20;
        position="0 0 0">
      </a-entity>

      {/* CARPET */}
      <a-entity
        geometry="primitive: box; depth: 25; height: 0.025; width: 2"
        material="color: #440000; metalness: 0; src: #carpet; repeat: 3 40; roughness: 1"
        position="0 0.2 0.4">
      </a-entity>

      <a-entity position="3.0 0 7">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image9" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 4">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image10" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 7">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image2" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 4">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image3" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      {/* BREAK POINT */}

      <a-entity position="-3.0 0 1">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image1"
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 -2">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image2" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 -5">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image3" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 -8">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image4" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-3.0 0 -11">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image5" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 1">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image6" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 -2">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image7" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 -5">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image8" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 -8">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image9" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="3.0 0 -11">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image10" 
            mixin="doubleside spin"
            position="0 1.7 0"
            height="1.3"
            width="1.0">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

    </a-scene>
    </div>
  )
};

export default Gallery;
