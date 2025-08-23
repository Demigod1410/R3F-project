import { useState } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import Earth from '../public/Earth'
import Earth2 from '../public/Earth2'
import Jupiter from '../public/Jupiter'
import { Suspense } from 'react'
import Angelwing from '../public/Angelwing'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <Angelwing position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    
    
      <Canvas>
        <Suspense fallback={null}>
          <Earth2 position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
