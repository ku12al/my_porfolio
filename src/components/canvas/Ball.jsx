import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal, isDecalError] = useTexture(
    imgUrl ? [imgUrl] : [],  // Make sure URL is not undefined
    (error) => {
      console.error("Error loading texture:", error);
    }
  );

  if (isDecalError || !imgUrl) {
    return (
      <mesh>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0.5, 1]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#ffcccc' /> {/* Error fallback color */}
      </mesh>
    );
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]} // Adjust as needed
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ( {icon} ) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
