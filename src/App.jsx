import { useState } from "react";
import "./App.css";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Angelwing from "../public/Angelwing";
import Earth2 from "../public/Earth2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas>
        <OrbitControls autoRotate enableZoom={false} />
        <Suspense fallback={null}>
          <Earth2 position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
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
