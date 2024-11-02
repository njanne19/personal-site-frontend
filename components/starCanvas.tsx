'use client'; 
import * as THREE from 'three'; 
import React, { useRef, useEffect, useMemo } from 'react'; 
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'; 
import { LoopSubdivision } from 'three-subdivide'; 
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';


function RotatingBlockM() {

    const geometry = useMemo(() => {

        const geometrySimple = useLoader(STLLoader, '/blockM.stl'); 
        geometrySimple.scale(0.5, 0.5, 0.5);

        // Then need to subdivide the geometry to get more points
        const iterations = 2;

        const params = {
            split:          false,       // optional, default: true
            uvSmooth:       false,      // optional, default: false
            preserveEdges:  false,      // optional, default: false
            flatOnly:       false,      // optional, default: false
            maxTriangles:   Infinity,   // optional, default: Infinity
        };

        const subdivididedGeometry = LoopSubdivision.modify(geometrySimple, iterations, params); 

        subdivididedGeometry.center(); 
        return subdivididedGeometry;
    }, []);

    const material = useMemo(() => {
        const star = useLoader(THREE.TextureLoader, '/star_white.png'); 
        return new THREE.PointsMaterial({ 
            size: 0.4, 
            color: "0xffffff", 
            map: star,
            transparent: true,
         }); 
    }, []);

    const object3d = useMemo(() => {
        const object = new THREE.Points(geometry, material); 
        const pivot = new THREE.Object3D(); 
        
        // This is resetting the orientation frame of the object and setting initial position. 
        pivot.add(object);
        pivot.rotateX(-Math.PI / 2); 
        pivot.translateY(70); 
        pivot.translateZ(30); 

        return pivot; 
    }, [geometry, material]);
    
    useFrame((state, delta) => {

        const elapsedTime = state.clock.getElapsedTime();
        object3d.rotation.z = elapsedTime * 0.1; 
        object3d.rotation.y = elapsedTime * 0.1;

    });

    return (
        <primitive object={object3d} />
    )

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
                <StarParticles />
                <RotatingBlockM />
                <ambientLight intensity={0.1} /> 
            </Canvas>
        </div>
    )

}

export default ThreeBackground;