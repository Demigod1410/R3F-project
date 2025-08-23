import { useState } from "react";
import "./App.css";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Angelwing from "../public/Angelwing";
import Earth2 from "../public/Earth2";
import Dither from "../public/src/blocks/Backgrounds/Dither/Dither";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Canvas className="model-canvas" >
          <color attach="background" args={['black']} />
          <OrbitControls autoRotate enableZoom={false} />
          <Suspense fallback={null}>
            <Earth2 position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      

        <Canvas className="model-canvas" camera={{ position: [0, 0, 15], fov: 50 }}>
          <color attach="background" args={['black']} />
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={null}>
            <Angelwing position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} />
          </Suspense>
          <Environment preset="city" />
        </Canvas>
      
    </>
  );
}

export default App;
