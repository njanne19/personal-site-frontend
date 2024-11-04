'use client'; 
import * as THREE from 'three'; 
import React, { useRef, useEffect, useMemo } from 'react'; 
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelAstronaut() {
    const group : React.MutableRefObject<THREE.Group | null> = useRef(null);
    const mixer : React.MutableRefObject<THREE.AnimationMixer | null> = useRef(null);
    const gltf = useLoader(GLTFLoader, '/3d/astronaut_floating_in_space/scene.gltf');
  
    useEffect(() => {
      if (gltf.animations.length > 0) {
        // Create an AnimationMixer, and load the first animation from the GLTF
        mixer.current = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.current.clipAction(gltf.animations[0]);
        action.play();
      }

      if (group.current) {
        group.current.position.set(0, 0, -10); 
      }
  
      // Cleanup function to stop all animations when the component unmounts
      return () => {
        if (mixer.current) {
          mixer.current.stopAllAction();
          mixer.current = null;
        }
      };
    }, [gltf]);
  
    // Update the mixer in each frame to keep animations running
    useFrame((state, delta) => {
      if (mixer.current) {
        mixer.current.update(delta);
      }

      if (group.current) {
        // Make the group rotate around multiple axes for a tumbling effect
        group.current.rotation.x += delta * 0.1;
        group.current.rotation.y += delta * 0.2;
        group.current.rotation.z += delta * 0.15;
    
        // Simulate floating by adding a small oscillation in the position
        const time = state.clock.getElapsedTime();
        group.current.position.x = Math.sin(time * 0.3) * 1.5; // Small horizontal drift
        group.current.position.y = Math.sin(time * 0.4) * 1.2; // Vertical oscillation
        group.current.position.z = -10 + Math.cos(time * 0.2) * 0.5; // Depth oscillation
      }

    });
  
    return <primitive ref={group} object={gltf.scene}/>;
}


function StarParticles () {
    const [posArray, setPosArray] = React.useState<Float32Array>();

    // Create particles geometry and material 
    const particlesGeometry = useMemo(() => {
        const particlesCount = 10000; 
        const posArray = new Float32Array(particlesCount * 3); 


        for (let i = 0; i < particlesCount * 3; i++) { 
            posArray[i] = (Math.random() - 0.5) * 100; 
        }

        // Update the state of the component. 
        setPosArray(posArray);

        const geometry = new THREE.BufferGeometry(); 
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        return geometry; 
    }, []); 

    const particlesMaterial = useMemo(() => {
        // First we have to load the texture. 
        const star = useLoader(THREE.TextureLoader, '/star_white.png'); 
        
        return new THREE.PointsMaterial({
            size: 0.2, 
            color: "0xffffff",
            map: star, 
            transparent: true,
        });
    }, []);

    useFrame((state, delta, frame) => {
        // Update elapsed time 
        const elapsedTime = state.clock.getElapsedTime(); 

        if (posArray) {
            let tempPosArray = posArray.slice(); 
            for (let i = 0; i < tempPosArray.length; i++) {
                const i3 = i * 3; 
                const x = tempPosArray[i3]; 
                const y = tempPosArray[i3 + 1]; 

                const randomDirection = Math.random() * 0.1; 
                tempPosArray[i3] = x + 3*Math.sin((elapsedTime + i)/3) + Math.sin(randomDirection) * 0.1; 
                tempPosArray[i3 + 1] = y + 3*Math.cos((elapsedTime + i)/3) + Math.cos(randomDirection) * 0.1;
            }
            if (particlesGeometry) {
                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(tempPosArray, 3));
            }
        }
    }); 
    

    return (
        <points geometry={particlesGeometry} material={particlesMaterial} />
    )
}




const ThreeBackground : React.FC = () => {
    
    return (
        <div id="canvas-container" className="w-full h-full relative">
            <Canvas gl={{ alpha: true}} resize={{scroll: true }}>
                <ModelAstronaut />
                <StarParticles />
                <ambientLight intensity={0.1} /> 
            </Canvas>
        </div>
    )

}

export default ThreeBackground;