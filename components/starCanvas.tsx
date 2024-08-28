'use client'; 
import React, { useRef, useEffect, useMemo } from 'react'; 
import { Canvas, useFrame, useThree } from '@react-three/fiber'; 
import * as THREE from 'three'; 

function StarParticles () {

    // Create particles geometry and material 
    const particlesGeometry = useMemo(() => {
        const particlesCount = 5000; 
        const posArray = new Float32Array(particlesCount * 3); 


        for (let i = 0; i < particlesCount * 3; i++) { 
            posArray[i] = (Math.random() - 0.5) * 100; 
        }

        const geometry = new THREE.BufferGeometry(); 
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        return geometry; 
    }, []); 

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2, 
        color: '#ff88cc', 
    }); 

    return (
        <points geometry={particlesGeometry} material={particlesMaterial} />
    )
}

const ThreeBackground : React.FC = () => {

    useEffect(() => {

        // Get the current canvas's camera, scene, and renderer, using
        // react-three-fiber hooks 
        


    }, []); 

    return (
        <div id="canvas-container" className="w-full h-full">
            <Canvas >
                <StarParticles />
                <ambientLight intensity={0.1} /> 
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    )

}

export default ThreeBackground;