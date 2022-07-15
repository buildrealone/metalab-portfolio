import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';

const AFRAME = window?.AFRAME;

const Poster = () => {
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
          'https://londonpark.xyz/page-controls.js',
          'page-controls.js'
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
      background="color: #d471aa"
      // info-message="htmlSrc: #messageText; height: 400"
    >
      <a-assets>
        {/* <a-asset-item id="messageText" src="./assets/message.html"></a-asset-item> */}
        <img id="page1" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/3709655d-a0f5-4dc0-749f-0212b233ba00/aframe" alt="page1" />
        <img id="page2" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/b268e943-1b8d-4783-5c84-904cb76f5e00/aframe" alt="page2" />
        <img id="page3" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/c88d27fe-3382-4835-e3bf-08bab091c500/aframe" alt="page3" />
        <img id="page4" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/d8203844-6af6-4890-12f6-c4baafe74600/aframe" alt="page4" />
        <img id="page5" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/10f6a8de-6aef-4912-1550-1ce4a7653000/aframe" alt="page5" />
        <img id="background" crossOrigin="anonymous" src="https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/086dba80-d86a-4cb7-3969-daa9e0881900/public" alt="background" />
      </a-assets>
      
      <a-camera animation="property: position; from: 0 1.7 500; to: 0 1.7 0; dur: 2000;"></a-camera>

      <a-sky src="#background" rotation="0 180 0"></a-sky>
      <a-entity layer="src: #page1; height: 3; width: 1.9505"></a-entity>

      <a-entity 
        oculus-touch-controls="hand: left" 
        page-controls>
      </a-entity>

      <a-entity 
        oculus-touch-controls="hand: right" 
        page-controls>
      </a-entity>
  </a-scene>
  </div>
  )
};

export default Poster;