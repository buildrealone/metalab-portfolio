import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';


const AFRAME = window?.AFRAME;

const Portfolio = () => {

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
          'https://londonpark.xyz/highlight.js',
          'highlight' 
        )
      ]);
      setIsInitialized(true);

    })();
  }
  }, [isWindowAframeReady]);

  if (!isInitialized) return <div>Loading...</div>;

    return (
        <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        
        <a-scene
            loading-screen="enabled: false"
            device-orientation-permission-ui="enabled: false"
            vr-mode-ui="enabled: false"
            cursor="rayOrigin: mouse; fuse: false" 
            raycaster="objects: .raycastable"
            background="color: black">
  
        <a-assets>
          <img id="background_image" alt="background_image" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f1219485-a871-4f7b-0ba9-8f7d4e4c4b00/public" crossOrigin="anonymous" />
          <img id="poster_01" alt="poster_01" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/7dd15817-4fb9-4db3-96f5-09550302f100/aframe" crossOrigin="anonymous"/>
          <img id="poster_02" alt="poster_02" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/6488a5b1-e846-4aa7-cc29-4e1709cd3a00/aframe" crossOrigin="anonymous"/>
          <img id="poster_03" alt="poster_03" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/2a32eee1-8815-4b50-bd14-a7a4e5f79500/aframe" crossOrigin="anonymous"/>
          <img id="poster_04" alt="poster_04" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/937059cf-fabf-423d-7147-ffbe27a9f400/aframe" crossOrigin="anonymous"/>
          <img id="poster_05" alt="poster_05" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f0c7e4e6-01f8-42ca-5b1d-7718746ee100/aframe" crossOrigin="anonymous"/>
          <img id="poster_06" alt="poster_06" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/191366d3-9913-409e-f9fb-b2aca7b09c00/aframe" crossorigin="anonymous"/>
          
          <a-mixin
            id="frame"
            geometry="primitive: plane; width: 0.5783552; height: 0.8192"
            material="color: white; shader: flat"
            animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
          </a-mixin>
  
          <a-mixin
            id="poster"
            geometry="primitive: plane; width: 0.544768; height: 0.786432"
            material="color: white; shader: flat"
            position="0 0 0.005">
          </a-mixin>
        </a-assets>
  
        <a-camera animation="property: position; from: 0 1.8 50; to: 0 1.8 0; dur: 2000;"></a-camera>
  
        <a-entity
          id="background"
          position="0 1.8 -2.5"
          geometry="primitive: sphere; radius: 3000"
          material="src:#background_image; side: back; shader: flat;"
          scale="0.001 0.001 0.001"
          visible="true" 
          class="raycastable">
        </a-entity>
  
        <a-text 
          value="Metalab Design for Metaverse"
          color="white" 
          scale="0.7 0.7 0.7" 
          position="-1.05 3 -3">
        </a-text>
  
        <a-entity id="ui" position="0 1 -3.0">
          <a-entity id="menu" highlight>
  
            <a-entity id="button_01" position="-0.8 1 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_01;" mixin="poster"></a-entity>
            </a-entity>
  
            <a-entity id="button_02" position="0 1 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_02" mixin="poster"></a-entity>
            </a-entity>
  
            <a-entity id="button_03" position="0.8 1 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_03" mixin="poster"></a-entity>
            </a-entity>
  
            <a-entity id="button_04" position="-0.8 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_04" mixin="poster"></a-entity>
            </a-entity>

            <a-entity id="button_06" position="0 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_06" mixin="poster"></a-entity>
            </a-entity>
  
            <a-entity id="button_05" position="0.8 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #poster_05" mixin="poster"></a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
  
      </a-scene>
      </div>
    );
};

export default Portfolio;