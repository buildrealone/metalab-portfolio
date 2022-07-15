import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';

const AFRAME = window?.AFRAME;

const ColorfulSpace = () => {
  const [isWindowAframeReady, setIsWindowAframeReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const watchWindow = setInterval(() => {
      if (AFRAME) {
        // console.log('window.AFRAME is ready!');
        setIsWindowAframeReady(true);
        clearInterval(watchWindow);
      }
      // else {
      //   console.log('loading window watcher...');
      // }
    }, 500);
  }, []);

  useEffect(() => {
    if (isWindowAframeReady) {
    (async () => {

      await Promise.all([
        addScript(
          'https://unpkg.com/aframe-randomizer-components@3.0.2/dist/aframe-randomizer-components.min.js',
          'aframe-randomizer-components'
        ),
        addScript(
          'https://unpkg.com/aframe-entity-generator-component@3.0.1/dist/aframe-entity-generator-component.min.js',
          'aframe-entity-generator-component'
        )
      ]);

      AFRAME.registerComponent('random-material', {
        init: function() {
          this.el.setAttribute('material', {
            color: this.getRandomColor(),
            metalness: Math.random(),
            roughness: Math.random()
          })
        },

        getRandomColor: function() {
          const letters = '0123456789ABCDEF'.split('');
          let color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
          }
          return color
        }
      });

      AFRAME.registerComponent('random-torus-knot', {
        init: function() {
          this.el.setAttribute('geometry', {
            primitive: 'torusKnot',
            radius: Math.random() * 10,
            radiusTubular: Math.random() * 0.75,
            p: Math.round(Math.random() * 10),
            q: Math.round(Math.random() * 10)
          })
        }
      });

      setIsInitialized(true);

    })();
  }
  }, [isWindowAframeReady]); // [deps] -> dependencies

  if (!isInitialized) return <div>Loading...</div>;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
    <a-scene 
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: false"
      vr-mode-ui="enabled: false"
      background="color: #111">
      <a-assets>
        <a-mixin
          id="light"
          geometry="primitive: sphere; radius: 1.5"
          material="color: #FFF; shader: flat"
          light="color: #DDDDFF; distance: 120; intensity: 2; type: point">
        </a-mixin>
        <a-mixin
          id="torusKnot"
          random-torus-knot
          random-material
          random-position="min: -60 -60 -80; max: 60 60 40">
        </a-mixin>
      </a-assets>

      <a-entity entity-generator="mixin: torusKnot; num: 120"></a-entity>

      <a-entity animation="property: rotation; to: 0 0 360; dur: 4000; easing: linear; loop: true">
        <a-entity 
          mixin="light" 
          position="30 0 0">
        </a-entity>
      </a-entity>

      <a-entity animation="property: rotation; to: 360 0 0; dur: 4000; easing: linear; loop: true">
        <a-entity 
          mixin="light" 
          position="0 0 40">
        </a-entity>
      </a-entity>
    </a-scene>
    </div>
  )
};

export default ColorfulSpace;
